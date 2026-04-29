import { test, expect } from "@playwright/test";

test.describe("Portfolio – Hero", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("page has correct title", async ({ page }) => {
    await expect(page).toHaveTitle(/Ryszard Tomaszewski/);
  });

  test("hero displays name and role label", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Ryszard");
    await expect(page.getByText("Senior SDET · QA Automation Lead")).toBeVisible();
  });

  test("hero CTA buttons are present and functional", async ({ page }) => {
    await expect(page.getByRole("button", { name: /View My Work/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /Download Resume/i })).toBeVisible();
    await expect(
      page.locator("#hero").getByRole("link", { name: /LinkedIn/i })
    ).toHaveAttribute("href", "https://www.linkedin.com/in/ryszardtomaszewski/");
  });

  test("resume link points to PDF", async ({ page }) => {
    const resume = page.getByRole("link", { name: /Download Resume/i });
    await expect(resume).toHaveAttribute("href", /\.pdf$/);
  });
});

test.describe("Portfolio – Experience", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Independent Consultant entry is visible", async ({ page }) => {
    await expect(page.getByText("Independent Consultant")).toBeVisible();
  });

  test("AI tools are listed in consulting section", async ({ page }) => {
    await expect(page.getByText(/Claude Code/).first()).toBeVisible();
    await expect(page.getByText(/GitHub Copilot/).first()).toBeVisible();
    await expect(page.getByText(/ChatGPT/).first()).toBeVisible();
  });
});

test.describe("Portfolio – Contact", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("contact section is reachable by scrolling", async ({ page }) => {
    await page.locator("#contact").scrollIntoViewIfNeeded();
    await expect(page.locator("#contact")).toBeInViewport({ ratio: 0.1 });
  });

  test("email link is present and correct", async ({ page }) => {
    await page.locator("#contact").scrollIntoViewIfNeeded();
    await expect(
      page.locator('a[href="mailto:tomaszewski.ryszard@gmail.com"]')
    ).toBeVisible();
  });
});
