<script setup lang="ts">
const tasks = [
  { x: 294, y: 137, color: '#8056b3', label: 'subtask1' },
  { x: 294, y: 195, color: '#199dce', label: 'subtask2' },
  { x: 431, y: 137, color: '#f36b32', label: 'subtask3' },
  { x: 431, y: 195, color: '#38a34a', label: 'subtask4' },
];
const colors = ['#199dce', '#8056b3', '#38a34a', '#f36b32'];
</script>

<template>
  <svg class="workflow-figure" viewBox="0 0 900 465" role="img" aria-labelledby="workflow-title workflow-description">
    <title id="workflow-title">General workflow of an AI agent</title>
    <desc id="workflow-description">Perception transforms input into embeddings. The Brain uses an LLM for reasoning over subtasks and planning their execution. Action produces outputs, and the process iterates. The agent interacts bidirectionally with other agents, memory, and the environment.</desc>
    <defs>
      <marker id="wf-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#64716e" />
      </marker>
      <symbol id="wf-task" viewBox="0 0 30 30">
        <rect x="2" y="2" width="26" height="26" rx="7" fill="white" stroke="currentColor" stroke-width="1.8" />
        <path d="M 8 10 H 18 M 8 15 H 14 M 17 15 H 22 M 8 20 H 18" fill="none" stroke="currentColor" stroke-width="1.7" />
      </symbol>
      <symbol id="wf-code" viewBox="0 0 30 20">
        <rect x="1" y="1" width="28" height="18" fill="white" stroke="currentColor" />
        <path d="M 10 6 L 6 10 L 10 14 M 20 6 L 24 10 L 20 14 M 17 5 L 13 15" fill="none" stroke="currentColor" stroke-width="1.3" />
      </symbol>
      <symbol id="wf-llm" viewBox="0 0 40 40">
        <path d="M 4 4 H 36 V 36 H 4 V 12 H 28 V 28 H 12 V 20 H 20 M 20 4 V 12 M 36 20 H 28 M 20 28 V 36" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linejoin="round" />
      </symbol>
      <symbol id="wf-agent" viewBox="0 0 30 30">
        <path d="M 9 27 V 22 L 5 19 V 11 Q 6 3 16 3 Q 25 4 25 13 V 17 L 28 20 H 23 V 27 Z M 11 11 H 20 M 11 15 H 17 M 16 8 V 19" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
      </symbol>
      <symbol id="wf-memory" viewBox="0 0 30 30">
        <path d="M 4 6 H 26 V 25 H 4 Z M 8 10 V 20 M 13 10 V 20 M 18 10 V 20 M 22 10 V 20 M 4 22 H 26" fill="none" stroke="currentColor" stroke-width="2" />
      </symbol>
      <symbol id="wf-environment" viewBox="0 0 30 30">
        <path d="M 4 9 H 26 V 26 H 4 Z M 8 9 V 4 H 22 V 9 M 8 15 H 22 M 8 20 H 17" fill="none" stroke="currentColor" stroke-width="2" />
      </symbol>
    </defs>

    <rect x="48" y="15" width="837" height="319" rx="31" fill="#f0f8fc" stroke="#293c79" stroke-dasharray="10 5" />
    <text transform="translate(22 235) rotate(-90)" class="side-label">Intra-execution</text>
    <path d="M 130 72 V 40 H 842 V 72 M 465 40 V 72" class="line" marker-end="url(#wf-arrow)" />
    <path d="M 130 40 V 72" class="line" marker-end="url(#wf-arrow)" />
    <path d="M 842 40 V 72" class="line" marker-end="url(#wf-arrow)" />
    <text x="473" y="33" text-anchor="middle">Iterate</text>

    <text x="130" y="86" text-anchor="middle">Perception</text>
    <rect x="72" y="94" width="117" height="198" class="boundary" />
    <g class="input-icons" fill="#ffffff" stroke="#526260" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <title>Text document and video input</title>
      <path d="M 98 103 H 113 L 120 110 V 131 H 98 Z" />
      <path d="M 113 103 V 110 H 120 M 103 115 H 114 M 103 120 H 114 M 103 125 H 110" fill="none" />
      <rect x="134" y="106" width="29" height="23" rx="3" />
      <path d="M 145 112 L 154 117.5 L 145 123 Z" fill="#526260" stroke="none" />
    </g>
    <text x="130" y="145" class="italic" text-anchor="middle">input</text>
    <path d="M 130 151 V 171" class="thin-arrow" />
    <rect x="117" y="179" width="27" height="16" fill="none" stroke="#64716e" />
    <text x="130" y="191" class="tiny" text-anchor="middle">1010</text>
    <text x="130" y="212" class="italic" text-anchor="middle">input formatter</text>
    <path d="M 130 218 V 237" class="thin-arrow" />
    <use href="#wf-code" x="92" y="244" width="24" height="16" color="#ef91bb" />
    <use href="#wf-code" x="119" y="244" width="24" height="16" color="#199dce" />
    <use href="#wf-code" x="146" y="244" width="24" height="16" color="#8acb42" />
    <text x="130" y="277" class="italic" text-anchor="middle">input embeddings</text>

    <path d="M 199 175 H 219 V 166 L 237 181 L 219 196 V 187 H 199 Z" fill="#64716e" />
    <text x="465" y="86" text-anchor="middle">Brain</text>
    <rect x="246" y="94" width="515" height="198" class="boundary" />
    <rect x="269" y="110" width="204" height="151" rx="13" fill="#fff9eb" stroke="#efaa20" stroke-dasharray="10 6" />
    <use href="#wf-code" x="329" y="120" width="24" height="16" color="#ef91bb" />
    <use href="#wf-code" x="356" y="120" width="24" height="16" color="#199dce" />
    <use href="#wf-code" x="383" y="120" width="24" height="16" color="#8acb42" />
    <g v-for="task in tasks" :key="task.label">
      <use href="#wf-task" :x="task.x" :y="task.y" width="30" height="30" :color="task.color" />
      <text :x="task.x + 15" :y="task.y + 43" class="italic" text-anchor="middle">{{ task.label }}</text>
    </g>
    <use href="#wf-llm" x="351" y="163" width="40" height="40" color="#384746" />
    <text x="371" y="222" class="bold" text-anchor="middle">LLM</text>
    <path d="M 371 140 V 157" class="thin-arrow" />
    <path d="M 345 170 L 326 153" class="thin-arrow" />
    <path d="M 398 170 L 424 153" class="thin-arrow" />
    <path d="M 345 196 L 326 208" class="thin-arrow" />
    <path d="M 398 196 L 424 208" class="thin-arrow" />
    <text x="371" y="278" text-anchor="middle">reasoning</text>

    <path d="M 489 176 H 504 V 169 L 518 181 L 504 193 V 186 H 489 Z" fill="#64716e" />
    <rect x="532" y="110" width="207" height="151" rx="13" fill="#f2fbef" stroke="#8bc53f" stroke-dasharray="10 6" />
    <use href="#wf-llm" x="620" y="120" width="32" height="32" color="#384746" />
    <text x="636" y="169" class="bold" text-anchor="middle">LLM</text>
    <path d="M 636 174 V 190" class="thin-arrow" />
    <rect x="545" y="196" width="181" height="34" fill="#e9f1ef" stroke="#a9b5b2" />
    <use v-for="(color, index) in colors" :key="color" href="#wf-task" :x="553 + index * 43" y="199" width="27" height="27" :color="color" />
    <text x="636" y="248" class="italic" text-anchor="middle">subtasks</text>
    <text x="636" y="278" text-anchor="middle">planning</text>

    <path d="M 771 175 H 786 V 166 L 803 181 L 786 196 V 187 H 771 Z" fill="#64716e" />
    <text x="842" y="86" text-anchor="middle">Action</text>
    <rect x="815" y="94" width="54" height="198" class="boundary" />
    <g fill="none" stroke-width="2">
      <path d="M 830 109 H 851 V 133 H 830 Z M 834 115 H 847 M 834 121 H 847 M 834 127 H 842" stroke="#8056b3" />
      <path d="M 830 148 H 852 V 166 H 830 Z M 834 162 L 840 155 L 848 162" stroke="#38a34a" />
      <path d="M 830 183 H 852 V 198 H 830 Z M 830 183 L 841 192 L 852 183" stroke="#ef6c80" />
      <path d="M 830 218 H 835 L 842 212 V 233 L 835 227 H 830 Z M 847 216 Q 853 222 847 229 M 852 212 Q 861 222 852 233" stroke="#64716e" />
    </g>
    <use href="#wf-code" x="829" y="251" width="27" height="20" color="#b9b82f" />
    <use href="#wf-agent" x="416" y="300" width="25" height="25" color="#293c79" />
    <text x="446" y="320" class="agent-label">AI Agent</text>

    <g v-for="x in [202, 466, 730]" :key="x" fill="#f8fafc" stroke="#64716e" stroke-width="2">
      <path :d="`M ${x - 5} 343 L ${x - 13} 354 H ${x - 8} V 376 H ${x - 13} L ${x - 5} 387 L ${x + 3} 376 H ${x - 2} V 354 H ${x + 3} Z`" />
    </g>
    <text transform="translate(22 460) rotate(-90)" class="side-label">Interaction</text>
    <rect x="48" y="394" width="837" height="69" rx="24" fill="#fafafa" stroke="#555" stroke-dasharray="10 5" />
    <path d="M 115 408 H 272 L 289 425 V 451 H 115 Z" fill="#eff6ff" stroke="#293c79" />
    <use href="#wf-agent" x="140" y="420" width="25" height="25" color="#293c79" />
    <text x="174" y="440" class="agent-label">AI Agent</text>
    <path d="M 379 408 H 536 L 553 425 V 451 H 379 Z" fill="#fff7ed" stroke="#bb783c" />
    <use href="#wf-memory" x="407" y="420" width="25" height="25" color="#77502f" />
    <text x="441" y="440" class="memory-label">Memory</text>
    <path d="M 643 408 H 800 L 817 425 V 451 H 643 Z" fill="#e6f3df" stroke="#5b9b4b" />
    <use href="#wf-environment" x="656" y="420" width="25" height="25" color="#386533" />
    <text x="690" y="440" class="environment-label">Environment</text>
  </svg>
</template>

<style scoped>
.workflow-figure {
  display: block;
  width: 100%;
  height: 400px;
  margin-top: 8px;
  font-family: 'Times New Roman', serif;
  font-size: 16px;
  color: #172322;
}

.workflow-figure text {
  fill: currentColor;
}

.boundary {
  fill: #f4f8f6;
  stroke: #a7b4b3;
  stroke-width: 2;
  stroke-dasharray: 10 6;
}

.line {
  fill: none;
  stroke: #64716e;
  stroke-width: 1.7;
}

.thin-arrow {
  fill: none;
  stroke: #64716e;
  stroke-width: 1;
  marker-end: url(#wf-arrow);
}

.italic {
  font-size: 13px;
  font-style: italic;
}

.tiny {
  font-size: 12px;
}

.muted {
  color: #64716e;
  font-size: 14px;
}

.bold {
  font-weight: 700;
}

.side-label {
  font-size: 20px;
}

.agent-label,
.memory-label,
.environment-label {
  font-size: 18px;
  font-weight: 700;
}

.agent-label {
  color: #293c79;
}

.memory-label {
  color: #995526;
}

.environment-label {
  color: #386533;
}
</style>
