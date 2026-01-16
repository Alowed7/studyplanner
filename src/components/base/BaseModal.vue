<template>
  <div class="modal" v-if="modelValue">
    <div class="modal-content">
      <slot />
      <BaseButton @click="$emit('update:modelValue', false)">
        Close
      </BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  name: 'BaseModal',
  components: { BaseButton },
  props: {
    modelValue: Boolean
  }
}
</script>
