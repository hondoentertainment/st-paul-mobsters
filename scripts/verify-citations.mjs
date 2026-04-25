/**
 * Ensures every citation ID used in content `citationIds: [...]` arrays exists in
 * citationsRegistry, and that every registry key is referenced somewhere (no orphans).
 */
import { readdirSync, readFileSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const contentDir = join(root, 'src', 'content')

const registryPath = join(contentDir, 'citationsRegistry.ts')
const registryText = readFileSync(registryPath, 'utf8')
const valid = new Set(
  [...registryText.matchAll(/\n  '([a-z0-9-]+)': \{/g)].map((m) => m[1]),
)

/** @param {string} src @param {number} index */
function lineOfIndex(src, index) {
  return src.slice(0, index).split('\n').length
}

function collectTsFiles(dir) {
  /** @type {string[]} */
  const out = []
  const walk = (d) => {
    for (const ent of readdirSync(d, { withFileTypes: true })) {
      const full = join(d, ent.name)
      if (ent.isDirectory()) walk(full)
      else if (ent.name.endsWith('.ts')) out.push(full)
    }
  }
  walk(dir)
  out.sort()
  return out
}

/**
 * @param {string} src
 * @returns {{ id: string, line: number }[]}
 */
function extractCitationUsages(src) {
  /** @type {{ id: string, line: number }[]} */
  const usages = []
  const re = /citationIds:\s*\[([\s\S]*?)\]/g
  let m
  while ((m = re.exec(src))) {
    const fullMatch = m[0]
    const inner = m[1]
    const blockStart = m.index
    const innerOffset = blockStart + fullMatch.indexOf(inner)
    for (const x of inner.matchAll(/'([^']+)'/g)) {
      const id = x[1]
      const qStart = innerOffset + x.index
      usages.push({ id, line: lineOfIndex(src, qStart) })
    }
  }
  return usages
}

const contentFiles = collectTsFiles(contentDir)
/** @type {string[]} */
const unknownReports = []
const referenced = new Set()

for (const file of contentFiles) {
  const text = readFileSync(file, 'utf8')
  const rel = relative(root, file).split('\\').join('/')
  for (const { id, line } of extractCitationUsages(text)) {
    referenced.add(id)
    if (!valid.has(id)) {
      unknownReports.push(`Unknown citation id "${id}" in ${rel}:${line}`)
    }
  }
}

const orphans = [...valid].filter((k) => !referenced.has(k)).sort()

let failed = false

if (unknownReports.length) {
  failed = true
  for (const msg of unknownReports.sort()) console.error(msg)
}

if (orphans.length) {
  failed = true
  console.error(
    'Orphan citation registry keys (never used in any citationIds array):',
  )
  for (const id of orphans) console.error(`  ${id}`)
}

if (failed) process.exit(1)
console.log('Citation ID verification passed.')
