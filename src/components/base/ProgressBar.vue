<template>
  <div class="progress">
    <div
      class="progress-bar"
      :style="{ width: percentage + '%' }"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    percentage: {
      type: Number,
      required: true
    }
  }
}
</script>
