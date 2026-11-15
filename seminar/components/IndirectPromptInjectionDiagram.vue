<template>
  <div class="indirect-prompt seminar-diagram" role="group" aria-label="Kẻ tấn công giấu lệnh trong dữ liệu; người dùng nhờ agent đọc trang">
    <svg viewBox="0 0 900 198" aria-hidden="true">
      <path d="M155 48 H190" stroke="#c8553d" stroke-width="2" fill="none" />
      <path d="M190 43 L200 48 L190 53 Z" fill="#c8553d" />
      <path d="M390 48 H425" stroke="#6b6475" stroke-width="2" fill="none" />
      <path d="M425 43 L435 48 L425 53 Z" fill="#6b6475" />
      <path d="M610 48 H645" stroke="#c8553d" stroke-width="2" fill="none" />
      <path d="M645 43 L655 48 L645 53 Z" fill="#c8553d" />
      <path d="M522.5 128 V104" stroke="#6b6475" stroke-width="2" fill="none" />
      <path d="M517.5 104 L522.5 94 L527.5 104 Z" fill="#6b6475" />
    </svg>
    <div class="seminar-node indirect-attacker">Kẻ tấn công</div>
    <div class="seminar-node indirect-data">Giấu lệnh trong trang web, email, tài liệu</div>
    <div class="seminar-node seminar-core indirect-agent">Agent đọc trang khi làm việc</div>
    <div class="seminar-node seminar-danger indirect-result">Lộ lịch sử chat, chèn link lừa đảo, gửi dữ liệu ra ngoài</div>
    <div class="indirect-cause"><slot name="cause" /></div>
    <div class="seminar-node seminar-neutral indirect-user">Người dùng: "Tóm tắt trang này"</div>
  </div>
</template>

<style scoped>
.indirect-prompt {
  aspect-ratio: 900 / 198;
}

.indirect-attacker,
.indirect-data,
.indirect-agent,
.indirect-result {
  top: 0;
  height: 48%;
}

.indirect-attacker {
  left: 0;
  width: 17.2%;
  background: #c8553d;
  color: white;
  font-weight: 700;
}

.indirect-data {
  left: 22.2%;
  width: 21.1%;
  background: #fbe8e3;
  border: 1.5px solid #c8553d;
}

.indirect-agent {
  left: 48.3%;
  width: 19.5%;
}

.indirect-result {
  left: 72.8%;
  width: 27.2%;
}

.indirect-cause {
  position: absolute;
  left: 0;
  top: 64.6%;
  width: 43.3%;
}

.indirect-user {
  left: 48.3%;
  top: 64.6%;
  width: 19.5%;
  height: 35.4%;
  font-size: 16px;
}
</style>
