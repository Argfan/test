<script setup>
import { computed, onMounted, ref } from 'vue'
import Home from './components/Home.vue';
import Aboute from './components/Aboute.vue';
import Company from './components/Company.vue';






onMounted(() => {
    console.log(date.value);
    
    getPostList()
})



</script>

<template>
    <div class="container pt-5">


       <!-- <Home msg="Главная" v-if="activeTab==0"></Home>
       <Aboute msg="О нас" v-if="activeTab==1"></Aboute>
       <Company msg="Компания" v-if="activeTab==2"></Company> -->

       <!-- Muhammad -->

        <ul class="nav">
            <li class="nav-item">
                <RouterLink to="/" class="nav-link" aria-current="page" href="#">Главная</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/about" class="nav-link" href="#">О нас</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/company" class="nav-link" href="#">Компания</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/" class="nav-link" aria-current="page" href="#">Главная</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/" class="nav-link" aria-current="page" href="#">Главная</RouterLink>
            </li>
            <li class="nav-item">
                <RouterLink to="/" class="nav-link" aria-current="page" href="#">Главная</RouterLink>
            </li>

            <!-- <button class="btn btn-primary" @click="asd">Главная</button> -->
            
        </ul>

        <RouterView />



 </div>




</template>

<style scoped>
  .router-link-active.router-link-exact-active.nav-link{
    color: red;
  }
</style>