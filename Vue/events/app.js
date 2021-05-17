const app = Vue.createApp({
    data() {
      return {
        counter: 100,
        name:'',
        confirmedName:'', 
        // fullName:'',
        lastName:''
      };
    },
    computed:{
        fullName(){
            console.log("Inside")
            if(this.name==='' || this.lastName === ''){
                return ''
            }
            else{
                return this.name + ' '+  this.lastName
            }
        }
    },
    watch:{

        counter(value){
            if(value>200){
                this.counter = 0;
            }
        }

        // name(newValue, oldValue){
        //     console.log('watcher')
        //     if(newValue ===''){
        //         return ''
        //     }
        //     else{
        //         this.fullName = newValue+' '+ this.lastName
        //     }   
        // },

        // lastName(newValue, oldValue){
        //     console.log('watcher')
        //     this.fullName = this.name+' '+ this.lastName
        // },


    },

    methods:{
        outputFullName(){
            console.log("Inside")
            if(this.name===''){
                return ''
            }
            else{
                return this.name + ' '+ 'Wick'
            }
           
        },
        resetInput(){
            // document.querySelector('input').value = ""

            this.name=""
        },
        confirmInput(){
            this.confirmedName = this.name;
        },
        add(num){
            console.log('add')
            this.counter = this.counter + num;
        },
        subtract(num){
            console.log('subtract')
            this.counter = this.counter - num;
        },
        setName(event){
            this.name = event.target.value 
        },
        submitForm(){
            // event.preventDefault();
            alert('Submitted')
        }
    }

  });
  
  app.mount('#events');