<template>
  <div class="task">
    <input
      type="checkbox"
      :checked="task.done"
      @change="$emit('toggle', task.id)"
    />

    <span :class="{ done: task.done }">
      {{ task.title }}
    </span>

    <button class="btn" @click="$emit('delete', task.id)">
      ✕
    </button>
  </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    task: {
      type: Object,
      required: true
    }
  }
}
</script>

