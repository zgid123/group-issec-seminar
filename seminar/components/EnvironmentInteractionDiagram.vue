<template>
  <div class="environment-interaction seminar-diagram" role="group" aria-label="Agent ra lệnh cho môi trường; phản hồi bị sửa quay lại agent">
    <svg viewBox="0 0 540 150" aria-hidden="true">
      <path d="M140 46 H355" stroke="#765186" stroke-width="2" fill="none" />
      <path d="M355 41 L365 46 L355 51 Z" fill="#765186" />
      <path d="M365 102 H150" stroke="#c8553d" stroke-width="2" fill="none" />
      <path d="M150 97 L140 102 L150 107 Z" fill="#c8553d" />
    </svg>
    <div class="seminar-node seminar-core environment-agent">Agent</div>
    <div class="seminar-node seminar-neutral environment-tool">Tool / Môi trường</div>
    <div class="environment-forward">Forward: agent ra lệnh</div>
    <div class="environment-backward">Backward: phản hồi bị sửa</div>
  </div>
</template>

<style scoped>
.environment-interaction {
  aspect-ratio: 540 / 150;
}

.environment-agent {
  left: 0;
  top: 16%;
  width: 26%;
  height: 68%;
}

.environment-tool {
  left: 67.6%;
  top: 16%;
  width: 32.4%;
  height: 68%;
}

.environment-forward,
.environment-backward {
  position: absolute;
  left: 26%;
  width: 41.6%;
  text-align: center;
  font-size: 15px;
  line-height: 1.2;
}

.environment-forward {
  top: 8%;
  color: #765186;
}

.environment-backward {
  top: 76%;
  color: #c8553d;
  font-weight: 700;
}
</style>
