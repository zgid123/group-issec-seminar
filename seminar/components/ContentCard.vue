<script setup lang="ts">
withDefaults(defineProps<{
  title?: string;
  number?: string | number;
  tone?: 'purple' | 'gray' | 'peach';
  variant?: 'default' | 'tall' | 'small' | 'compact' | 'resource' | 'explanation' | 'panel' | 'note';
}>(), {
  tone: 'purple',
  variant: 'default',
});
</script>

<template>
  <div class="card" :class="['card--' + tone, 'card--' + variant]">
    <div v-if="title || $slots.title" class="card-heading">
      <span v-if="number !== undefined" class="card-number">{{ number }}</span>
      <strong><slot name="title">{{ title }}</slot></strong>
    </div>
    <slot />
  </div>
</template>

<style scoped>
.card {
  padding: 16px 14px;
  border-radius: 12px;
  background: #efe8f3;
  color: #25212b;
  font-family: Arial, sans-serif;
  font-size: 18px;
  line-height: 1.25;
}

.card--gray {
  background: #f1f1f3;
}

.card--peach {
  background: #fbe8e3;
}

.card-heading {
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 24px;
}

.card-heading:has(.card-number) {
  color: #765186;
}

.card-number {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 38px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #765186;
  color: white;
  font-weight: 700;
  font-size: 20px;
}

.card :deep(p) {
  margin: 16px 0 0;
  font-size: inherit;
  line-height: inherit;
}

.card--tall {
  min-height: 236px;
}

.card--small {
  font-size: 16px;
}

.card--compact {
  padding: 12px;
  font-size: 16px;
}

.card--compact .card-heading {
  display: block;
  color: #25212b;
}

.card--compact .card-number {
  margin-bottom: 12px;
}

.card--compact :deep(p) {
  color: #c8553d;
}

.card--explanation {
  padding: 24px 18px;
  line-height: 1.4;
}

.card :deep(.seminar-operational) {
  color: #279574;
  font-weight: 700;
  font-size: 16px;
}

.card--resource :deep(p) {
  margin-top: 12px;
  font-size: 17px;
}

.card--note {
  padding: 12px;
  font-size: 16px;
}

.card--panel .card-heading {
  margin-bottom: 14px;
  color: #765186;
  font-size: 20px;
  line-height: 1.2;
}

.card.card--panel :deep(ul) {
  margin: 14px 0 0;
  padding-left: 22px;
  font-size: 17px;
  line-height: 1.25;
}

.card.card--panel :deep(li) {
  margin-bottom: 8px;
}
</style>
