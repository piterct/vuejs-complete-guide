<template>
  <v-app>
    <app-menu />
    <app-toolbar />
    <v-content>
      <app-carousel />
    </v-content>
    <app-footer />
  </v-app>
</template>

<script>
import Menu from "@/components/template/Menu.vue";
import Toolbar from "@/components/template/Toolbar.vue";
import Carousel from "@/components/widgets/Carousel.vue";
import Footer from "@/components/template/Footer.vue";

export default {
  components: {
    appFooter: Footer,
    appCarousel: Carousel,
    appToolbar: Toolbar,
    appMenu: Menu,
  },
};
</script>
