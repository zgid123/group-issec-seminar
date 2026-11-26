<script setup lang="ts">
const rows = [
  {
    cause: 'Dữ liệu huấn luyện',
    input: 'Dữ liệu tiền huấn luyện có nội dung độc, thiên vị (~0,2% ở LLaMA2)',
    actual: 'Trả lời mang thiên vị giới tính, chủng tộc, vùng miền',
    expected: 'Trả lời trung lập',
  },
  {
    cause: 'Người và agent',
    input: 'Người dùng: "Tôi nghĩ đáp án là B" (B sai)',
    actual: 'Sycophancy: đồng ý chọn B dù biết B sai',
    expected: 'Giữ đáp án đúng và giải thích',
  },
  {
    cause: 'Môi trường embodied',
    input: 'Lệnh: "Bật đèn xanh cho người đi bộ"',
    actual: 'Bật ngay, dù đèn xe làn bên cạnh cũng đang xanh',
    expected: 'Chờ đèn xe chuyển đỏ rồi mới bật',
  },
]
</script>

<template>
  <figure class="mis-diagram" aria-label="Ba nguồn misalignment: cùng một agent, đầu vào khác nhau, hành vi lệch khỏi mong đợi của con người">
    <div class="mis-head">
      <span>Nguồn lệch</span>
      <span>Đầu vào</span>
      <span></span>
      <span>Agent</span>
      <span></span>
      <span>Agent làm gì <em>(so với mong đợi)</em></span>
    </div>
    <div v-for="(row, i) in rows" :key="row.cause" class="mis-row">
      <div class="mis-cause"><b>{{ i + 1 }}</b>{{ row.cause }}</div>
      <div class="mis-node">{{ row.input }}</div>
      <span class="mis-arrow"></span>
      <div class="mis-agent">Agent</div>
      <span class="mis-arrow bad"></span>
      <div class="mis-out">
        <div class="mis-actual">✗ {{ row.actual }}</div>
        <div class="mis-expected">✓ Mong đợi: {{ row.expected }}</div>
      </div>
    </div>
  </figure>
</template>

<style scoped>
.mis-diagram { margin: 6px 0 0; font: 16px/1.25 Arial, sans-serif; color: #25212b; }
.mis-head, .mis-row {
  display: grid;
  grid-template-columns: 150px 1fr 34px 84px 34px 1.25fr;
  align-items: center;
}
.mis-head { font-size: 13px; font-weight: 700; color: #6b6475; text-transform: uppercase; letter-spacing: .03em; margin-bottom: 6px; }
.mis-head span:nth-child(4) { text-align: center; }
.mis-head em { font-style: normal; text-transform: none; font-weight: 400; }
.mis-row { margin-bottom: 12px; }
.mis-cause { display: flex; align-items: center; gap: 8px; font-weight: 700; color: #765186; padding-right: 10px; }
.mis-cause b { flex: none; display: grid; place-items: center; width: 26px; height: 26px; border-radius: 50%; background: #765186; color: white; font-size: 14px; }
.mis-node { min-height: 72px; padding: 10px 12px; box-sizing: border-box; display: flex; align-items: center; border-radius: 10px; background: #f1f1f3; }
.mis-agent { height: 56px; display: grid; place-items: center; border-radius: 10px; background: #765186; color: white; font-weight: 700; }
.mis-out { display: flex; flex-direction: column; gap: 4px; }
.mis-actual { padding: 8px 12px; border-radius: 10px; background: #fbe8e3; color: #c8553d; font-weight: 700; }
.mis-expected { padding: 0 12px; font-size: 14px; color: #2f7a55; }
.mis-arrow { position: relative; height: 2px; background: #6b6475; margin: 0 9px 0 4px; }
.mis-arrow::after { content: ''; position: absolute; right: -7px; top: 50%; transform: translateY(-50%); border-top: 4px solid transparent; border-bottom: 4px solid transparent; border-left: 7px solid #6b6475; }
.mis-arrow.bad { background: #c8553d; }
.mis-arrow.bad::after { border-left-color: #c8553d; }
</style>
