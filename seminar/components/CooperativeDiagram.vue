<template>
  <div class="cooperative-diagram" role="img" aria-label="A1 truyền sang A2, A3 rồi A4">
    <template v-for="n in 4" :key="n">
      <div class="cooperative-agent" :class="{ 'cooperative-clean': n === 4 }">A{{ n }}</div>
      <span v-if="n < 4" class="cooperative-arrow" aria-hidden="true"></span>
    </template>
  </div>
</template>

<style scoped>
.cooperative-diagram {
  display: grid;
  grid-template-columns: 56px 1fr 56px 1fr 56px 1fr 56px;
  align-items: center;
  padding: 8px 0;
}

.cooperative-agent {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #c8553d;
  color: white;
  font: 700 18px Arial, sans-serif;
}

.cooperative-arrow {
  height: 10px;
  background: #c8553d;
  clip-path: polygon(0 40%, calc(100% - 8px) 40%, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, calc(100% - 8px) 60%, 0 60%);
}

.cooperative-clean {
  background: #d9cde3;
}
</style>
