<template>
    <div class="container">
        <h1>User component</h1>
        <p>This component is pretty cool !!!</p>
        <hr>
        <div class="components">
            <app-info-user />
            <app-usuario-editar />
        </div>
    </div>
</template>

<script>
import AppInfoUser from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppInfoUser, AppUsuarioEditar }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .components {
        display: flex;
    }

    .components > * {
        margin: 10px;
    }
</style>
