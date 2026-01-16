<template>
  <section class="card">
    <h1>Subject tasks</h1>

    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @toggle="toggleTask"
      @delete="deleteTask"
    />
  </section>
</template>

<script>
import { useStudyStore } from '@/store/studyStore'
import TaskItem from '@/components/tasks/TaskItem.vue'

export default {
  props: ['id'],
  components: { TaskItem },

  computed: {
    store() {
      return useStudyStore()
    },
    tasks() {
      return this.store.tasksBySubject(this.id)
    }
  },

  methods: {
    toggleTask(id) {
      this.store.toggleTask(id)
    },

    deleteTask(id) {
      this.store.deleteTask(id)
    }
  }
}
</script>

