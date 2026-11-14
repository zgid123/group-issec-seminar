<template>
  <div class="competitive-diagram" role="group" aria-label="Agent A lừa Agent B">
    <div class="competitive-agent">Agent A</div>
    <div class="competitive-connector"><span>lừa</span></div>
    <div class="competitive-agent">Agent B</div>
  </div>
</template>

<style scoped>
.competitive-diagram {
  display: grid;
  grid-template-columns: 1fr 70px 1fr;
  align-items: center;
  padding: 8px 0;
  font: 700 18px Arial, sans-serif;
}

.competitive-agent {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  border-radius: 10px;
  background: #765186;
  color: white;
}

.competitive-connector {
  position: relative;
  height: 2px;
  margin-right: 8px;
  background: #c8553d;
}

.competitive-connector::after {
  content: '';
  position: absolute;
  right: -8px;
  top: -4px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 8px solid #c8553d;
}

.competitive-connector span {
  position: absolute;
  bottom: 14px;
  left: 0;
  width: 70px;
  color: #c8553d;
  text-align: center;
  font-size: 16px;
}
</style>
