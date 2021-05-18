<template>
     <form @submit.prevent="submitForm">
      
    <div>
      <pre>
        {{ JSON.stringify(formValues, null, 2) }}
      </pre>
    </div>


      <div>
          <label for="name">Name</label><br>
          <input type="text" id="name" v-model.trim.lazy="formValues.name">
      </div>
      <div>
          <label for="profile">Profile Summary</label><br>
          <textarea id="profile" v-model="formValues.profileSummary" />
      </div>
       <div>
          <label for="country">Country</label><br>
          <select id="country" v-model="formValues.country">
            <option value="">Select a Country</option>
            <option value="india">India</option>
            <option value="vietnam">Vietnam</option>
            <option value="singapore">Singapore</option>
          </select>
      </div>
       <div>
          <label for="job-location">Job Location</label><br>
          <select id="job-location" multiple v-model="formValues.jobLocation">
            <option value="india">India</option>
            <option value="vietnam">Vietnam</option>
            <option value="singapore">Singapore</option>
          </select>
      </div>
      <div>
        <input type="checkbox" id="remoteWork" v-model="formValues.remoteWork"
        true-value="Yes" false-value="No">
        <label for="remoteWork">Open to remote work?</label>
      </div>

      <div>
        <label>Skill Set</label><br>
        <input type="checkbox" id="html" value="html" v-model="formValues.skillSet">
        <label for="html">HTML</label>

         <input type="checkbox" id="css" value="css" v-model="formValues.skillSet">
        <label for="css">CSS</label>

         <input type="checkbox" id="javascript" value="javascript" v-model="formValues.skillSet">
        <label for="javascript">HTML</label>
      </div>


       <div>
        <label>Years Of Experience</label><br>
        <input type="radio" id="0-2" value="0-2" v-model="formValues.yearsOfExperience">
        <label for="0-2">HTML</label>

         <input type="radio" id="3-5" value="3-5" v-model="formValues.yearsOfExperience">
        <label for="3-5">CSS</label>

         <input type="radio" id="6-10" value="6-10" v-model="formValues.yearsOfExperience">
        <label for="6-10">HTML</label>
      </div>

       <div>
          <label for="age">Age</label><br>
          <input type="number" id="age" v-model.number="formValues.age">
      </div>

      <div>
        <button>Submit</button>
      </div>

    </form>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      formValues:{
        name:'',
        profileSummary:'',
        country:'',
        jobLocation:[],
        remoteWork:"No",
        skillSet:[],
        yearsOfExperience:'',
        age:null,
      }
    }
  },
   methods:{
      submitForm(event){
        event.preventDefault()
        console.log('Form Values', this.formValues)
      }
    },
  components: {
   
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
