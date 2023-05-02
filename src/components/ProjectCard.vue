<template>
  <div class="card m-4">
    <h3>{{ project.title }}</h3>
    <h4>{{ project.client }}</h4>
    <p>{{ project.description }}</p>

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