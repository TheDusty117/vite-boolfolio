<template>
  <div class="container">
    <h1>
      {{ $route.params.slug }} == {{ slug }}
    </h1>
  </div>
</template>

<script>
import axios from 'axios';

  export default {
    
    //accedere dei parametri delle rotte
    props: ['slug'],
    methods: {
      //metodo che tramite axios fa chiamata e recupera il project corrispondente
      fetchProject(){
        axios.get(`http://127.0.0.1:8000/api/projects/${ this.slug }`)
        .then(res => {

        })
        .catch(err =>{
          console.log(err)
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