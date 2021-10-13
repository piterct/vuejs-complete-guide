<template>
  <div class="component">
    <h2>The information of user</h2>
    <p>Many details...</p>
    <p>
      Name User: <strong>{{ name }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  props: ["name"],
};
</script>

<style scoped>
.component {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
