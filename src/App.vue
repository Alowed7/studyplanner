<template>
  <AppHeader />
  <main class="container">
    <router-view />
  </main>
</template>


<script>
import AppHeader from '@/components/layout/AppHeader.vue'

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

