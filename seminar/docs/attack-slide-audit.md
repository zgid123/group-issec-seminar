# Source fidelity and rendering review

The deck contains 34 slides and 14 attack-topic slides. Hoàng’s original topic grouping is restored from Misalignment onward; the previously accepted Prompt Injection, Jailbreak, and Backdoor compositions remain intact.

## Source fidelity

- Misalignment uses three numbered cards, not a generic attack flow.
- Planning uses the original vector planning figure.
- Action retains its four-stage flow and distinct Agent2Tool/Supply Chain annotations.
- Environment retains its forward/backward diagram and five environment categories.
- Indirect Prompt Injection includes the user request from below, root cause, and comparison table.
- RL retains the reward feedback loop and poisoning arrow.
- Computing Resources uses the original 2×2 cards and DevOps connections.
- Cooperative/Competitive interactions retain separate diagrams and source explanations.
- Long-term Memory retains the indexing/retrieval pipeline and three outcome cards.
- Hallucination and Short-term Memory use Hoàng’s speaker notes without inventing diagrams attributed to him.

Full source text and notes are retained in Markdown presenter notes and [the PPTX extraction](hoang-source-excerpts.json). The original PPTX SHA256 was checked unchanged. Source references remain intact.

## Defenses

Click 2 replaces attack content with the existing TableComparison component. Defense names remain English, citations smaller, and explanation text Vietnamese. Qualitative strengths/weaknesses are analytical additions based on the supplied survey. Hoàng’s operational DevOps measures are identified separately; open research gaps are not presented as proven defenses.

## Validation

- Production build passed (`npm run build`).
- Checked all 22 click-1/click-2 states for the 11 revised topic slides in Chromium at 980×552: no runtime errors, missing images, or content-area overflow.
- Inspected source diagrams and cards visually; tightened defense table spacing using the supported component spacing prop and concise defense copy.
- PDF export with reveal states passed: 77 pages. Inspected the exported memory diagram for connectors, text, and footer clearance.
- Updated `group-issec-seminar.pdf` with the validated export.
