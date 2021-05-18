<template>
  <!-- <Greet name="Bruce" heroName="Batman"/>
  <Greet name="Clark" heroName="Superman"/>
  <Greet name="Diana" heroName="Wonder Women"/>
  <Greet :name="name" :heroName="dept"/> -->

  <!-- <Article id="my-article" title="Article Title" :likes="10000" :isPublished="true"></Article> -->

 <button @click="showPopup=true">Show</button>
 <Popup v-show="showPopup" @close="closePopup"/>

</template>

<script>
// import Greet from './components/Greet'
// import Article from './components/Aticle'
import Popup from './components/Popup'

export default {
  name: 'App',
  components: {
    // Greet,
    // Article,
    Popup,
  },
  methods:{
    closePopup(msg){
      this.showPopup=false
      console.log(msg)
    }
  },
   data(){
    return {
      name:"John",
      dept:"Sales",
      showPopup:false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
