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
    <div class="container-header">
      <h2>Boolfolio</h2>  
      <NavBar></NavBar>
    </div>
  </header>
  


  <main>
    <div class="container-main">

    </div>
    <router-view></router-view>
  </main>



  <footer>
    <div class="container-footer">
      <h2>
        questo e' un footer
      </h2>
    </div>
  </footer>

</template>

<style lang="scss">
@use './style/general.scss' as *;

.container-header{
  
}

.container-main{
  
}

.container-footer{
  
}


</style>
