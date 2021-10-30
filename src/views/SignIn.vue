<template>
  <div class="d-flex justify-content-center align-items-center h-100">
    <div class="card shadow" style="width: 25rem">
      <div class="card-header bg-white text-center shadow-sm">
        <img
          class="img-fluid"
          style="height: 35px"
          src="../assets/icon/siam-charge-login.png"
          alt=""
        />
      </div>
      <div class="card-body text-primary">
        <p class="card-title text-center">เข้าสู่ระบบ</p>

        <form @submit.prevent="submitForm">
          <div class="form-group text-left">
            <label>อีเมล</label>
            <input
              v-model="username"
              name="username"
              type="text"
              class="form-control"
            />
          </div>
          <div class="form-group text-left">
            <label>รหัสผ่าน</label>
            <input
              v-model="password"
              name="password"
              type="password"
              class="form-control"
            />
          </div>
          <button
            class="btn btn-primary btn-lg btn-block mt-5"
            style="font-size: 15px"
            type="submit"
          >
            เข้าสู่ระบบ
          </button>
        </form>

        <div class="d-flex justify-content-end">
          <a
            href="#"
            class="card-link text-primary mt-2 mb-1 font-weight-light"
            style="font-size: 13px"
            ><u>ลืมรหัสผ่าน</u></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Hello World",
      username: "",
      password: "",
    };
  },
  methods: {
    async submitForm() {
      const req = {
        username: this.username,
        password: this.password,
      };

      const res = await this.$store.dispatch("login", req);
      console.log(this.$store.state);
      if (!res.code === 200 && !res.success) {
        return;
      } else {
        localStorage.setItem("siamChargerUser", JSON.stringify(res));
        this.$router.push("/dashboard");
      }
    },
  },
};
</script>

<style>
.card-body {
  padding: 15px;
}
</style>