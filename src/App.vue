<template>
  <v-app cla>
    <v-main id="main-app">
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <!-- <v-footer app></v-footer> -->
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
<style lang="scss">
.container{
  padding:0;
}
</style>
