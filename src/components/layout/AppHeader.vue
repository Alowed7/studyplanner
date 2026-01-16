<template>
  <header>
    <nav>
      <router-link to="/">Dashboard</router-link>
      <router-link to="/subjects">Subjects</router-link>
      <router-link to="/tasks">Tasks</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </header>
</template>


<script>
export default {
  name: 'AppHeader'
}
</script>
