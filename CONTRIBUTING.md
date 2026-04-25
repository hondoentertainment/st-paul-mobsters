# Contributing

## Proposing content changes

Open an issue or pull request describing what you want to change and why. Keep edits focused so reviewers can evaluate them quickly.

## Sources

Substantive historical or factual claims must cite credible primary or secondary sources. See [RESEARCH.md](RESEARCH.md) for how this project handles research and citations.

## Before you submit

Run (same checks as GitHub Actions):

```bash
npm run verify:citations && npm run build && npm run lint
```

Fix any failures before requesting review.

### CI on GitHub

This repo includes `.github/workflows/ci.yml`. If workflows do not run after push:

1. On GitHub: **Settings → Actions → General** (for the repository).
2. Under **Actions permissions**, choose **Allow all actions and reusable workflows** (or your org’s approved policy).
3. Confirm **Actions** is enabled for the repo (not “Disable actions”).
4. You can also run CI manually: **Actions** tab → **CI** → **Run workflow**.
