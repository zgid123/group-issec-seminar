# Group ISSEC Seminar

Slidev deck using Phong’s presentation as the base, with Hoàng’s overview and attack slides rebuilt as editable Slidev content. Source files in `../refs/` remain unchanged.

## Sections

1. **Tổng quan**: Hoàng 3 → Hoàng 5 → Hoàng 6 → Phong’s taxonomy and threat models.
2. **Intra-execution**: Perception, Brain, and Action taxonomies → attack details from Hoàng → defenses at click 2.
3. **Interaction**: Agent2Environment, Agent2Agent, and Agent2Memory taxonomies → attack details from Hoàng → defenses at click 2.
4. **Kết luận và hướng nghiên cứu**: Phong’s conclusion, pending further content guidance.

Phong’s references and final thank-you slide are retained. The cover lists Dương Tấn Huỳnh Phong and Trần Trọng Hoàng, with the existing cover date (2026-11-15). Timing remains unset.

## Run, build, export

```sh
corepack pnpm install
corepack pnpm dev
corepack pnpm build
corepack pnpm exec playwright install chromium
corepack pnpm export
corepack pnpm ppt
```

## Source mapping

| Seminar file | Source |
| --- | --- |
| `pages/overview/01-chatbot-vs-agent.md` | Hoàng slide 3, editable HTML/CSS diagram |
| `pages/overview/02-agent-workflow.md` | Hoàng slide 5, editable HTML/CSS diagram |
| `pages/overview/03-security-gaps.md` | Hoàng slide 6, editable HTML/CSS diagram |
| `pages/overview/05-taxonomy.md`–`06-threat-model-map.md` | Phong overview with editable taxonomy SVG and `TableComparison` |
| `pages/execution-threats/`, `pages/interaction-threats/` | Taxonomy diagrams followed by 14 attack-topic slides based on Hoàng slides 7–18; defenses integrated at click 2 |
| `pages/discussion/` | Phong conclusion content |

Hoàng’s presenter notes are retained in the corresponding Markdown files. Phong’s assets and deck styles are reused. Dependencies remain pinned in `package.json` and `pnpm-lock.yaml`.

## Hoàng slides in HTML

The chatbot/agent comparison uses `shifting-intro` with the title “Chatbot và AI agent”. The slide Markdown directly composes reusable `ChatbotDiagram` and `AgentDiagram` components. Slide 5 uses `shifting-intro` with `AgentWorkflowDiagram`; slide 6 uses `shifting-intro`: click 1 shows `RectangleOrbitTetrad`, and click 2 shows the editable `GapsDiagram`. Text, boxes, borders, arrows, and diagram labels are HTML/CSS. Their wording and composition follow Hoàng’s deck; speaker notes remain in the corresponding Markdown files. No whole-slide image is used.

## Attack detail sequence

Each taxonomy overview is followed by the corresponding attack detail slides inside the same article file. Each attack reveals its source-specific diagram or cards first, then replaces them with its defense comparison at click 2. The former shared defense slides are no longer imported. The prompt injection slide uses `PromptInjectionDiagram` for Hoàng’s original prompt flow; its two explanation blocks live directly in the slide Markdown. The composition, wording, and colors follow Hoàng’s source. Other details preserve Hoàng’s numbered cards, feedback loops, interaction panels, and memory pipeline using dedicated Vue components and the original planning vector figure. Defense comparisons use the addon’s `TableComparison`. Full source text and presenter notes from Hoàng are retained in each detail slide’s speaker notes.

See [the attack source mapping](docs/hoang-attack-mapping.md) for all 14 topic slides. Where Hoàng only provides an overview or notes, details are drawn from those notes and the supplied survey; the mapping identifies those cases.
