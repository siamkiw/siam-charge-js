<template>
  <div class="profile-container border-left d-flex">
    <div class="profile-image-container d-flex align-items-center">
      <img
        class="profile-image rounded-circle"
        src="../assets/image/warden.jpeg"
        alt=""
      />
    </div>
    <div class="profile-name-comtainer">
      <div class="profile-name">สมชาย ดวงดี</div>
      <div class="profile-title">ผู้ดูเเลระดับ 1</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile-image {
  width: 50px;
}

.profile-container {
  height: 50px;
}

.border-left {
  border-left: solid 2px #0750a4 !important;
}

.profile-image-container {
  margin-left: 10px;
  margin-right: 10px;
}

.profile-name {
  font-size: 20px;
  color: #0750a4;
}

.profile-title {
  font-size: 12px;
  color: #000;
}

.profile-name-comtainer {
  margin-right: 10px;
}
</style>
