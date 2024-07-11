<template>
  <div class="page">
    <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato&display=swap" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css" />
    </Head>
    <h1 style="color:rgb(252, 249, 251)">Music Player</h1>
    <MusicPlayer />
  </div>
</template>

<script>
import MusicPlayer from "./MusicPlayer.vue";
export default {
  components: {
    MusicPlayer,
  },
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.page {
  background-image: linear-gradient(0deg, rgba(247, 247, 247, 1) 23.8%, #0decfc);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Lato', sans-serif;
}
</style>