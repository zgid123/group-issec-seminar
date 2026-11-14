<template>
  <div class="agent-diagram" role="group" aria-label="Yêu cầu → Perception → Brain (LLM) → Action → Công cụ, web, máy chủ; quan sát kết quả rồi quay lại Brain.">
    <div class="agent-flow">
      <div class="agent-node">Yêu cầu</div>
      <span class="agent-arrow" aria-hidden="true"></span>
      <div class="agent-node agent-stage">Perception</div>
      <span class="agent-arrow" aria-hidden="true"></span>
      <div class="agent-node agent-brain">Brain<br />(LLM)</div>
      <span class="agent-arrow" aria-hidden="true"></span>
      <div class="agent-node agent-stage">Action</div>
      <span class="agent-arrow" aria-hidden="true"></span>
      <div class="agent-node">Công cụ,<br />web, máy<br />chủ</div>
    </div>
    <div class="agent-feedback" aria-hidden="true"></div>
    <div class="agent-feedback-label">Quan sát kết quả, lặp lại</div>
  </div>
</template>

<style scoped>
.agent-diagram {
  position: relative;
  width: 100%;
  height: 126px;
  font-family: Arial, sans-serif;
}

.agent-flow {
  display: flex;
  align-items: center;
}

.agent-node {
  display: flex;
  min-width: 0;
  height: 60px;
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: #27232e;
  background: #f1f1f4;
  font-size: 17px;
  line-height: 1.1;
  text-align: center;
}

.agent-stage {
  background: #eee7f3;
}

.agent-brain {
  color: #fff;
  background: #75518a;
  font-weight: 700;
}

.agent-arrow {
  position: relative;
  height: 2px;
  flex: 0 0 24px;
}

.agent-arrow::before {
  position: absolute;
  inset: 0 8px 0 0;
  background: #6c6678;
  content: '';
}

.agent-arrow::after {
  width: 0;
  height: 0;
  position: absolute;
  top: -3px;
  right: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 8px solid #6c6678;
  content: '';
}

.agent-feedback {
  position: absolute;
  top: 60px;
  right: calc((100% - 96px) / 10);
  left: 50%;
  height: 34px;
  border: 2px solid #6c6678;
  border-top: 0;
}

.agent-feedback::before {
  position: absolute;
  top: 0;
  left: -5px;
  border-right: 4px solid transparent;
  border-bottom: 8px solid #6c6678;
  border-left: 4px solid transparent;
  content: '';
}

.agent-feedback-label {
  position: absolute;
  top: 100px;
  right: 3%;
  left: 47%;
  color: #6c6678;
  font-size: 16px;
  line-height: 1.2;
  text-align: center;
}
</style>
