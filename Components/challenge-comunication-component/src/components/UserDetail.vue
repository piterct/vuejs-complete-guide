<template>
    <div class="user-detail">
        <h2 v-if="!user">User not selected!</h2>
        <div v-else>
            <h2>ID: {{ user.id }}</h2>
            <h2>Name: {{ user.name }}</h2>
            <h2>Age: {{ user.age }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: null
        }
    }
}
</script>

<style>
    .user-detail {
        flex: 1;
        border: 1px solid #CCC;
    }
</style>
