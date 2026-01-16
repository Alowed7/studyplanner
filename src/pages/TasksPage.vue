<template>
  <section class="card">
    <h1>Tasks</h1>

    <!-- ADD TASK -->
    <form @submit.prevent="addTask" style="margin: 16px 0">
      <input
        v-model="newTask"
        type="text"
        placeholder="New task..."
        style="padding: 8px; margin-right: 8px"
      />

      <select v-model="selectedSubject" style="padding: 8px; margin-right: 8px">
        <option disabled value="">Select subject</option>
        <option
          v-for="subject in store.subjects"
          :key="subject.id"
          :value="subject.id"
        >
          {{ subject.name }}
        </option>
      </select>

      <button class="btn">Add</button>
    </form>

    <!-- TASK LIST -->
    <TaskItem
      v-for="task in store.tasks"
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
  name: 'TasksPage',
  components: { TaskItem },

  data() {
    return {
      newTask: '',
      selectedSubject: ''
    }
  },

  computed: {
    store() {
      return useStudyStore()
    }
  },

  methods: {
    addTask() {
      if (!this.newTask.trim() || !this.selectedSubject) return

      this.store.addTask(this.newTask, this.selectedSubject)

      this.newTask = ''
      this.selectedSubject = ''
    },

    toggleTask(id) {
      this.store.toggleTask(id)
    },

    deleteTask(id){
      this.store.deleteTask(id)
    }
  }
}
</script>



