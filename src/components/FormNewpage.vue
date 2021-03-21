<template>
    <form action="/" method="post">
        <div id="formFirstPart">
            <ul>
                <li>
                    <label for="title">Titre de la page</label>
                    <input name="title" id="title" type="text" required>
                </li>

                <li>
                    <label for="metaDesc">Meta Description</label>
                    <input name="metaDesc" id="metaDesc" type="text" required>
                </li>

                <li>
                    <label for="metaTitle">Meta Title</label>
                    <input name="metaTitle" id="metaTitle" type="text" required>
                </li>
            </ul>

            <div id="img">
                <input type="" name="image" id="image">
                <br>
                <label for="image">Ajouter une image</label>
            </div>            
        </div>

        <label for="postBody">Corps du post</label>
        <textarea name="postBody" id="postBody" cols="100" rows="15"></textarea>
    </form>
</template>

<script>
export default {
    name: "form"
}
</script>

<style scoped>
    *{
        list-style: none;
    }

    form{
        margin: 8% 12%;
        text-align: left;
    }

    ul{
        width: 50%;
    }

    li{
        display: flex;
        justify-content: space-between;
        margin: 3% 0;
    }

    #formFirstPart{
        display: flex;
    }

    #img{
        width: 50%;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
    }

    #img input{
        width: 25%;
        margin: 0 auto;
    }
</style>