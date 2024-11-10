<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="app">


    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="You did it!" />

        <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#"><router-link to="/">Home</router-link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/about">About</router-link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/addtask"><i class="fas fa-plus"></i> Agregar
                    Tarea</router-link> </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/lista_tareas">Listar Tarea</router-link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><router-link to="/vista_combinada">Vista Combinada</router-link></a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
