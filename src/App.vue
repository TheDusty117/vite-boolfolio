<script >
import Projects from './components/Projects.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.vue';

export default{
  components:{
    // Projects
    NavBar,
  }
}


</script>

<template>
  <header>
    <div class="container">
      <h2>Boolfolio</h2>  
      <NavBar></NavBar>
    </div>
  </header>
  


  <main>
    <router-view></router-view>
  </main>



  <footer>
    <h2>
      questo e' un footer
    </h2>
  </footer>

</template>

<style lang="scss">
@use './style/general.scss' as *;


</style>
