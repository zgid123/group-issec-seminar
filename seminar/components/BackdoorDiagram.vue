<template>
  <div class="backdoor-flow" role="group" aria-label="Agent email có backdoor chèn link lừa đảo nhưng báo đã gửi xong">
    <div class="backdoor-node">Người dùng: "Gửi email cho bạn tôi"</div>
    <span class="backdoor-arrow"></span>
    <div class="backdoor-node compromised">Agent email (LLM có backdoor)</div>
    <span class="backdoor-arrow malicious"></span>
    <div class="backdoor-node payload">Lén chèn link lừa đảo vào thư</div>
    <span class="backdoor-arrow"></span>
    <div class="backdoor-node result">Báo lại: "Đã gửi xong ✓"</div>
  </div>
</template>
<style scoped>
.backdoor-flow { display:grid; grid-template-columns:1fr 36px 1fr 36px 1.2fr 36px 1.1fr; align-items:center; font:18px/1.25 Arial,sans-serif; color:#25212b; margin:28px 0; }
.backdoor-node { min-height:96px; padding:14px; box-sizing:border-box; display:flex; align-items:center; justify-content:center; text-align:center; border-radius:12px; background:#f1f1f3; }
.compromised { background:#765186; color:white; border:3px solid #c8553d; font-weight:700; }
.payload { background:#fbe8e3; color:#c8553d; font-weight:700; }
.result { background:#e3f2eb; }
.backdoor-arrow { position:relative; height:2px; background:#6b6475; margin-right:7px; }
.backdoor-arrow::after { content:''; position:absolute; right:-7px; top:50%; transform:translateY(-50%); border-top:4px solid transparent; border-bottom:4px solid transparent; border-left:7px solid #6b6475; }
.malicious { background:#c8553d; }
.malicious::after { border-left-color:#c8553d; }
</style>
