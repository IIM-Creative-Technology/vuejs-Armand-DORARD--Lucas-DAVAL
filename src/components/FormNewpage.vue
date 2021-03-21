<template>
    <form action="/" method="post">
        <div>
            <ul>
                <li>
                    <label for="title">Titre de la page</label>
                    <input name="title" id="title" type="text">
                </li>
                
                <li>
                    <label for="metaDesc">Meta Description</label>
                    <input name="metaDesc" id="metaDesc" type="text">
                </li>

                <li>
                    <label for="metaTitle">Meta Title</label>
                    <input name="metaTitle" id="metaTitle" type="text">
                </li>
            </ul>
        </div>
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
</style>