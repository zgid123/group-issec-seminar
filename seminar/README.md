# Group ISSEC Seminar

Slidev presentation on AI agent security: attacks, defenses, and research directions. The main reference is *AI Agents Under Threat: A Survey of Key Security Challenges and Future Pathways* (Deng et al., 2025). Original reference materials remain in `../refs/`.

## Sections

1. **Tổng quan**: chatbot versus agent, agent workflow, security gaps, taxonomy, and threat models.
2. **Intra-execution**: Perception, Brain, and Action threats, followed by defense comparisons.
3. **Interaction**: risks involving environments, other agents, and memory.
4. **Hướng nghiên cứu và kết luận**: seven future research directions from survey §5, each in its own slide, followed by conclusions.

References and a thank-you slide close the deck.

The references section retains the primary Deng et al. survey and 49 supporting sources used by explicit content claims (including two technical demonstration reports). Every listed entry has a source link. `references/slide-sources.json` maps all 34 substantive slides to claims, survey sections/pages, and supporting sources. `references/claim-evidence.json` records all 32 comparison rows and the material actually checked: abstracts, specified paper sections, or the authors' implementation. `references/citation-audit.json` preserves the original inventory, exact survey bibliography entries and page locators, version differences, and unused exclusions. Inclusion is derived from claim mappings, not author-name matching or decorative mentions in notes.

Audit Markdown files live under `references/pages/`, mirroring the `pages/` folders and filenames. For example, `pages/discussion/01-research-directions.md` has its audit at `references/pages/discussion/01-research-directions.md`. Each audit links back to its slide. Open `exports/source-audit.html` for a searchable copy of these audits. These checks are not a full-text review of every source or a reproduction of results. In particular, PrivacyAsst is checked against the authors' README; collusion and Cicero descriptions remain explicitly survey-mediated where original access was blocked. Regenerate audit files and references, then check their consistency:

```sh
node scripts/render-source-notes.mjs
node scripts/render-references.mjs
node scripts/check-sources.mjs
```

The check validates coverage and consistency, not scientific truth or live URL availability. It writes `references/validation-report.json`. Edit the speaking script directly in each slide. The generator writes separate audit Markdown files and preserves slide notes and click cues. It also migrates legacy embedded audits out of slide notes. Update the source mapping and evidence ledger when changing research claims.

Comparison tables present methods, strengths, and weaknesses or limitations. Strengths identify either a reported result or a capability supported by the documented design; limitations distinguish observed problems from boundaries of the evaluation. Do not add generic strengths or limitations as if they were findings of a cited paper. Audit files distinguish survey summaries from original-paper checks, and quantitative results must retain their experimental conditions.

## Run, build, export

Use Node.js and pnpm installed directly. The project specifies pnpm 12.18.0 in `package.json`.

Run these commands from this directory:

```sh
pnpm install
pnpm dev
```

Build the website:

```sh
pnpm build
```

Install Chromium for exports, then generate PDF or PowerPoint output:

```sh
pnpm exec playwright install chromium
pnpm export
pnpm ppt
```

Both export commands include click states. Dependency versions are recorded in `package.json` and `pnpm-lock.yaml`.

## Project structure

- `slides.md`: cover, contents, section imports, references, and closing slide.
- `pages/`: section entry files (`main.md`) and numbered article files in presentation order.
- `assets/`: backgrounds and SVG assets.
- `components/`: reusable cards, callouts, and editable diagrams.
- `layouts/`: local Slidev layouts, including the dimmed cover.
- `style.css`: shared slide layouts and diagram styles.

Execution topics have separate files for prompt injection, jailbreak, backdoors, misalignment, hallucination, planning, and tool/supply-chain risks. Interaction topics also have separate files for environment interactions, indirect prompt injection, RL environments, computing resources, cooperative/competitive agents, and long-term/short-term memory.

## Components and presentation behavior

Use `ContentCard` for content cards and `Takeaway` for takeaway callouts. Their styles live inside their Vue components. Slide markup supplies titles and slot content; grid containers control their arrangement.

Workflow, security-gap, attack, and planning diagrams use editable Vue/SVG or HTML/CSS elements. Taxonomy SVGs live in `assets/`. The planning diagram is rendered by `PlanningStructuresDiagram`, rather than an embedded image.

The `shifting-intro` layout reveals content at click 1. Attack detail slides generally switch to defense comparisons at click 2. The security-gap slide switches from the tetrad to its diagram at click 2; the chatbot comparison reveals the agent at click 2 and takeaway at click 3.

Presenter notes sit in HTML comments at the end of each substantive slide and contain speaking guidance and click cues. Detailed source verification lives in the matching Markdown file under `references/pages/`: full survey citation, PDF page/section locators, claim-to-source mappings, original citations and links, survey bibliography numbers/pages, checked material, and source/version discrepancies. Visible tables retain author/year links. Keep speaking notes, audits, and displayed content consistent when editing.

Follow `AGENTS.md` and the workspace `../../SLIDE-STANDARDS.md` when maintaining the deck.
