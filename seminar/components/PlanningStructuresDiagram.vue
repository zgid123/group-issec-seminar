<script setup lang="ts">
// Expand horizontal spacing without stretching text or symbol artwork.
const wideX = (value: number) => value * 1.5;
const tallY = (value: number) => value * 1.12;
const panels = [
  { x: 8, width: 100, center: 58, title: ['Sequential', 'Planning'] },
  { x: 122, width: 100, center: 172, title: ['Iterative', 'Refinement', 'Planning'] },
  { x: 236, width: 218, center: 345, title: ['Branch-Based Planning'] },
  { x: 468, width: 284, center: 610, title: ['Tree-Structured Planning'] },
];
const chains = [
  { x: 18, y: 182 },
  { x: 248, y: 182 },
  { x: 364, y: 182 },
];
const nodes = [
  { x: 132, y: 80, step: '1' },
  { x: 132, y: 178, step: '2' },
  { x: 132, y: 286, step: 'n' },
  { x: 570, y: 80, step: '1' },
  { x: 478, y: 180, step: '2' },
  { x: 642, y: 180, step: '2' },
  { x: 478, y: 298, step: 'n' },
  { x: 586, y: 298, step: 'n' },
  { x: 670, y: 298, step: 'n' },
];
</script>

<template>
  <svg class="planning-structures" viewBox="0 0 1140 493" role="img" aria-labelledby="planning-title planning-desc">
    <title id="planning-title">Four planning structures and attack locations</title>
    <desc id="planning-desc">Sequential planning executes a chain of steps. Iterative refinement calls the multimodal LLM again between steps. Branch-based planning explores multiple chains. Tree-structured planning expands several levels of branches. Red arrows and attacker icons mark vulnerable transitions, following the source figure.</desc>
    <defs>
      <marker id="planning-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 Z" fill="#394746" />
      </marker>
      <marker id="planning-danger-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 Z" fill="#ff3829" />
      </marker>
      <symbol id="planning-input" viewBox="0 0 42 34">
        <path d="M 3 29 V 4 H 15 L 20 8 H 36 V 29 Z M 3 29 L 10 12 H 40 L 33 29 Z" fill="#fff" stroke="#394746" stroke-width="1.3" />
        <path d="M 19 16 L 26 20 L 19 24 Z" fill="none" stroke="#394746" />
      </symbol>
      <symbol id="planning-model" viewBox="0 0 42 42">
        <g fill="none" stroke="#137bc1" stroke-width="2.4" stroke-linecap="square" stroke-linejoin="round">
          <rect x="3" y="3" width="36" height="36" rx="4" />
          <path d="M 9 15 V 9 H 21 V 15 H 15 V 21 H 3" />
          <path d="M 27 3 V 9 H 33 V 21 H 27 V 15 H 21" />
          <path d="M 39 27 H 27 V 33 H 21 V 27 H 15" />
          <path d="M 15 39 V 33 H 9 V 27 H 21 V 21" />
          <path d="M 33 33 V 39" />
        </g>
      </symbol>
      <symbol id="planning-bulb" viewBox="0 0 18 23">
        <path d="M 5 16 C 5 12 1 11 2 7 C 2 -1 16 -1 16 7 C 17 11 13 12 13 16 Z" fill="#ffbd37" />
        <path d="M 6 18 H 12 M 7 21 H 11" stroke="#e5a124" stroke-width="1.7" stroke-linecap="round" />
        <path d="M 5 8 Q 4 4 8 3" fill="none" stroke="#fff5cc" stroke-width="1.5" />
      </symbol>
      <symbol id="planning-attacker" viewBox="0 0 36 36">
        <g fill="#ff3829">
          <path d="M 10 12 L 13 3 Q 15 1 18 4 Q 21 1 23 3 L 26 12 Q 18 15 10 12 Z" />
          <path d="M 2 12 Q 6 14 10 14 Q 18 17 26 14 Q 30 14 34 12 L 31 17 Q 18 22 5 17 Z" />
          <path d="M 8 20 L 17 23 L 18 21 L 19 23 L 28 20 L 26 27 L 18 33 L 10 27 Z" />
          <path d="M 2 21 L 7 23 L 9 29 L 16 35 L 5 31 Z M 34 21 L 29 23 L 27 29 L 20 35 L 31 31 Z" />
        </g>
        <g fill="none" stroke="#ffffff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
          <path d="M 10 22 L 15 24 M 26 22 L 21 24" />
          <path d="M 13 28 L 18 30 L 23 28 M 18 25 V 30" />
        </g>
      </symbol>
      <symbol id="planning-down" viewBox="0 0 28 28">
        <path d="M 9 1 H 19 V 16 H 26 L 14 27 L 2 16 H 9 Z" fill="#fff" stroke="currentColor" stroke-width="1.2" />
      </symbol>
    </defs>

    <g v-for="panel in panels" :key="panel.x">
      <rect :x="wideX(panel.x)" :y="tallY(3)" :width="wideX(panel.width)" :height="tallY(432)" rx="9" class="panel" />
      <use href="#planning-input" :x="wideX(panel.center - 20)" :y="tallY(13)" width="60" height="34" />
      <text :x="wideX(panel.center)" :y="tallY(60)" class="input-label" text-anchor="middle">Multi-modal input</text>
      <use href="#planning-down" :x="wideX(panel.center - 14)" :y="tallY(80) - 18" width="42" height="18" color="#394746" />
      <text :x="wideX(panel.center)" :y="tallY(panel.title.length === 3 ? 391 : panel.title.length === 2 ? 405 : 418)" class="caption" text-anchor="middle">
        <tspan v-for="(line, index) in panel.title" :key="line" :x="wideX(panel.center)" :dy="index ? 16 : 0">{{ line }}</tspan>
      </text>
    </g>

    <g v-for="x in [58, 345]" :key="x">
      <use href="#planning-model" :x="wideX(x - 23)" :y="tallY(88)" width="69" height="46" />
      <text :x="wideX(x)" :y="tallY(153)" text-anchor="middle">MLLM</text>
      <use href="#planning-down" :x="wideX(x - 14)" :y="tallY(178) - 18" width="42" height="18" color="#394746" />
    </g>

    <g v-for="(chain, index) in chains" :key="chain.x">
      <rect :x="wideX(chain.x)" :y="tallY(chain.y)" width="120" :height="tallY(161)" rx="7" class="step-box" />
      <g v-for="(label, row) in ['1', '2', 'n']" :key="label">
        <use href="#planning-bulb" :x="wideX(chain.x + 6)" :y="tallY(chain.y + 7 + row * 62)" width="22.5" height="20" />
        <text :x="wideX(chain.x + 26)" :y="tallY(chain.y + 23 + row * 62)">Step {{ label }}</text>
      </g>
      <path :d="`M ${wideX(chain.x + 40)} ${tallY(chain.y + 34)} v 27.64`" :class="index === 1 ? 'arrow' : 'danger-arrow'" />
      <text :x="wideX(chain.x + 40)" :y="tallY(chain.y + 103)" text-anchor="middle">⋮</text>
      <path :d="`M ${wideX(chain.x + 40)} ${tallY(chain.y + 110)} v 25.400000000000002`" class="arrow" />
    </g>
    <text x="519" :y="tallY(276)" text-anchor="middle">…</text>

    <g v-for="node in nodes" :key="`${node.x}-${node.y}`">
      <rect :x="wideX(node.x)" :y="tallY(node.y)" width="120" :height="tallY(76)" rx="7" class="step-box" />
      <use href="#planning-model" :x="wideX(node.x + 7)" :y="tallY(node.y + 5)" width="31.5" height="21" />
      <text :x="wideX(node.x + 31)" :y="tallY(node.y + 22)">MLLM</text>
      <path :d="`M ${wideX(node.x + 40)} ${tallY(node.y + 29)} v 22.040000000000003`" :class="node.x === 132 && node.step === '2' ? 'danger-arrow' : 'arrow'" />
      <use href="#planning-bulb" :x="wideX(node.x + 7)" :y="tallY(node.y + 49)" width="22.5" height="20" />
      <text :x="wideX(node.x + 27)" :y="tallY(node.y + 65)">Step {{ node.step }}</text>
    </g>
    <use href="#planning-down" x="237" :y="tallY(175) - 18" width="42" height="18" color="#394746" />
    <text x="258" :y="tallY(270) - 8" text-anchor="middle">⋮</text>
    <use href="#planning-down" x="237" :y="tallY(285) - 24" width="42" height="24" color="#394746" />

    <use href="#planning-down" x="894" :y="tallY(176) - 18" width="42" height="18" color="#394746" />
    <text x="903" :y="tallY(234)" text-anchor="middle">…</text>
    <text x="777" :y="tallY(276) - 8" text-anchor="middle">⋮</text>
    <use href="#planning-down" x="756" :y="tallY(294) - 24" width="42" height="24" color="#394746" />
    <text x="1023" :y="tallY(273) - 8" text-anchor="middle">⋮</text>
    <use href="#planning-down" x="1002" :y="tallY(296) - 24" width="42" height="24" color="#ff3829" />
    <text x="856.5" :y="tallY(346)" text-anchor="middle">…</text>

    <use href="#planning-attacker" x="115.5" :y="tallY(212)" width="51" height="34" />
    <use href="#planning-attacker" x="292.5" :y="tallY(204)" width="51" height="34" />
    <use href="#planning-attacker" x="645" :y="tallY(212)" width="51" height="34" />
    <use href="#planning-attacker" x="1071" :y="tallY(254)" width="51" height="34" />
  </svg>
</template>

<style scoped>
.planning-structures {
  display: block;
  width: 100%;
  height: 340px;
  font-family: 'Times New Roman', serif;
  font-size: 14px;
  color: #111;
}

.planning-structures text {
  fill: currentColor;
}

.panel {
  fill: #fff;
  stroke: #97a6a6;
  stroke-width: 1.1;
  stroke-dasharray: 9 5;
}

.step-box {
  fill: #e8f2f5;
  stroke: #394746;
  stroke-width: 1;
  stroke-dasharray: 6 4;
}

.input-label {
  font-size: 11px;
}

.caption {
  font-size: 15px;
  font-style: italic;
  font-weight: 700;
}

.arrow {
  fill: none;
  stroke: #394746;
  stroke-width: 1.1;
  marker-end: url(#planning-arrow);
}

.danger-arrow {
  fill: none;
  stroke: #ff3829;
  stroke-width: 1.1;
  marker-end: url(#planning-danger-arrow);
}
</style>
