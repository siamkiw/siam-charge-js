<template>
  <!-- The Modal -->
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <div class="modal-body">
        <img
          class="my-3"
          style="width: 112px"
          src="../assets/icon/junkBlue.png"
          alt=""
        />
        <h4 class="my-4">คุณต้องการลบข้อมูลนี้หรือไม่</h4>
        <div class="d-flex justify-content-around my-3">
          <button
            @click="onCloseDeleteUserModal(false)"
            type="button"
            class="btn btn-outline-primary btn-block"
          >
            ยกเลิก
          </button>

          <button type="button" class="btn btn-primary btn-block pt-0">
            ลบข้อมูล
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onCloseDeleteUserModal(isClose) {
      this.$emit("on-close-delete-user-modal");
      // src="../../../assets/icon/junkBlue.png"
      return isClose;
    },
  },
};
</script>

<style scoped>
@import "../assets/css/modal.css";
/* @import "../../../assets/css/modal.css"; */

.btn-block + .btn-block {
  margin-top: 0px !important;
}

.btn {
  max-width: 170px;
}

.modal-content {
  background-color: rgba(0, 0, 0, 0);
  margin: auto;
  padding: 20px;
  border: 0px;
  width: 500px;
  text-align: center;
  width: 50%;
  border: 0px;
  color: #0750a4;
}

.modal-body {
  padding: 20px;
  background-color: #fff;
}
</style>