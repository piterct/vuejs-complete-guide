<template>
  <div class="component">
    <h2>Alter the data of user</h2>
    <p>Edit the information</p>
    <p>
      Age user: <strong> {{ age }}</strong>
    </p>
    <button @click="alterAge">Alter Age</button>
  </div>
</template>

<script>
import eventBus from "@/eventBus";

export default {
  props: {
    age: Number,
  },
  methods: {
    alterAge() {
      this.age += 1;
      eventBus.alterAge(this.age);
    },
  },
};
</script>

<style scoped>
.component {
  flex: 1;
  background-color: #98b99a;
  color: #fff;
}
</style>
