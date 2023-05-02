<template>
  <div>

    <p v-for="project in projects" :key="project.id">{{ project.title }}</p>

  </div>
</template>

<script>
import axios from 'axios';

  export default {
    data(){
      return{
        projects: []    //array che inizialmente e' vuoto ma dopo verra' popolato con la chiamata axios
      }
    },

    methods:{
      fetchProjects(){ //metodo che recupera i projects
 
        axios.get('http://127.0.0.1:8000/api/projects') //chiamata axios alla route api
        .then(res =>{
          console.log(res)      //se va ci da console log res
        })
        .catch(err =>{
          console.log(err)      //se errore ci da console log error
        })

      }
    },
    mounted(){
      this.fetchProjects()    //on mounted si attiva il metodo fatto sopra
    }

  }
</script>

<style lang="scss" scoped>

</style>