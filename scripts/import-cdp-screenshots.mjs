import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, '..', 'public', 'projects')

const captures = [
  {
    source:
      'C:\\Users\\Nerdk\\.cursor\\browser-logs\\cdp-response-Page.captureScreenshot-2026-06-09T16-15-56-675Z.json',
    target: 'portfolio-dark.png',
  },
  {
    source:
      'C:\\Users\\Nerdk\\.cursor\\browser-logs\\cdp-response-Page.captureScreenshot-2026-06-09T16-16-13-813Z.json',
    target: 'portfolio-light.png',
  },
]

await mkdir(outDir, { recursive: true })

for (const { source, target } of captures) {
  const raw = await readFile(source, 'utf8')
  const parsed = JSON.parse(raw)
  const base64 = parsed.data ?? parsed.result?.data

  if (!base64) {
    throw new Error(`No screenshot data found in ${source}`)
  }

  const outputPath = path.join(outDir, target)
  await writeFile(outputPath, Buffer.from(base64, 'base64'))
  console.log(`Saved ${outputPath}`)
}
