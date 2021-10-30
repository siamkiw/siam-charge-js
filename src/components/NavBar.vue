<template>
  <nav class="navbar navbar-expand navbar-dark bg-white">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img class="image-logo" src="../assets/image/logo.png" alt=""
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExample02"
        aria-controls="navbarsExample02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse d-flex justify-content-between">
        <ul class="navbar-nav me-auto">
          <!-- <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li> -->
        </ul>
        <div>
          <NavProfile />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import NavProfile from "../components/NavProfile.vue";

export default {
  components: {
    NavProfile,
  },
  mounted() {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image-logo {
  width: 200px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
