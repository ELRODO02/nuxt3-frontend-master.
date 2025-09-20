<template>
  <button
    class="btn w-full"
    :type="type ?? 'button'"
    :class="[ variant ? `btn-${variant}` : 'btn-primary', { loading } ]"
    :disabled="loading"
  >
    <slot>Entrar</slot>
  </button>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  type?: 'button' | 'submit' | 'reset'
  loading?: boolean
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral'
}>(), {
  type: 'button',
  loading: false,
  variant: 'primary'
})
</script>
