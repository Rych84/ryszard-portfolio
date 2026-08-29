# Portfolio .NET/NUnit Playwright Tests

.NET/NUnit port of the TypeScript Playwright suite at
`../tests/e2e/portfolio.spec.ts`. Covers the same 12 scenarios
(Hero, Experience, Contact) against the Next.js dev server at
`http://localhost:3000`, Chromium only.

## One-time setup

From this directory:

```bash
dotnet build
pwsh bin/Debug/<TFM>/playwright.ps1 install chromium
```

Substitute the actual `TargetFramework` folder for `<TFM>` (check
`bin/Debug/` after building, e.g. `net8.0`). If `pwsh` isn't available,
use `powershell.exe -File bin/Debug/<TFM>/playwright.ps1 install chromium`.

## Running the tests

```bash
dotnet test
```

The suite starts `npm run dev` automatically if `localhost:3000` isn't
already responding (and stops it afterward); if the dev server is
already running, the suite reuses it and leaves it running.

## Scope

Chromium desktop only. The TS suite also runs a Pixel 5 mobile-viewport
project — that parity is a deferred fast-follow, not covered here.
