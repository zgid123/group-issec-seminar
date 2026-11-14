<script setup lang="ts">
const perception = ['Prompt Injection Attack', 'Jailbreak'];
const brain = ['Backdoor Attack', 'Hallucination', 'Misalignment', 'Planning Risk', 'Tools Use Risk'];
const environment = ['Indirect Prompt Injection Attack', 'Reinforcement Learning Environment Threat', 'Simulated & Sandbox Environment Threat', 'Computing Resource Management Environment Threat', 'Physical Environment Threat'];
const interaction = ['Cooperative Risk', 'Competitive Risk', 'Long-term Memory Threat', 'Short-term Memory Threat'];
</script>

<template>
  <div class="gap-figure" role="group" aria-label="Hình 1: bốn khoảng trống bảo mật, tương ứng các nhóm đe dọa trong survey.">
    <div class="figure-left">
      <section class="threat-box gap-one">
        <div class="diagram-heading">Gap 1</div>
        <p v-for="item in perception" :key="item">{{ item }}</p>
      </section>
      <section class="threat-box gap-three">
        <div class="diagram-heading">Gap 3</div>
        <p v-for="item in environment" :key="item">{{ item }}</p>
      </section>
    </div>
    <section class="environment-space">
      <div class="diagram-heading">Environment Space</div>
      <div class="diagram-caption">Gap 3. Variability of operational environments</div>
      <div class="entities">
        <div class="user-input">User Input</div>
        <span class="entity-arrow">→</span>
        <div class="single-agent">
          <p>Single AI Agent</p>
          <div class="cycle">⟳</div>
          <strong>Gap 2. Complexity in<br />internal executions</strong>
        </div>
      </div>
      <div class="input-track"></div>
      <div class="diagram-caption gap-one-caption">Gap 1. Unpredictability of multi-step user inputs</div>
    </section>
    <div class="outside-links"><span>→</span><span>←</span></div>
    <div class="outside-entities">Outside<br />Entities</div>
    <div class="figure-right">
      <section class="threat-box gap-two">
        <div class="diagram-heading">Gap 2</div>
        <p v-for="item in brain" :key="item">{{ item }}</p>
      </section>
      <section class="threat-box gap-four">
        <div class="diagram-heading">Gap 4</div>
        <p v-for="item in interaction" :key="item">{{ item }}</p>
      </section>
    </div>
    <div class="interaction-track"></div>
    <div class="diagram-caption interaction-caption">Gap 4. Interactions with untrusted external entities</div>
  </div>
</template>

<style scoped>
.gap-figure {
  position: relative;
  margin: 0 auto;
  width: 810px;
  height: 363px;
  color: #111;
  font-family: 'Times New Roman', serif;
}

.figure-left, .figure-right {
  position: absolute;
  top: 0;
  display: grid;
  width: 172.5px;
  gap: 25.5px;
}

.figure-left {
  left: 0;
}

.figure-right {
  right: 0;
  gap: 18px;
}

.threat-box {
  padding: 6px;
  border: 1.5px solid #9ec8db;
  border-radius: 4.5px;
}

.threat-box .diagram-heading {
  margin: 0 3px 6px;
  font-size: 16.5px;
  font-weight: 700;
}

.threat-box p {
  margin: 3px 0;
  padding: 3px 1.5px;
  border: 1.5px solid #ccc;
  background: #b5e1e8;
  font-size: 11.1px;
  line-height: 1.2;
  text-align: center;
}

.gap-three {
  border-color: #93c657;
}

.gap-three p {
  background: #e1edc7;
}

.gap-two {
  border-color: #288ec2;
}

.gap-two p {
  background: #bdd8e7;
}

.gap-four {
  border-color: #e7ab39;
}

.gap-four p {
  background: #f9d59c;
}

.environment-space {
  position: absolute;
  top: 3px;
  left: 177px;
  width: 337.5px;
  height: 315px;
  border: 2.25px solid #777;
  border-radius: 6px;
  box-shadow: 0 0 3px #888;
}

.environment-space .diagram-heading {
  margin: 9px 6px 16.5px;
  font-size: 16.5px;
  font-weight: 400;
}

.environment-space .diagram-caption {
  margin: 0 6px;
  color: #ba292c;
  font-size: 15px;
  line-height: 1.2;
  text-align: center;
}

.entities {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 13.5px 15px 0;
}

.user-input, .single-agent {
  height: 184.5px;
  border: 2.25px solid #888;
  box-shadow: 0 0 3px #aaa;
  font-size: 15px;
}

.user-input {
  display: flex;
  width: 70.5px;
  align-items: center;
  justify-content: center;
}

.entity-arrow {
  font-size: 33px;
}

.single-agent {
  flex: 1;
  text-align: center;
}

.single-agent p {
  margin: 9px 0 0;
}

.cycle {
  height: 108px;
  color: #ba292c;
  font-size: 102px;
  line-height: 1;
}

.single-agent strong {
  color: #ba292c;
  font-size: 15px;
}

.input-track, .interaction-track {
  position: absolute;
  height: 4.5px;
  background: #c3292c;
}

.input-track {
  top: 273px;
  left: 27px;
  width: 135px;
}

.input-track::before, .input-track::after, .interaction-track::before, .interaction-track::after {
  position: absolute;
  top: -2px;
  width: 10.5px;
  height: 10.5px;
  border-radius: 50%;
  background: #c3292c;
  content: '';
}

.input-track::before, .interaction-track::before {
  left: 0;
}

.input-track::after, .interaction-track::after {
  right: 0;
}

.environment-space .gap-one-caption {
  position: absolute;
  top: 286.5px;
  left: 0;
  right: 0;
  font-size: 13.5px;
}

.outside-links {
  position: absolute;
  top: 90px;
  left: 514.5px;
  display: flex;
  height: 189px;
  flex-direction: column;
  justify-content: space-between;
  font-size: 34.5px;
}

.outside-entities {
  position: absolute;
  top: 3px;
  left: 559.5px;
  display: flex;
  height: 315px;
  width: 75px;
  align-items: center;
  justify-content: center;
  border: 2.25px solid #777;
  border-radius: 6px;
  box-shadow: 0 0 3px #888;
  font-size: 15px;
  text-align: center;
}

.interaction-track {
  top: 328.5px;
  left: 462px;
  width: 156px;
}

.interaction-caption {
  position: absolute;
  top: 336px;
  left: 198px;
  right: 0;
  margin: 0;
  color: #ba292c;
  font-size: 15px;
  text-align: center;
}

</style>
