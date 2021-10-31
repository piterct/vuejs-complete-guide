<template>
    <div class="user-list">
        <table>
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: { users: Array }
}
</script>

<style scoped>
    .user-list {
        flex: 1;
        display: flex;
    }

    table {
        flex: 1;
        border-spacing: 0px;
        border-collapse: separate;
        border-top: 1px solid #CCC;
    }


    th, td {
        padding: 15px;
        border-bottom: 1px solid #CCC;
    }

    tbody tr:hover {
        background: rgba(0, 0, 0, 0.1);
    }
</style>
