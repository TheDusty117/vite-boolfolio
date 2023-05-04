<template>
  <template v-if="project">

    <div class="container">
      <h1>
        {{ project.title }}
      </h1>
      <h2>
        {{ project.client }}
      </h2>

      <p v-if="project.category">
        {{ project.category.name }}
      </p>

      <ul>
        <li v-for="technology in project.technologies" :key="technology.slug">{{ technology.name }}</li>
      </ul>
    
    </div>

    <div class="container">
      <div v-html="project.description"></div>
    </div>

  </template>
</template>

<script>
import axios from 'axios';

  export default {


    data(){
      return{
        project: null
      }
    },
    
    //accedere dei parametri delle rotte
    props: ['slug'],
    methods: {
      //metodo che tramite axios fa chiamata e recupera il project corrispondente
      fetchProject(){
        axios.get(`http://127.0.0.1:8000/api/projects/${ this.slug }`)
        .then(res => {
          //redirecting se non trova il project
          const { success, project } = res.data // success e proj sono true

          if(success) {
            this.project = project
          } else {
            this.$router.replace({ name: '404' })
          }

        })
        .catch(err =>{
          console.log(err)
          // this.$router.replace({ name: '404' })

        })
      }
    },
    created(){
      this.fetchProject()
    },
    mounted(){
      // console.log(this.$route)
    }
  }
</script>

<style lang="scss" scoped>

</style>