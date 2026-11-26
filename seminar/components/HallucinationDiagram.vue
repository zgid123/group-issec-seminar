<template>
  <figure class="hal-diagram" aria-label="Hallucination: agent bịa email khi thiếu thông tin, và lỗi nhỏ bị khuếch đại khi lan qua nhiều agent">
    <div class="hal-label">Một agent: thiếu thông tin thì “đoán”</div>
    <div class="hal-flow">
      <div class="hal-node">Người dùng: “Chia sẻ ghi chú kỹ thuật mật cho đồng nghiệp Minh”<small>(quên đưa email)</small></div>
      <span class="hal-arrow"></span>
      <div class="hal-node agent">Agent</div>
      <span class="hal-arrow bad"></span>
      <div class="hal-node fake">Bịa email “minh@…”<small>đoán từ tên, nghe hợp lý</small></div>
      <span class="hal-arrow bad"></span>
      <div class="hal-node harm">Cấp quyền ghi chú mật cho địa chỉ bịa</div>
    </div>

    <div class="hal-label">Nhiều agent: lỗi nhỏ bị khuếch đại</div>
    <div class="hal-chain">
      <div class="hal-step"><span class="hal-dot-box"><span class="hal-dot s1"></span></span>Agent A<small>lỗi nhỏ</small></div>
      <span class="hal-arrow bad"></span>
      <div class="hal-step"><span class="hal-dot-box"><span class="hal-dot s2"></span></span>Agent B<small>coi lỗi là dữ kiện</small></div>
      <span class="hal-arrow bad"></span>
      <div class="hal-step"><span class="hal-dot-box"><span class="hal-dot s3"></span></span>Agent C<small>dựa tiếp, lỗi lớn hơn</small></div>
      <span class="hal-arrow bad"></span>
      <div class="hal-node harm">Cả hệ giảm hiệu năng mạnh</div>
    </div>
  </figure>
</template>

<style scoped>
.hal-diagram { margin: 4px 0 0; font: 17px/1.25 Arial, sans-serif; color: #25212b; }
.hal-label { font-size: 13px; font-weight: 700; color: #6b6475; text-transform: uppercase; letter-spacing: .03em; margin: 0 0 8px; }
.hal-flow, .hal-chain { display: grid; align-items: center; margin-bottom: 22px; }
.hal-flow { grid-template-columns: 1.35fr 32px 96px 32px 1.1fr 32px 1fr; }
.hal-chain { grid-template-columns: 1fr 32px 1fr 32px 1fr 32px 1fr; margin-bottom: 0; }
.hal-node { min-height: 88px; padding: 10px 12px; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; border-radius: 12px; background: #f1f1f3; }
.hal-node small, .hal-step small { display: block; margin-top: 4px; font-size: 14px; color: #6b6475; font-weight: 400; }
.agent { background: #765186; color: white; font-weight: 700; min-height: 64px; }
.fake { background: #fff4d6; color: #8a5a00; font-weight: 700; border: 2px dashed #c99a2e; }
.harm { background: #fbe8e3; color: #c8553d; font-weight: 700; }
.hal-step { min-height: 72px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; font-weight: 700; color: #765186; border-radius: 12px; border: 2px solid #d9cde3; background: white; }
.hal-dot-box { height: 30px; display: flex; align-items: center; margin-bottom: 2px; }
.hal-dot { display: block; border-radius: 50%; background: #c8553d; }
.s1 { width: 10px; height: 10px; }
.s2 { width: 18px; height: 18px; }
.s3 { width: 28px; height: 28px; }
.hal-arrow { position: relative; height: 2px; background: #6b6475; margin: 0 9px 0 4px; }
.hal-arrow::after { content: ''; position: absolute; right: -7px; top: 50%; transform: translateY(-50%); border-top: 4px solid transparent; border-bottom: 4px solid transparent; border-left: 7px solid #6b6475; }
.hal-arrow.bad { background: #c8553d; }
.hal-arrow.bad::after { border-left-color: #c8553d; }
</style>
