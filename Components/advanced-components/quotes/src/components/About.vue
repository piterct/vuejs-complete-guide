<template>
    <div>
        <p class="name">Quotes</p>
        <p class="version">Version 1.0</p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #DDD;
        height: 200px;
        width: 200px;
        border-radius: 100px;
    }

    p {
        margin: 0;
    }

    .name {
        font-size: 2.1rem;
        font-weight: bold;
    }

    .version {
        font-size: 1.4rem;
    }
</style>
