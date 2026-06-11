import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const outDir = path.join(root, 'public', 'projects')

const source = process.argv[2]
const targetName = process.argv[3]

if (!source || !targetName) {
  console.error('Usage: node scripts/save-cdp-screenshot.mjs <cdp-json> <output-name.png>')
  process.exit(1)
}

const raw = await readFile(source, 'utf8')
const parsed = JSON.parse(raw)
const base64 = parsed.data ?? parsed.result?.data

if (!base64) {
  console.error('No screenshot data found in CDP response.')
  process.exit(1)
}

await mkdir(outDir, { recursive: true })
await writeFile(path.join(outDir, targetName), Buffer.from(base64, 'base64'))
console.log(`Saved ${targetName}`)
