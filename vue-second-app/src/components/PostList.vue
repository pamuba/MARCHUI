<template>
    <div>
        <button @click="getPosts">Load Posts</button>
        <div v-for="post in posts" :key="post.id">
            <h3>{{post.id}}.{{post.title}}</h3>
            <p>{{post.body}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:'PostList',
        data(){
            return {
                posts:[],
            }
        },
        methods:{
            getPosts(){
                axios.get('https://jsonplaceholder.typicode.com/posts')
                    .then((response) => {
                        console.log(response.data)
                        this.posts = response.data
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
            }
        }
    }
</script>

<style scoped>

</style>