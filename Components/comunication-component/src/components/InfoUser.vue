<template>
  <div class="component">
    <h2>The information of user</h2>
    <p>Many details...</p>
    <p>
      Name User: <strong>{{ invertName() }}</strong>
    </p>
    <p>
      Age user: <strong> {{ age }}</strong>
    </p>

    <button @click="restartName">Restart Name</button>
    <button @click="restartFn()">Restart Name (Callback)</button>
  </div>
</template>

<script>
import eventBus from "@/eventBus";

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
    age: Number,
  },
  methods: {
    invertName() {
      return this.name.split("").reverse().join("");
    },
    restartName() {
      const oldName = "Pedro";
      this.name = "Michael";
      this.$emit("changedName", this.name);
    },
  },
  created() {
    eventBus.whenChangedAge((age) => {
      this.age = age;
    });
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
