# AGENTS.md — Geometry of Meaning Website

## Purpose and stack

This repository publishes the public Geometry of Meaning archive at
`https://research.michelangelogubinelli.com`. It is a static [Zola](https://www.getzola.org/)
site using Tera templates, Markdown, vanilla CSS, local fonts, and a small local
Plotly iframe-height script. MathJax is loaded by the page template for rendered
mathematics.

The sibling `../geometry-of-meaning` repository is the source of truth for corpora,
experiment protocols, immutable runs, notebooks, metrics, and figure builders.
This repository owns editorial pages, chart manifests, imported public charts, and
site presentation only.

The shared editorial stylesheet is provided by the
`homepage-foundation` Git submodule at `static/styles/foundation/`. Research-specific
rules belong in `static/styles/research.css`.

## Repository map

| Path | Purpose |
| --- | --- |
| `content/experiments/` | Method and design pages |
| `content/observations/` | Run-backed analytical reports |
| `content/data/` | Public corpus and dataset documentation |
| `data/observation-charts/` | Chart import manifests, one per observation |
| `scripts/sync_observation_charts.py` | Validated research-to-site chart importer |
| `static/charts/` | Generated, self-contained Plotly HTML; never edit manually |
| `static/scripts/plot-frames.js` | Same-origin chart height bridge |
| `templates/` | Zola layouts, shortcodes, and reusable partials |
| `static/styles/foundation/` | Shared stylesheet Git submodule; do not edit from this repo |
| `static/styles/research.css` | Research-site CSS extensions |
| `zola.toml` | Site metadata, URLs, Markdown settings, and ignored static paths |
| `public/` | Generated build output; never edit or commit |

`templates/base.html` owns the document shell and loads the research stylesheet,
MathJax, and plot-frame script. `section.html` lists a section’s pages;
`page.html` renders an individual page. Shortcodes in
`templates/shortcodes/` provide figures and charts.

## Content and source-of-truth rules

Every content file has TOML front matter between `+++` markers with at least
`title` and `description`; dated pages use ISO dates (`YYYY-MM-DD`) and stable
lowercase kebab-case slugs.

- Experiment pages explain methods and link to the matching public data page. Keep outcomes and synthesis in observation pages.
- Observation pages must tie every quantitative claim to a named immutable run and state its model, population, aggregation, and projection basis.
- Data pages document canonical corpus membership and metadata; do not invent or silently correct research data here.
- Never modify anything under `../geometry-of-meaning/runs/`; runs are immutable.
- Preserve the distinction between recorded measurements, interpretation, and inference limits.
- Read the pinned run’s manifest, summary, metric tables, experiment README, configuration, and objective notebook before reporting results.

## Chart publication contract

1. Build charts from immutable run artifacts in `../geometry-of-meaning` with the experiment’s showcase builder.
2. Export selected HTML below the research repository’s showcase artifact tree.
3. Declare each selected export once in `data/observation-charts/<observation-slug>.json`.
4. Run `python3 scripts/sync_observation_charts.py --observation <slug>`.
5. Reference every selected output with the `plot` shortcode and a precise caption.

The importer injects the grayscale style block and same-origin height bridge. Use
luminance, line, marker, and pattern encodings rather than colorful palettes. Do
not copy or edit generated chart HTML by hand, add fixed iframe heights, or bypass
the importer.

## Styling and template conventions

- Keep shared editorial changes in `homepage-foundation`; keep maths, figures, plots, and data tables in `research.css`.
- Use existing layout and prose classes before creating a new class.
- Keep template markup accessible and content-independent; use shortcodes for repeated figure/chart behavior.
- Preserve the existing monochrome visual language and typography.
- Keep the foundation submodule’s `.git` and `.agents/**` excluded through `ignored_static` in `zola.toml`.

## Development and validation

From this repository:

```sh
git submodule update --init --recursive
python3 scripts/sync_observation_charts.py
node --check static/scripts/plot-frames.js
zola check --skip-external-links
zola build
git diff --check
```

Run plain `zola check` before release when external-link access is available.
Verify that every manifest output exists, appears exactly once in its observation,
contains one grayscale style block and one height bridge, and renders without
clipping at desktop and mobile widths. Run focused tests in the research repository
when a figure builder changes.

## Repository hygiene

- `.agents` is ignored and must not be added to the site repository.
- Keep `public/` and generated `static/charts/` output governed by their documented workflows; never edit build output directly.
- Do not duplicate research source data or modify immutable runs.
- Preserve unrelated publication changes and report research-repository changes separately.
- Use Conventional Commits with imperative subjects.
