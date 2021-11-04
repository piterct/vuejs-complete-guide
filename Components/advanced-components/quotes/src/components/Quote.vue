<template>
  <div class="quote">
    <slot name="author"></slot>
    <slot></slot>
    <slot name="font"></slot>
  </div>
</template>

<script>
export default {
  created() {
    console.log("created");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>

<style scoped>
.quote {
  border: 1px solid #ddd;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 25px;
  max-width: 450px;
}

/*.quoteh1 {
    color:red!important;
} */
</style>
