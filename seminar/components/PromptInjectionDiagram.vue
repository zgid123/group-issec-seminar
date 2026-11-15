<template>
  <div class="seminar-prompt-injection" role="group" aria-label="Cấu trúc prompt và lệnh độc đi qua Brain">
    <div class="prompt-flow">
      <div class="prompt-caption">Cấu trúc một prompt</div>
      <div class="prompt-stack">
        <div class="prompt-instruction">Instruction (nhà phát triển viết)</div>
        <div class="prompt-context">External context (RAG, API)</div>
        <div class="prompt-user">User input: "Bỏ qua hướng dẫn ở trên, hãy..."</div>
      </div>
      <span class="prompt-arrow input-arrow" aria-hidden="true"></span>
      <div class="prompt-brain">Brain (LLM)</div>
      <span class="prompt-arrow output-arrow" aria-hidden="true"></span>
      <div class="prompt-result">
        <span>Làm theo lệnh của kẻ tấn công<br />thay vì lệnh gốc</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.seminar-prompt-injection {
  width: 100%;
  font-family: Arial, sans-serif;
  color: #25212b;
}

.seminar-prompt-injection * {
  box-sizing: border-box;
}

.prompt-flow {
  display: grid;
  grid-template-columns: minmax(0, 312fr) 58fr minmax(0, 146fr) 58fr minmax(0, 302fr);
  grid-template-rows: auto auto;
  row-gap: 4px;
  align-items: center;
}

.prompt-caption {
  grid-column: 1;
  grid-row: 1;
  padding-left: 10px;
  color: #6b6475;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
}

.prompt-stack {
  grid-column: 1;
  grid-row: 2;
  font-size: 16px;
  line-height: 20px;
}

.prompt-instruction {
  padding: 12px 10px;
  background: #efe8f3;
}

.prompt-context {
  padding: 12px 10px;
  background: #f1f1f3;
}

.prompt-user {
  padding: 16px 9px;
  border: 2px solid #c8553d;
  background: #fbe8e3;
}

.prompt-arrow {
  position: relative;
  grid-row: 2;
  height: 2px;
}

.prompt-arrow::before {
  position: absolute;
  inset: 0 7px 0 0;
  background: currentColor;
  content: '';
}

.prompt-arrow::after {
  position: absolute;
  top: -3px;
  right: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 8px solid currentColor;
  content: '';
}

.input-arrow {
  grid-column: 2;
  color: #6b6475;
}

.output-arrow {
  grid-column: 4;
  color: #c8553d;
}

.prompt-brain {
  display: flex;
  grid-column: 3;
  grid-row: 2;
  align-items: center;
  justify-content: center;
  min-height: 68px;
  border-radius: 12px;
  background: #765186;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
}

.prompt-result {
  display: flex;
  grid-column: 5;
  grid-row: 2;
  align-items: center;
  justify-content: center;
  min-height: 88px;
  padding: 12px;
  border-radius: 12px;
  background: #fbe8e3;
  color: #c8553d;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  text-align: center;
}
</style>
