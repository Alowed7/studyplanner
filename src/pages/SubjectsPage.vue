<template>
  <section>
    <h1>Subjects</h1>

    <!-- ADD SUBJECT -->
    <form @submit.prevent="addSubject" class="card" style="margin-bottom:16px">
      <input
        v-model="name"
        type="text"
        placeholder="Subject name"
      />

      <input
        v-model="semester"
        type="number"
        placeholder="Semester"
      />

      <button type="submit" class="btn">Add subject</button>
    </form>

    <!-- SUBJECT LIST -->
    <div class="grid">
      <SubjectCard
        v-for="subject in store.subjects"
        :key="subject.id"
        :subject="subject"
        @delete="deleteSubject"
      />
    </div>
  </section>
</template>

<script>
import { useStudyStore } from '@/store/studyStore'
import SubjectCard from '@/components/subjects/SubjectCard.vue'

export default {
  name: 'SubjectsPage',
  components: { SubjectCard },

  data() {
    return {
      name: '',
      semester: ''
    }
  },

  computed: {
    store() {
      return useStudyStore()
    }
  },

  methods: {
    addSubject() {
      if (!this.name.trim() || !this.semester) return

      this.store.addSubject(this.name, this.semester)

      this.name = ''
      this.semester = ''
    },

    deleteSubject(id) {
      this.store.deleteSubject(id)
    }
  }
}
</script>

