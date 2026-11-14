<template>
  <div class="workflow-figure" role="group" aria-label="General workflow of AI agent">
    <div class="execution-label">Intra-execution</div>
    <section class="execution">
      <div class="iterate"><span>Iterate</span><i class="iteration-brain"></i></div>
      <div class="execution-grid">
        <div class="stage perception-stage">
          <div class="stage-heading">Perception</div>
          <div class="dashed-body">
            <div class="input-icons">▤ ▷</div>
            <i>input</i>
            <div class="vertical-arrow">↓</div>
            <div class="formatter">1010</div>
            <i>input formatter</i>
            <div class="vertical-arrow">↓</div>
            <div class="embeddings"><span>‹/›</span><span>‹/›</span><span>‹/›</span></div>
            <i>input embeddings</i>
          </div>
        </div>
        <span class="stage-arrow">➜</span>
        <div class="stage brain-stage">
          <div class="stage-heading">Brain</div>
          <div class="brain-body">
            <div class="reasoning">
              <div class="code-tokens">‹/›　‹/›　‹/›</div>
              <div class="reasoning-grid">
                <div><span class="task purple">☷</span><i>subtask1</i></div>
                <div class="llm-core">▦<strong>LLM</strong></div>
                <div><span class="task orange">☷</span><i>subtask3</i></div>
                <div><span class="task blue">☷</span><i>subtask2</i></div>
                <span class="reasoning-link">↗　↖</span>
                <div><span class="task green">☷</span><i>subtask4</i></div>
              </div>
            </div>
            <span class="stage-arrow">➜</span>
            <div class="planning">
              <div class="planning-llm">▦<strong>LLM</strong></div>
              <div class="vertical-arrow">↓</div>
              <div class="task-strip"><span class="task blue">☷</span><span class="task purple">☷</span><span class="task green">☷</span><span class="task orange">☷</span></div>
              <i>subtasks</i>
            </div>
          </div>
          <div class="brain-captions"><span>reasoning</span><span>planning</span></div>
        </div>
        <span class="stage-arrow">➜</span>
        <div class="stage action-stage">
          <div class="stage-heading">Action</div>
          <div class="dashed-body action-icons"><span>▤</span><span>▣</span><span>✉</span><span>♬</span><span>‹/›</span></div>
        </div>
      </div>
      <div class="agent-caption">♙ AI Agent</div>
    </section>
    <div class="interaction-arrows"><span>⇕</span><span>⇕</span><span>⇕</span></div>
    <div class="interaction-label">Interaction</div>
    <section class="interaction">
      <div class="external-agent">♙ AI Agent</div>
      <div class="external-memory">▣ Memory</div>
      <div class="external-environment">▣ Environment</div>
    </section>
  </div>
</template>

<style scoped>
.workflow-figure {
  position: relative;
  width: 100%;
  height: 400px;
  margin-top: 18px;
  color: #111;
  font-family: 'Times New Roman', serif;
}

.execution {
  position: absolute;
  top: 25px;
  left: 50px;
  right: 8px;
  height: 245px;
  padding: 37px 15px 14px;
  border: 1.5px dashed #293772;
  border-radius: 30px;
  background: #eef6fc;
}

.execution-label, .interaction-label {
  position: absolute;
  left: 12px;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 19px;
}

.execution-label {
  top: 117px;
}

.interaction-label {
  top: 325px;
}

.iterate {
  position: absolute;
  top: 14px;
  left: 58px;
  right: 33px;
  height: 15px;
  border: 2px solid #777;
  border-bottom: 0;
  font-size: 15px;
  text-align: center;
}

.execution-grid {
  display: grid;
  grid-template-columns: 95px 36px 1fr 36px 49px;
  align-items: center;
  gap: 4px;
}

.stage-heading {
  margin: -19px 0 2px;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
}

.dashed-body {
  display: flex;
  height: 162px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 2px dashed #aaa;
  background: #f4f4f4;
  line-height: 1;
}

.stage i {
  display: block;
  font-size: 11px;
  text-align: center;
}

