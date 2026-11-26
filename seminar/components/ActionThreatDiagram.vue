<template>
  <figure class="act" aria-label="Luồng agent gọi tool và ba điểm tấn công: Agent2Tool chủ động ở lệnh gửi đi, Supply chain trong tool, Agent2Tool bị động ở dữ liệu trả về">
    <!-- hàng trên: callout cho mũi tên -->
    <div class="act-call c-active">
      <b class="badge">1</b>
      <div><strong>Agent2Tool chủ động</strong><span>Lệnh quá quyền: chạy lệnh rủi ro cao mà không hỏi người dùng (ToolEmu)</span></div>
    </div>
    <div class="act-call c-passive">
      <b class="badge">3</b>
      <div><strong>Agent2Tool bị động</strong><span>Dữ liệu người dùng bị chặn, lộ cho bên thứ ba (HuggingGPT, ToolFormer)</span></div>
    </div>

    <!-- hàng giữa: luồng -->
    <div style="grid-column:1" class="flow act-node">Người dùng</div>
    <span style="grid-column:2" class="flow arr"></span>
    <div style="grid-column:3" class="flow act-node agent">Agent</div>
    <div style="grid-column:4" class="flow act-link"><b class="badge sm">1</b><span class="arr bad"></span><em>Action input</em></div>
    <div style="grid-column:5" class="flow act-node tool"><b class="badge sm">2</b>Tool / plugin / API<small>bên ngoài agent</small></div>
    <div style="grid-column:6" class="flow act-link"><b class="badge sm">3</b><span class="arr bad"></span><em>Observation</em></div>
    <div style="grid-column:7" class="flow act-node">Final answer</div>

    <!-- hàng dưới: callout cho tool -->
    <div class="act-call c-supply">
      <b class="badge">2</b>
      <div><strong>Supply chain: chính tool bị nhiễm</strong><span>Trang web độc (WIPI) · phụ đề YouTube bị sửa · plugin Webpilot lấy lịch sử chat</span></div>
    </div>
  </figure>
</template>

<style scoped>
.act {
  display: grid;
  grid-template-columns: 1fr 36px 0.9fr 1.25fr 1.35fr 1.25fr 1fr;
  grid-template-rows: auto auto auto;
  row-gap: 14px;
  align-items: center;
  margin: 6px 0 0;
  font: 17px/1.25 Arial, sans-serif;
  color: #25212b;
}
.act-node { min-height: 78px; padding: 8px 10px; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; border-radius: 12px; background: #f1f1f3; font-weight: 700; position: relative; }
.act-node small { margin-top: 3px; font-size: 13px; font-weight: 400; color: #6b6475; }
.agent { background: #765186; color: white; }
.tool { background: #fbe8e3; color: #c8553d; border: 3px solid #c8553d; }
.tool .badge { position: absolute; top: -12px; right: -10px; }

.act-link { display: flex; flex-direction: column; align-items: stretch; gap: 4px; padding: 0 6px; }
.act-link em { font-style: normal; font-size: 14px; color: #6b6475; text-align: center; }
.act-link .badge { align-self: center; }
.act-link .arr { align-self: stretch; }

.arr { display: block; align-self: center; position: relative; height: 2px; background: #6b6475; margin: 0 9px 0 4px; }
.arr::after { content: ''; position: absolute; right: -7px; top: 50%; transform: translateY(-50%); border-top: 4px solid transparent; border-bottom: 4px solid transparent; border-left: 7px solid #6b6475; }
.arr.bad { height: 3px; background: #c8553d; }
.arr.bad::after { border-left-color: #c8553d; }

.badge { flex: none; display: grid; place-items: center; width: 28px; height: 28px; border-radius: 50%; background: #c8553d; color: white; font-size: 15px; font-weight: 700; }
.badge.sm { width: 24px; height: 24px; font-size: 13px; }

.act-call { display: flex; gap: 10px; align-items: flex-start; padding: 10px 12px; border-radius: 12px; background: white; border: 2px solid #f0c9bf; }
.act-call strong { display: block; color: #c8553d; margin-bottom: 2px; }
.act-call span { font-size: 15px; color: #25212b; }
.flow { grid-row: 2; }
.c-active  { grid-row: 1; grid-column: 3 / 5; }
.c-passive { grid-row: 1; grid-column: 6 / 8; }
.c-supply  { grid-row: 3; grid-column: 4 / 7; }
</style>
