<template>
    <div>
        {{getArticle}}
        <div href="#" class="bloc" v-for="item in articles"
                :key="item"
                :item="item">


            <img :src=[item[5]] alt="image de l'article">
            <ul>
                <li><span>Title : </span>{{ item[0] }}</li>
                <li><span>Meta title : </span>{{ item[1] }}</li>
                <li><span>Meta description : </span>{{ item[2] }}</li>
                <li><span>Post : </span>{{ item[3] }}</li>
                <li><span>Author : </span>{{ item[4] }}</li>
            </ul>
            <a href="#">Editer</a>
            <p class="delete" @click="deletePost(item[0])">X</p>


        </div>
    </div>

</template>

<script>

export default {
    name: 'BlogList',
    data() {
        return {
            articles: this.$store.state.nbarticle,
        }
    },
    methods: {
        deletePost(event){

            this.$store.commit('POSTS_SPLIT', event)
        }
    }
}
</script>

<style scoped>
.bloc{
    display: flex;
    justify-content: space-around;
    margin: 50px 200px 50px 200px;
    border: solid 1px black;
    text-decoration: none;
    color: black;
}
p{
    margin: auto;
}
img{
    margin-left: 50px;
}
a{
    margin: auto 20px;
    border: solid 1px black;
    text-decoration: none;
    color: black;
    padding: 10px;
}
.delete{
    
    margin: auto 20px;
    border: solid 1px black;
    text-decoration: none;
    color: black;
    padding: 10px;
    background-color: red;
}

ul{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
}

li{
    list-style: none;
}

span{
    font-weight: 600;
}
</style>