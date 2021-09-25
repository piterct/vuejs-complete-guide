<template>
  <div id="app">
    {{ title }}
    <button @click="title += '#'">Alter</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: "Test using Vue Js !!",
    };
  },
};
</script>

<style >
#app {
  background-color: chocolate;
  color: #fff;
}
</style>
