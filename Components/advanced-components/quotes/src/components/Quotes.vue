<template>
  <div class="quotes">
    <span>
      <button @click="number--">&lt;</button>
      <button @click="number++">&gt;</button>
    </span>
    <quote>
      <h1 slot="author">{{ quotes[index].author }}</h1>
      <p>{{ quotes[index].text }}</p>
      <h6 slot="font">{{ quotes[index].font }}</h6>
    </quote>
  </div>
</template>

<script>
import Quote from "./Quote";

export default {
  components: { Quote },
  data() {
    return {
      number: 0,
      quotes: [
        {
          font: "Jornal do Empreendedor",
          text: "Lembre-se sempre que você é absolutamente único. Assim como todos os outros.",
          author: "Margaret Mead",
        },
        {
          font: "Frases de Mãe",
          text: "Isso não é um quarto, é um chiqueiro.",
          author: "Roberta",
        },
        {
          font: "Frases de Pai",
          text: "Vou contar até 3! 1, 2, 2...",
          author: "Gustavo",
        },
      ],
    };
  },
  computed: {
    index() {
      return Math.abs(this.number % 3);
    },
  },
};
</script>

<style scoped>
.quotes {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
