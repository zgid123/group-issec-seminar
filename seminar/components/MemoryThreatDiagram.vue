<template>
  <div class="memory-threat hoang-diagram" role="group" aria-label="Hai luồng: lập chỉ mục vào Vector DB và truy vấn tới LLM; đầu độc nhắm vào Vector DB">
    <svg viewBox="0 0 900 204" aria-hidden="true">
      <path d="M140 54 H166 M315 54 H341 M140 164 H166 M315 164 H341 M490 164 H516" stroke="#765186" stroke-width="2" fill="none" />
      <path d="M166 49 L175 54 L166 59 Z M341 49 L350 54 L341 59 Z M166 159 L175 164 L166 169 Z M341 159 L350 164 L341 169 Z M516 159 L525 164 L516 169 Z" fill="#765186" />
      <path d="M370 84 V124" stroke="#765186" stroke-width="2" fill="none" />
      <path d="M365 124 L370 134 L375 124 Z" fill="#765186" />
      <path d="M710 42 H430" stroke="#c8553d" stroke-width="2" fill="none" />
      <path d="M430 37 L420 42 L430 47 Z" fill="#c8553d" />
    </svg>
    <div class="memory-label memory-index-label">Lập chỉ mục</div>
    <div class="hoang-node memory-data">Dữ liệu</div>
    <div class="hoang-node memory-embedding">Embedding</div>
    <div class="hoang-node hoang-core memory-db">Vector DB</div>
    <div class="hoang-node hoang-danger memory-poison">Đầu độc khi lập chỉ mục</div>
    <div class="memory-label memory-query-label">Truy vấn</div>
    <div class="hoang-node memory-question">Câu hỏi</div>
    <div class="hoang-node memory-query-embedding">Embedding</div>
    <div class="hoang-node memory-nearest">Tìm gần nhất</div>
    <div class="hoang-node memory-answer">LLM trả lời</div>
  </div>
</template>

<style scoped>
.memory-threat {
  aspect-ratio: 900 / 204;
}

.memory-threat .hoang-node {
  width: 15.56%;
  height: 29.4%;
  background: #efe8f3;
}

.memory-label {
  position: absolute;
  left: 1%;
  color: #6b6475;
  font-size: 17px;
  font-weight: 700;
}

.memory-index-label {
  top: -2%;
}

.memory-query-label {
  top: 50%;
}

.memory-data,
.memory-embedding,
.memory-db {
  top: 11.76%;
}

.memory-data,
.memory-question {
  left: 0;
}

.memory-embedding,
.memory-query-embedding {
  left: 19.44%;
}

.memory-db,
.memory-nearest {
  left: 38.89%;
}

.memory-threat .memory-db {
  background: #765186;
}

.memory-threat .memory-poison {
  top: 0;
  right: 0;
  width: 21.1%;
  height: 41.18%;
  background: #fbe8e3;
}

.memory-question,
.memory-query-embedding,
.memory-nearest,
.memory-answer {
  top: 65.69%;
}

.memory-answer {
  left: 58.33%;
}
</style>
