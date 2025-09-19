<template>
  <label class="form-control w-full mb-3">
    <div class="label" v-if="label">
      <span class="label-text font-medium">
        {{ label }}
    
      </span>
    </div>
    <input class="input input-bordered w-full" 
    :id="InputId"
    :type="type"
    :placeholder="placeholder"
    :required="required"
    :value="modelValue"
    @input="(e) => emit('update:modelValue', (e.target as HTMLInputElement).value)"
    />
  </label>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    id?: string;
    type?: string;
    label?: string; 
    placeholder?: string;
    modelValue?: string
    required?: boolean;
}>(), 
{
    type: 'text',
    required: false
}

);

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
}>();
const InputId = computed(() => props.id || `input-${Math.random().toString(36).slice(2)}`);

</script>