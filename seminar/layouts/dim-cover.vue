<script setup lang="ts">
import { handleBackground } from '@slidev/client';
import { computed } from 'vue';

const props = defineProps({
  background: {
    type: String,
    default: '',
  },
  dim: {
    type: Boolean,
    default: false,
  },
});

const style = computed(() => handleBackground(props.background, props.dim));
</script>

<template>
  <main
    class="slidev-layout alpha-cover alpha-academic-cover grid place-items-center h-full w-full"
    :style="style"
  >
    <div
      class="alpha-academic-cover__content flex flex-col items-center gap-3 w-full"
    >
      <slot />
    </div>
  </main>
</template>
