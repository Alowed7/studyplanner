<template>
  <section>
    <h1>Dashboard</h1>

    <p>Total subjects: {{ subjectsCount }}</p>
    <p>Total tasks: {{ tasksCount }}</p>
    <p>Completed tasks: {{ completedTasks }}</p>

    <ProgressBar :percentage="progress" />
    <p>{{ progress }} % completed</p>
  </section>
</template>

<script>
import { useStudyStore } from '@/store/studyStore'
import ProgressBar from '@/components/base/ProgressBar.vue'

export default {
  name: 'DashboardPage',
  components: { ProgressBar },

  computed: {
    store() {
      return useStudyStore()
    },
    subjectsCount() {
      return this.store.subjects.length
    },
    tasksCount() {
      return this.store.tasks.length
    },
    completedTasks() {
      return this.store.completedTasksCount
    },
    progress() {
      if (this.tasksCount === 0) return 0
      return Math.round(
        (this.completedTasks / this.tasksCount) * 100
      )
    }
  }
}
</script>

