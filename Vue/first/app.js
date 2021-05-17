const app = Vue.createApp({
    data(){
        return {
            courseGoalA:'Learn Vue JS and all its features',
            courseGoalB:'<i>Master Vue JS and all its features</i>',
            vueLink: 'https://vuejs.org'
        }
    },
    methods:{
        outputGoal(){
            const randomNumber = Math.random()
            if(randomNumber <0.5){
                return this.courseGoalA
            }
            else{
                return this.courseGoalB
            }
        }
    }
});

app.mount('#user-goal');

