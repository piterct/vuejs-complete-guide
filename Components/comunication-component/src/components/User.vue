<template>
  <div class="container">
    <h1>User component</h1>
    <p>This component is pretty cool !!!</p>
    <p>
      Name is <strong>{{ name }}</strong>
    </p>
    <p>
      Age is <strong>{{ age }}</strong>
    </p>
    <button @click="alterName">Alter Name</button>
    <hr />
    <div class="components">
      <app-info-user
        :name="name"
        :age="age"
        @nameChanged="name = $event"
        :restartFn="restartName"
      />
      <app-edit-user :age="age" />
    </div>
  </div>
</template>

<script>
import InfoUser from "./InfoUser";
import AppEditUser from "./EditUser";

export default {
  components: { AppInfoUser: InfoUser, AppEditUser },
  data() {
    return {
      name: "Michael",
      age: 21,
    };
  },
  methods: {
    alterName() {
      this.name = "Ana";
    },
    restartName() {
      this.name = "Michael";
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
