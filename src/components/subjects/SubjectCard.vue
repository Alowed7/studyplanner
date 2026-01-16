<template>
  <div class="card">
    <h3>{{ subject.name }}</h3>
    <p>Semester: {{ subject.semester }}</p>

    <router-link :to="`/subjects/${subject.id}`">
      View details
    </router-link>

    <button
      class="btn"
      style="margin-top:8px"
      @click="$emit('delete', subject.id)"
    >
      Delete
    </button>
  </div>
</template>

<script>
export default {
  name: 'SubjectCard',
  props: {
    subject: {
      type: Object,
      required: true
    }
  }
}
</script>

