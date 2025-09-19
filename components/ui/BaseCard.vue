<template>
 <div class="card bg-base-100 border border-base-300 p-6 rounded-xl shadow-lg" :class="class">
    <slot />
  </div>
</template>
<script lang="ts" setup>
defineProps<{ class?: string }>();
</script>