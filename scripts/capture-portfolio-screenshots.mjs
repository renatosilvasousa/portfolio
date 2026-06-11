import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, '..', 'public', 'projects')
const baseUrl = process.env.PORTFOLIO_URL ?? 'http://localhost:5173'

async function main() {
  let chromium

  try {
    ;({ chromium } = await import('playwright'))
  } catch {
    console.error(
      'Playwright não encontrado. Instale com:\n  npm install -D playwright\n  npx playwright install chromium',
    )
    process.exit(1)
  }

  await mkdir(outDir, { recursive: true })

  const browser = await chromium.launch()
  const page = await browser.newPage({
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 2,
  })

  for (const [theme, filename] of [
    ['dark', 'portfolio-dark.png'],
    ['light', 'portfolio-light.png'],
  ] as const) {
    await page.goto(baseUrl, { waitUntil: 'networkidle' })
    await page.evaluate((nextTheme) => {
      document.documentElement.setAttribute('data-theme', nextTheme)
      localStorage.setItem('portfolio-theme', nextTheme)
      const icon = document.getElementById('theme-favicon')
      if (icon) {
        icon.href = nextTheme === 'dark' ? '/favicon.svg' : '/favicon-light.svg'
      }
      window.scrollTo(0, 0)
    }, theme)
    await page.waitForTimeout(500)
    await page.screenshot({
      path: path.join(outDir, filename),
      type: 'png',
    })
    console.log(`Saved public/projects/${filename}`)
  }

  await browser.close()
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
