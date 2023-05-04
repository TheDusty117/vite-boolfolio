<template>
  <div class="card m-4">
    <!-- rotta che registreremo per mostrare quando clicchiamo un project -->
    <router-link :to="`/portfolio/${project.slug}`"> 

      <h3>{{ project.title }}</h3>
      <h4>{{ project.client }}</h4>
      <p>{{ project.description }}</p>
      <p>{{ project.category ? project.category.name : '-' }}</p>
      <ul class="d-flex justify-content-center gap-3 technology-list" v-if="project.technologies && project.technologies.length > 0">
        <li class="technology" v-for="technology in project.technologies" :key="technology.id">{{ technology.name }}</li>
      </ul>

    </router-link>
    

  </div>
</template>

<script>
  export default {
    props: {
      project:{
        type: Object,
        required: true,
      }
    },
    mounted(){
      console.log(this.project.category)
    },
  }
</script>

<style lang="scss" scoped>

</style>