<template>
  <router-view />
</template>

<script>
export default {
  mounted() {
    console.log("app");
  },
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}

#app {
  height: 100%;
  margin: 0;
}

* {
  font-family: "Kanit", sans-serif;
}
</style>
