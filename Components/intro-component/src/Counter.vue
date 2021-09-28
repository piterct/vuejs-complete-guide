  <template>
  <div class="counter">
    <span> {{ counter }}</span>
    <button @click="add">+</button>
    <button @click="subtract">-</button>
  </div>
</template>

  <script>
export default {
  data() {
    return { counter: 0 };
  },
  methods: {
    add() {
      this.counter++;
    },
    subtract() {
      this.counter--;
    },
  },
};
</script>
    
<style >
.couter span {
  border-bottom: 1px solid #ccc;
  height: 30px;
  padding: 5px 25px;
}

.counter button {
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background-color: coral;
  color: #fff;
  margin-left: 10px;
  outline: none;
}
</style>