<template>
  <footer class="animate-intro mb-16 mt-12 flex items-center justify-between opacity-0 [animation-delay:0.55s]">
    <div>
      <p class="text-sm font-light text-neutral-500">
        Made with <a href="https://astro.build/" target="_blank" rel="noreferrer">Astro</a>
      </p>
      <p class="flex items-center text-sm font-light text-neutral-500">
        Last visit from <span class="ml-1 inline-block h-4 w-28 animate-pulse rounded bg-neutral-200"></span>
      </p>
    </div>
    <div>
      <div class="clock" aria-hidden="true">
        <div class="seconds">{{ seconds }}</div>
        <div class="minutes">{{ minutes }}</div>
        <div class="hours">{{ hours }}</div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';

export default defineComponent({
  name: 'Footer',
  setup() {
    const seconds = ref<string>('');
    const minutes = ref<string>('');
    const hours = ref<string>('');
    let timeInterval: ReturnType<typeof setInterval> | null = null;

    const updateTime = () => {
      const now = new Date();
      seconds.value = now.getSeconds().toString().padStart(2, '0');
      minutes.value = now.getMinutes().toString().padStart(2, '0');
      hours.value = now.getHours().toString().padStart(2, '0');

      // Update CSS variables
      const clock = document.querySelector('.clock');
      if (clock) {
        clock.style.setProperty('--now-s', seconds.value);
        clock.style.setProperty('--now-m', minutes.value);
        clock.style.setProperty('--now-h', hours.value);
      }
    };

    onMounted(() => {
      updateTime();
      timeInterval = setInterval(updateTime, 1000);
    });

    onBeforeUnmount(() => {
      if (timeInterval) {
        clearInterval(timeInterval);
      }
    });

    return {
      seconds: seconds.value,
      minutes: minutes.value,
      hours: hours.value
    };
  }
});
</script>
