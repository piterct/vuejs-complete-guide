<template>
  <div class="container">
    <h1>User component</h1>
    <p>This component is pretty cool !!!</p>
    <button @click="alterName">Alter Name</button>
    <hr />
    <div class="components">
      <app-info-user />
      <app-edit-user />
    </div>
  </div>
</template>

<script>
import AppInfoUser from "./InfoUser";
import AppEditUser from "./EditUser";

export default {
  components: { AppInfoUser, AppEditUser },
  data() {
    return {
      name: "Michael",
    };
  },
  methods: {
    alterName() {
       this.name = 'Ana' 
    },
  },
};
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
