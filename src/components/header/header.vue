<template>
  <div class="header">
    <v-layout align-center justify-center>
      <div class="icons">
        <p>#</p> <!-- the font renders an image here -->
      </div>
      <nav>
        <img src="https://www.tribunadeituverava.com.br/wp-content/uploads/2019/12/star-wars-logo-2.png" alt="Star wars">
      </nav>
      <div class="icons">
        <p>È</p> <!-- the font renders an image here -->
    </div>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>

.header{
  height: 80px;
  width: 100%;

  p{
    color: #d6a609;
    font-family: "StarWars",Arial, Helvetica, sans-serif;
    font-size: 50pt;
  }
  .icons{
    margin: 0 100px 0 100px;
  }
  nav> img{
    width: 130px;
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>>
