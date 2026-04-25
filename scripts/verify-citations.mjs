/**
 * Ensures every citation ID used in narrative content files exists in citationsRegistry.
 */
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const registryPath = join(root, 'src', 'content', 'citationsRegistry.ts')
const registryText = readFileSync(registryPath, 'utf8')
const valid = new Set(
  [...registryText.matchAll(/\n  '([a-z0-9-]+)': \{/g)].map((m) => m[1]),
)

const contentFiles = [
  join(root, 'src', 'content', 'mobsters.ts'),
  join(root, 'src', 'content', 'prohibition.ts'),
]

function extractCitationIds(src) {
  const used = new Set()
  const re = /citationIds:\s*\[([\s\S]*?)\]/g
  let m
  while ((m = re.exec(src))) {
    const inner = m[1]
    for (const x of inner.matchAll(/'([^']+)'/g)) used.add(x[1])
  }
  return used
}

let failed = false
for (const file of contentFiles) {
  const text = readFileSync(file, 'utf8')
  const used = extractCitationIds(text)
  for (const id of used) {
    if (!valid.has(id)) {
      console.error(`Unknown citation id "${id}" in ${file}`)
      failed = true
    }
  }
}

if (failed) process.exit(1)
console.log('Citation ID verification passed.')
