<template>
  <svg class="gap-figure" viewBox="0 0 760 440" role="img" aria-labelledby="gaps-title gaps-description">
    <title id="gaps-title">Bốn khoảng trống bảo mật của AI agent</title>
    <desc id="gaps-description">Environment Space contains User Input and a Single AI Agent, connected in both directions. The agent interacts with Outside Entities. Red annotations identify unpredictable multi-step inputs, complex internal execution, variable environments, and untrusted external interactions.</desc>
    <defs>
      <marker id="gap-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
        <path d="M 0 0 L 10 5 L 0 10 Z" fill="#414a48" />
      </marker>
      <marker id="gap-red-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#e53925" stroke-width="1.4" />
      </marker>
    </defs>
    <rect x="15" y="15" width="550" height="362" rx="8" class="box" />
    <text x="28" y="44" class="label">Environment Space</text>
    <text x="28" y="83" class="gap-label">Gap 3. Variability of operational environments</text>
    <rect x="44" y="106" width="120" height="208" rx="4" class="box" />
    <text x="104" y="216" class="label" text-anchor="middle">User Input</text>
    <rect x="220" y="106" width="310" height="208" rx="8" class="box" />
    <text x="432" y="135" class="label" text-anchor="middle">Single AI Agent</text>
    <path d="M 164 185 H 216" class="arrow" />
    <path d="M 220 249 H 168" class="arrow" />
    <path d="M 265 94 Q 313 101 329 143" class="red-arrow" />
    <path d="M 322 207 C 318 174 352 153 380 168" class="red-arrow" />
    <path d="M 402 193 C 407 228 375 247 344 233" class="red-arrow" />
    <text x="248" y="269" class="gap-label">
      <tspan x="248">Gap 2. Complexity in</tspan>
      <tspan x="248" dy="25">internal executions</tspan>
    </text>
    <path d="M 96 332 H 332" class="track" />
    <circle cx="96" cy="332" r="5" class="dot" />
    <circle cx="332" cy="332" r="5" class="dot" />
    <text x="28" y="359" class="gap-label">Gap 1. Unpredictability of multi-step user inputs</text>
    <rect x="640" y="15" width="105" height="362" rx="10" class="box" />
    <text x="692" y="195" class="label" text-anchor="middle">
      <tspan x="692">Outside</tspan>
      <tspan x="692" dy="26">Entities</tspan>
    </text>
    <path d="M 565 159 H 636" class="arrow" />
    <path d="M 640 265 H 569" class="arrow" />
    <path d="M 485 393 H 681" class="track" />
    <circle cx="485" cy="393" r="5" class="dot" />
    <circle cx="681" cy="393" r="5" class="dot" />
    <text x="440" y="424" class="gap-label" text-anchor="middle">Gap 4. Interactions with untrusted external entities</text>
  </svg>
</template>

<style scoped>
.gap-figure {
  display: block;
  width: 100%;
  height: 390px;
  margin: 8px auto 0;
  font-family: 'Times New Roman', serif;
}

.box {
  fill: #ffffff;
  stroke: #7c8884;
  stroke-width: 2;
}

.label {
  fill: #111111;
  font-size: 20px;
}

.gap-label {
  fill: #d92c19;
  font-size: 19px;
  font-weight: 700;
}

.arrow {
  fill: none;
  stroke: #414a48;
  stroke-width: 2;
  marker-end: url(#gap-arrow);
}

.red-arrow {
  fill: none;
  stroke: #e53925;
  stroke-width: 2;
  marker-end: url(#gap-red-arrow);
}

.track {
  fill: none;
  stroke: #e53925;
  stroke-width: 3;
}

.dot {
  fill: #e53925;
}
</style>