.input-icons {
  font-size: 22px;
  color: #777;
}

.vertical-arrow {
  font-size: 22px;
  line-height: 1;
}

.formatter {
  padding: 1px 3px;
  border: 2px solid #777;
  font-size: 10px;
}

.embeddings {
  display: flex;
  gap: 3px;
  font-size: 13px;
  color: #3294c8;
}

.embeddings span {
  border: 1px solid currentColor;
}

.stage-arrow {
  color: #666;
  font-size: 33px;
  text-align: center;
}

.brain-body {
  display: grid;
  height: 162px;
  grid-template-columns: 1fr 33px 1fr;
  align-items: center;
  gap: 6px;
  padding: 10px;
  border: 2px dashed #aaa;
  background: #f4f4f4;
}

.reasoning, .planning {
  height: 132px;
  border: 1.5px dashed #e4aa00;
  border-radius: 10px;
  text-align: center;
}

.code-tokens {
  padding-top: 6px;
  color: #419cc8;
  font: 14px monospace;
}

.reasoning-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 5px 0;
  padding: 5px;
}

.task {
  display: inline-block;
  padding: 0 3px;
  border: 1.5px solid currentColor;
  border-radius: 6px;
  font: 22px Arial, sans-serif;
}

.purple {
  color: #8b57b3;
}

.orange {
  color: #e66e30;
}

.blue {
  color: #2999cd;
}

.green {
  color: #39a650;
}

.llm-core, .planning-llm {
  font-size: 32px;
  line-height: 1;
}

.llm-core strong, .planning-llm strong {
  display: block;
  font-size: 12px;
}

.reasoning-link {
  font-size: 17px;
}

.planning {
  padding-top: 8px;
  border-color: #95bd44;
}

.task-strip {
  display: flex;
  justify-content: space-evenly;
  margin: 0 4px 3px;
  padding: 4px 0;
  border: 1px solid #aaa;
  background: #e8eff1;
}

.task-strip .task {
  font-size: 17px;
}

.brain-captions {
  display: flex;
  justify-content: space-around;
  padding-top: 0;
  font-size: 13px;
  line-height: 1;
}

.action-icons {
  font-size: 24px;
  color: #8b57b3;
}

.action-icons span:nth-child(2) {
  color: #43994b;
}

.action-icons span:nth-child(3) {
  color: #df6b72;
}

.action-icons span:nth-child(5) {
  color: #b6ae00;
}

.agent-caption {
  position: absolute;
  bottom: 2px;
  left: 0;
  right: 0;
  color: #293772;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
}

.interaction-arrows {
  position: absolute;
  top: 273px;
  left: 75px;
  right: 25px;
  display: flex;
  justify-content: space-around;
  color: #777;
  font-size: 43px;
  line-height: 1;
}

.interaction {
  position: absolute;
  top: 320px;
  left: 50px;
  right: 8px;
  display: flex;
  height: 79px;
  align-items: center;
  justify-content: space-around;
  border: 1.5px dashed #333;
  border-radius: 24px;
}

.interaction > div {
  min-width: 140px;
  padding: 12px 8px;
  border: 1px solid currentColor;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
}

.external-agent {
  color: #293772;
  background: #eef6fc;
}

.external-memory {
  color: #9d6025;
  background: #faf4ea;
}

.external-environment {
  color: #31983e;
  background: #e0eed9;
}


.iterate > span {
  position: absolute;
  top: -16px;
  left: 45%;
  padding: 0 5px;
  background: #eef6fc;
  font-size: 13px;
}

.iterate::before, .iterate::after, .iteration-brain::after {
  position: absolute;
  bottom: -3px;
  border-top: 6px solid #777;
  border-right: 3px solid transparent;
  border-left: 3px solid transparent;
  content: '';
}

.iterate::before {
  left: -4px;
}

.iterate::after {
  right: -4px;
}

.iteration-brain {
  position: absolute;
  top: 0;
  left: 48%;
  height: 13px;
  border-left: 2px solid #777;
}

.iteration-brain::after {
  left: -4px;
}
</style>
