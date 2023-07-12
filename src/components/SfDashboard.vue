<template>

<h1>Hello</h1>

</template>

<script>
export default {
    name:'SfDashboard',
        mounted(){
           let user=localStorage.getItem('user_info');
           if(!user){

             this.$router.push({name:'Login'})
           }
        
          
        }
}

</script>

<style scoped>

body{
    background-image: none !important;
}


</style>