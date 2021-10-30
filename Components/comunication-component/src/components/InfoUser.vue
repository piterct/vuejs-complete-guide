<template>
  <div class="component">
    <h2>The information of user</h2>
    <p>Many details...</p>
    <p>
      Name User: <strong>{{ invertName() }}</strong>
    </p>
    <button @click="restartName">Restart Name</button>
    <button @click="restartFn()">Restart Name (Callback)</button>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      // required: true,
      default: "anonymous",
      // default: function () {
      // return Array(10).fill(0).join(",");
      // },
    },
    restartFn: Function,
  },
  methods: {
    invertName() {
      return this.name.split("").reverse().join("");
    },
    restartName() {
      const oldName = "Pedro";
      this.name = "Michael";
      this.$emit("nameChanged", this.name);
    },
  },
};
</script>

<style scoped>
.component {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
