<script setup>
import { computed, onMounted, ref } from 'vue'
import Home from './components/Home.vue';
import Aboute from './components/Aboute.vue';
import Company from './components/Company.vue';

const activeTab = ref(0)

const postList = ref([])
const commentList = ref([])
const now = new Date()

const date = ref(new Date().toISOString().split('T')[0])

// const date = ref(new Date().toLocaleDateString('ru-RU'))





const perPageArr = [10,20,50,100]

const currentPage = ref(0)

const perPage = ref(perPageArr[0])


const getPostList = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json =>postList.value = json)
}
const getCommentList = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(response => response.json())
        .then(json =>commentList.value = json)
}

const search = ref('')

const postListFilter = computed(()=>{
    return postList.value.filter(el=>el.title.includes(search.value))
})
const pagetFilter = computed(()=>{
    return postListFilter.value.slice(currentPage.value*perPage.value,(currentPage.value+1)*perPage.value)
})

const pageCount = computed(()=>{
    return Math.ceil(postListFilter.value.length/perPage.value)
})





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

        <!-- <div class="row">
            <div class="col-6">               
                <div class="card mb-3" v-for="post, i in postList" :key="post.id">
                    <div class="card-header">
                        {{ i+1 }}. {{ post.title }}
                    </div>
                    <div class="card-body">            
                        <p class="card-text">{{ post.body }}</p>
                        <button class="btn btn-primary" @click="getCommentList(post.id)">Коментарий</button>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <ul class="list-group">
                    <li class="list-group-item" v-for="comment, i in commentList" :key="comment.id">{{ i+1 }}. {{ comment.body }}</li>               
                </ul>
            </div>
        </div> -->

        <input type="text" class="form-control mb-3" v-model="search">
        <input type="datetime-local" class="form-control mb-3" v-model="date">
        <ul>
            <li v-for="post, i in pagetFilter" :key="post.id" >{{ currentPage*perPage+i+1 }}. {{ post.id }} - {{ post.title }}</li>
        </ul>


        <nav aria-label="Пример навигации по страницам">
            <ul class="pagination">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Предыдущая">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item" v-for="page in pageCount" :key="page" 
                    @click="currentPage = page-1"
                    :class="{'active': page === currentPage+1}"
                >
                    <a class="page-link" href="#">{{ page }}</a>
                </li>
               
                
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Следующая">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
            <select class="form-select" v-model="perPage">
                <option v-for="p in perPageArr">{{ p }}</option>
                
            </select>
        </nav>
    </div>





</template>

<style scoped>
  
</style>