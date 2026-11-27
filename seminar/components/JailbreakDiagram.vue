<template>
  <figure class="jailbreak-diagram" aria-label="Agent Smith: ảnh độc lan truyền trong hệ nhiều agent">
    <div class="jailbreak-flow">
      <div class="jailbreak-image">Ảnh độc</div>
      <span class="jailbreak-arrow" aria-hidden="true"></span>
      <div class="jailbreak-agents" role="img" aria-label="12 agent minh họa: 11 màu đỏ và một màu tím nhạt">
        <span v-for="agent in 12" :key="agent" class="jailbreak-agent" :class="{ 'jailbreak-agent-clean': agent === 4 }"></span>
      </div>
    </div>
    <figcaption>Agent Smith: lây nhiễm trong mô phỏng các agent LLaVA-1.5</figcaption>
  </figure>
</template>

<style scoped>
.jailbreak-diagram {
  margin: 0 auto;
  width: fit-content;
  max-width: 100%;
  font-family: Arial, sans-serif;
  color: #c8553d;
}
.jailbreak-flow {
  display: grid;
  grid-template-columns: 150px 80px max-content;
  align-items: center;
  justify-content: center;
}
.jailbreak-image {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;
  border-radius: 12px;
  background: #c8553d;
  color: white;
  font-size: 18px;
  font-weight: 700;
}
.jailbreak-arrow {
  position: relative;
  height: 2px;
  margin-right: 16px;
  background: #c8553d;
}
.jailbreak-arrow::after {
  content: '';
  position: absolute;
  right: -8px;
  top: 50%;
  transform: translateY(-50%);
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 8px solid #c8553d;
}
.jailbreak-agents {
  display: grid;
  grid-template-columns: repeat(4, 44px);
  justify-content: start;
  column-gap: 28px;
  row-gap: 12px;
}
.jailbreak-agent {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #c8553d;
}
.jailbreak-agent-clean {
  background: #d9cde3;
}
.jailbreak-diagram figcaption {
  margin-top: 18px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
}
</style>
