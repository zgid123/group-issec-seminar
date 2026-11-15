<template>
  <div class="seminar-action" role="group" aria-label="Action input, Action execution, Observation, Final answer; vị trí của Agent2Tool và Supply chain">
    <div class="seminar-action-label">Agent2Tool (chủ động)</div>
    <div class="seminar-action-label">Supply chain</div>
    <div class="seminar-action-label seminar-action-passive">Agent2Tool (bị động): lộ dữ liệu khi trả về</div>
    <div class="seminar-action-node">Action input</div>
    <div class="seminar-action-node">Action execution<br />(trong tool)</div>
    <div class="seminar-action-node">Observation</div>
    <div class="seminar-action-node">Final answer</div>
  </div>
</template>

<style scoped>
.seminar-action {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 32px;
  row-gap: 18px;
  font: 18px/1.25 Arial, sans-serif;
}

.seminar-action-label {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 56px;
  padding: 8px 12px;
  border-radius: 12px;
  background: #fbe8e3;
  color: #c8553d;
  text-align: center;
  font-weight: 700;
}

.seminar-action-passive {
  grid-column: span 2;
}

.seminar-action-node {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 74px;
  padding: 10px;
  border-radius: 12px;
  background: #efe8f3;
  color: #25212b;
  text-align: center;
  font-weight: 700;
}

.seminar-action-node:not(:last-child)::after {
  content: '';
  position: absolute;
  top: calc(50% - 5px);
  left: 100%;
  width: 32px;
  height: 10px;
  background: #765186;
  clip-path: polygon(0 40%, 75% 40%, 75% 0, 100% 50%, 75% 100%, 75% 60%, 0 60%);
}
</style>
