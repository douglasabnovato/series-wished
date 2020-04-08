<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script> 
  export default {
      name: "Home",
      mounted () {
        this.$http.get('http://www.google.com.br').then(res => {
          console.log(res.data)
        })
      }

  };
</script>
