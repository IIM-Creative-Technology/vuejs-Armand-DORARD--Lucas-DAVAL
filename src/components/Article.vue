<template>
  <div>
    <img src="../assets/logo.png" alt="image de l'article">
    <h1>{{blogDetail[0]}}</h1>

    <p>{{blogDetail[3]}}</p>
    <div class="footer">
      <p>{{date}}</p>
      <div class="author">
        <img src="https://img-19.ccm2.net/NxJ_d9M2a9aFdJWQO29_Ft2dSQI=/1240x/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg" alt="">
        <p>- {{blogDetail[4]}}</p>
      </div>
      
    </div>
    


  </div>
</template>

<script>
  export default {
    name: 'article',
    data() {
      return {
        url: this.$route.params.id,
        data() {
          return {
            blog: this.$store.state.nbarticle,
            articles: this.$store.state.nbarticle,
            blogDetail:[]
        }
      },
      }
    },
    methods: {
      
      getArticle(){
        
        this.$store.state.nbarticle.forEach(e => {
          if(e[0] == this.$route.params.id){
              this.blogDetail = e;
           }
        });
      },
      
    },
    created() {
     this.getArticle();
    },
    computed:{
        date: function(){
                    const now = new Date()
                    const day = now.toLocaleString("default", { weekday : "long"})
                    const month = now.toLocaleString("default", {month: "long"})
                    return `${day} ${now.getDay()} ${month}`
                }
    },
  };
</script>


<style scoped>
  .footer{
    display: flex;
    justify-content: space-around;
    margin-top: 100px;
  }
  h1{
    margin: 50px 0 50px 0;
  }
  .author img{
    height: 85px;
    width: 100px;
    clip-path:ellipse(50% 50%)
  }
  .author{
    display: flex;
  }
  .author p{
    margin: auto;
  }
</style>