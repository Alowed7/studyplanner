import { defineStore } from 'pinia'

export const useStudyStore = defineStore('study', {
  state: () => ({
    subjects: [
      {
        id: 1,
        name: 'Frontend',
        semester: 2
      },
      {
        id: 2,
        name: 'Databases',
        semester: 2
      }
    ],
    tasks: [
      {
        id: 1,
        subjectId: 1,
        title: 'Vue project',
        done: false
      },
      {
        id: 2,
        subjectId: 2,
        title: 'SQL test',
        done: true
      }
    ]
  }),

  getters: {
    tasksBySubject: (state) => {
      return (subjectId) =>
        state.tasks.filter(task => task.subjectId === Number(subjectId))
    },

    completedTasksCount: (state) =>
      state.tasks.filter(task => task.done).length
  },

  actions: {
  addSubject(name, semester) {
    this.subjects.push({
      id: Date.now(),
      name: name,
      semester: Number(semester)
    })
  },

  deleteSubject(id) {
    // удалить предмет
    this.subjects = this.subjects.filter(s => s.id !== id)

    // удалить связанные задачи
    this.tasks = this.tasks.filter(t => t.subjectId !== id)
  },

  addTask(title, subjectId) {
    this.tasks.push({
      id: Date.now(),
      subjectId: Number(subjectId),
      title: title,
      done: false
    })
  },

  toggleTask(id) {
    const task = this.tasks.find(t => t.id === id)
    if (task) task.done = !task.done
  },

  deleteTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id)
  }
 }
})
