// Pre-deploy checks. Run with `npm test`. Any failure stops the deploy.
import { readFileSync, existsSync } from 'node:fs'
import vm from 'node:vm'

const errors = []
const html = readFileSync('index.html', 'utf8')

// 1. Every local file the page references must exist.
const refs = [...html.matchAll(/(?:href|src)="([^"#]+)"/g)].map(m => m[1])
for (const ref of refs) {
  if (/^(https?:|mailto:|tel:|data:)/.test(ref)) continue
  const path = ref.replace(/^\//, '')
  if (!existsSync(path)) errors.push(`Missing file referenced in index.html: ${ref}`)
}

// 2. Every in-page anchor (#about, #growth...) must point at a real id.
for (const [, id] of html.matchAll(/href="#([^"]+)"/g)) {
  if (!html.includes(`id="${id}"`)) errors.push(`Broken anchor link: #${id}`)
}

// 3. data.js must load, and each list must have the fields the page renders.
const ctx = {}
vm.createContext(ctx)
try {
  vm.runInContext(readFileSync('assets/js/data.js', 'utf8') +
    '\n;this.__d = { CAREER_START, TICKER, CHIPS, GROWTH, BUILD, STACK, ROLES, PROJECTS }', ctx)
} catch (e) {
  errors.push(`assets/js/data.js has a syntax error: ${e.message}`)
}
const d = ctx.__d
if (d) {
  if (Number.isNaN(Date.parse(d.CAREER_START))) errors.push('CAREER_START is not a valid date')
  const need = (list, name, fields) => list.forEach((item, i) => fields.forEach(f => {
    if (!item[f] || (Array.isArray(item[f]) && !item[f].length)) errors.push(`${name}[${i}] is missing "${f}"`)
  }))
  need(d.GROWTH, 'GROWTH', ['kind', 'title'])
  need(d.BUILD, 'BUILD', ['kind', 'title'])
  need(d.STACK, 'STACK', ['name', 'items'])
  need(d.ROLES, 'ROLES', ['title', 'org', 'start', 'end', 'points'])
  need(d.PROJECTS, 'PROJECTS', ['name', 'role', 'when', 'summary', 'stack', 'points'])
  ;[...d.GROWTH, ...d.BUILD].forEach(it => {
    if (it.url && !/^https?:\/\//.test(it.url)) errors.push(`URL must start with http(s): ${it.url}`)
  })
}

if (errors.length) {
  console.error(`✗ ${errors.length} problem(s) found:\n  - ` + errors.join('\n  - '))
  process.exit(1)
}
console.log(`✓ Site checks passed (${refs.length} references, data.js valid)`)
