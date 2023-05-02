<template>
  <div class="container">
    <div class="row">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />

    </div>
    <ul>
      <li class="rounded-5 my-2 b bg-primary" @click="fetchProjects(1)">1</li>
      <li class="rounded-5 my-2 bg-primary" @click="fetchProjects(2)">2</li>
      <li class="rounded-5 my-2 bg-primary" @click="fetchProjects(3)">3</li>
      <li class="rounded-5 my-2 bg-primary" @click="fetchProjects(4)">4</li>

    </ul>

  </div>
</template>

<script>
//importo la axios
import axios from 'axios';
//importo la card
import ProjectCard from './ProjectCard.vue';

  export default {
    components:{
      ProjectCard
    },
    data(){
      return{
        projects: []    //array che inizialmente e' vuoto ma dopo verra' popolato con la chiamata axios
      }
    },

    methods:{
      fetchProjects(page){ //metodo che recupera i projects
        axios.get('http://127.0.0.1:8000/api/projects',{
          params: {
            page: page
          }
        }) //chiamata axios alla route api
        .then(res =>{
          console.log(res)      //se va ci da console log res
          const { results } = res.data //prendo i dati che ottengo con chiamata axios
          this.projects = results.data     // e poi gli assegno a array vuoto projects grazie a this,
        })
        .catch(err =>{
          console.log(err)      //se errore ci da console log error
        })

      }
    },
    mounted(){
      this.fetchProjects(1)    //on mounted si attiva il metodo fatto sopra
    }

  }
</script>

<style lang="scss" scoped>
  li{
    cursor: pointer;
  }
</style>