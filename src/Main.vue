<template>
  <div class="bg-light">
    <NavBar />
    <div class="d-flex">
      <SideBar />
      <router-view :key="$route.path" />
    </div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    SideBar,
    NavBar,
  },
  mounted() {
    console.log("main");
  },
  methods: {},
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