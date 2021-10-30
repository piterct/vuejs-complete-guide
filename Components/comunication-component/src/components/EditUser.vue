<template>
  <div class="component">
    <h2>Alter the data of user</h2>
    <p>Edit the information</p>
    <p>Age user: <strong> {{ age }}</strong></p>
  </div>
</template>

<script>
export default {
  props: {
    age: Number,
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
