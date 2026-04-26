import { test, expect } from '@playwright/test'

test.describe('St. Paul History', () => {
  test('home page loads with hero and main landmark', async ({ page }) => {
    await page.goto('/')
    await expect(
      page.getByRole('heading', { name: /River city, capital, and Prohibition-era crossroads/ }),
    ).toBeVisible()
    await expect(page.getByRole('main')).toBeVisible()
  })

  test('primary nav: Home → Search shows search heading', async ({ page }) => {
    await page.goto('/')
    await page
      .getByRole('navigation', { name: 'Primary' })
      .getByRole('link', { name: 'Search', exact: true })
      .click()
    await expect(page).toHaveURL(/\/search$/)
    await expect(page.getByRole('heading', { name: 'Search the site' })).toBeVisible()
  })

  test('direct route smoke: /mobsters', async ({ page }) => {
    await page.goto('/mobsters')
    await expect(page).toHaveURL(/\/mobsters$/)
    await expect(page.getByRole('main')).toBeVisible()
  })

  test('direct route smoke: /timeline', async ({ page }) => {
    await page.goto('/timeline')
    await expect(page).toHaveURL(/\/timeline$/)
    await expect(page.getByRole('main')).toBeVisible()
  })

  test('search: typing shows results for a known term', async ({ page }) => {
    await page.goto('/search')
    await page.getByLabel('Search').fill('Volstead')
    await expect(
      page.getByRole('listitem').getByRole('link').filter({ hasText: /volstead/i }).first(),
    ).toBeVisible()
  })
})
