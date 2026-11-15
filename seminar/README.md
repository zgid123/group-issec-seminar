# Group ISSEC Seminar

Slidev presentation on AI agent security: attacks, defenses, and research directions. The main reference is *AI Agents Under Threat: A Survey of Key Security Challenges and Future Pathways* (Deng et al., 2025). Original reference materials remain in `../refs/`.

## Sections

1. **Tổng quan**: chatbot versus agent, agent workflow, security gaps, taxonomy, and threat models.
2. **Intra-execution**: Perception, Brain, and Action threats, followed by defense comparisons.
3. **Interaction**: risks involving environments, other agents, and memory.
4. **Kết luận và hướng nghiên cứu**: conclusions and research directions.

References and a thank-you slide close the deck.

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

Execution topics have separate files for prompt injection, jailbreak, backdoors, misalignment, hallucination, planning, and tool/supply-chain risks. Interaction articles currently contain multiple related slides.

## Components and presentation behavior

Use `ContentCard` for content cards and `Takeaway` for takeaway callouts. Their styles live inside their Vue components. Slide markup supplies titles and slot content; grid containers control their arrangement.

Workflow, security-gap, attack, and planning diagrams use editable Vue/SVG or HTML/CSS elements. Taxonomy SVGs live in `assets/`. The planning diagram is rendered by `PlanningStructuresDiagram`, rather than an embedded image.

The `shifting-intro` layout reveals content at click 1. Attack detail slides generally switch to defense comparisons at click 2. The security-gap slide switches from the tetrad to its diagram at click 2; the chatbot comparison reveals the agent at click 2 and takeaway at click 3.

Presenter notes sit in HTML comments at the end of each slide. Notes in `overview` and `execution-threats` use concise Vietnamese explanations, survey references where applicable, and `[click]` markers aligned with reveals. Keep notes and citations consistent with the displayed content when editing.

Follow `AGENTS.md` and the workspace `../../SLIDE-STANDARDS.md` when maintaining the deck.
