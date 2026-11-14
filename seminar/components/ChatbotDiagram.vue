<template>
  <div class="chatbot-diagram" role="group" aria-label="Câu hỏi → LLM → Câu trả lời bằng chữ">
    <div class="chatbot-node">Câu hỏi</div>
    <span class="chatbot-arrow" aria-hidden="true"></span>
    <div class="chatbot-node">LLM</div>
    <span class="chatbot-arrow" aria-hidden="true"></span>
    <div class="chatbot-node">Câu trả lời<br />(chữ)</div>
  </div>
</template>

<style scoped>
.chatbot-diagram {
  display: flex;
  width: 100%;
  max-width: 560px;
  align-items: center;
  font-family: Arial, sans-serif;
}

.chatbot-node {
  display: flex;
  min-width: 0;
  height: 60px;
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: #111;
  background: #f1f1f4;
  font-size: 19px;
  line-height: 1.15;
  text-align: center;
}

.chatbot-arrow {
  position: relative;
  height: 2px;
  flex: 0 0 34px;
}

.chatbot-arrow::before {
  position: absolute;
  inset: 0 8px 0 0;
  background: #6c6678;
  content: '';
}

.chatbot-arrow::after {
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
</style>
