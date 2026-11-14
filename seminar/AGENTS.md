# Seminar presentation

## Scope and references

Build and maintain the group's AI agent security seminar in this directory. Keep the editable deck, components, assets, and build configuration here.

Use the materials in `../refs/` as references:

- `AI_Agents_Under_Threat_A_Survey_of_Key_Security_Challenges_and_Future.pdf`: source survey.
- `phong-slides/`: reference Slidev deck and assets.
- `hoang-slides.pptx`: reference PowerPoint deck.

Preserve reference files unless the user requests changes. Adapt relevant material rather than copying speaker identity, dates, duration, or unsupported claims into the new deck.

## Content and evidence

- Give each slide one clear takeaway and keep detailed explanations in speaker notes.
- Preserve the presentation's established language and terminology; retain English technical terms where useful.
- Attribute claims, figures, and numerical results to their sources. Distinguish survey summaries from findings checked in original papers.
- Do not invent results, citations, or benchmark values. Clearly label illustrative examples.
- Explain attack assumptions, affected agent components, defenses, and defense limitations consistently.

## Slidev implementation

- Follow the workspace [SLIDE-STANDARDS.md](../../SLIDE-STANDARDS.md) when creating slides or revising charts.
- Use Apache ECharts through `vue-echarts` for numerical charts, with SVG rendering. Use Mermaid for process and architecture diagrams and native math for equations.
- Keep chart data separate from styling; include units, readable labels, source context, and accessible descriptions. Essential information must remain visible in static exports.
- Disable automatic chart animation by default and expose `data-chart-ready="true"` after rendering so export checks can wait for charts.
- Use reusable Vue components and layouts for repeated content. Keep slide-specific content separate from shared styling.
- Keep exact dependency versions and a deck lockfile. Inspect the existing package configuration before choosing build or export commands.
- Consult relevant installed skills in `.agents/skills/` when applicable, especially `slidevjs`; read their instructions before using them.
- Apply chart standards to new or requested chart work without retrofitting unrelated decks.

## Validation

- Run the available build and export commands after substantive presentation changes once the deck is configured.
- Inspect affected slides at presentation size for overflow, overlap, contrast, and readable text, including reveal states.
- Check PDF output when export is affected; ensure charts render completely and SVG charts remain vector content.
- Keep speaker notes, references, and any generated deliverables consistent with the deck. Report checks that could not be completed.
