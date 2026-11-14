<template>
  <div class="rl-threat hoang-diagram" role="group" aria-label="Vòng lặp RL; đầu độc nhắm vào đường trạng thái và điểm thưởng quay về agent">
    <svg viewBox="0 0 500 320" aria-hidden="true">
      <path d="M150 42 H340" stroke="#765186" stroke-width="2" fill="none" />
      <path d="M340 37 L350 42 L340 47 Z" fill="#765186" />
      <path d="M425 84 V144 H75 V94" stroke="#6b6475" stroke-width="2" fill="none" />
      <path d="M70 94 L75 84 L80 94 Z" fill="#6b6475" />
      <path d="M250 210 V154" stroke="#c8553d" stroke-width="2" fill="none" />
      <path d="M245 154 L250 144 L255 154 Z" fill="#c8553d" />
    </svg>
    <div class="hoang-node hoang-core rl-agent">Agent</div>
    <div class="hoang-node hoang-neutral rl-environment">Môi trường</div>
    <div class="rl-action">Hành động</div>
    <div class="rl-reward">Trạng thái mới + điểm thưởng</div>
    <div class="hoang-node hoang-danger rl-poison">Nhiễu khó thấy, đầu độc điểm thưởng</div>
    <div class="hoang-node hoang-danger rl-inverse">Inverse RL: đoán ngược hàm thưởng</div>
  </div>
</template>

<style scoped>
.rl-threat {
  aspect-ratio: 500 / 320;
}

.rl-agent,
.rl-environment {
  top: 0;
  width: 30%;
  height: 26.25%;
}

.rl-agent {
  left: 0;
}

.rl-environment {
  right: 0;
  font-weight: 700;
}

.rl-action,
.rl-reward {
  position: absolute;
  text-align: center;
  font-size: 17px;
}

.rl-action {
  top: 1%;
  left: 30%;
  width: 40%;
  color: #765186;
}

.rl-reward {
  top: 32%;
  left: 15%;
  width: 70%;
  color: #6b6475;
}

.rl-poison,
.rl-inverse {
  left: 18%;
  width: 64%;
  font-size: 17px;
}

.rl-poison {
  top: 65.6%;
  height: 16%;
}

.rl-inverse {
  top: 85%;
  height: 15%;
}
</style>
