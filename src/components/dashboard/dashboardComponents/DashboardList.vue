<template>
  <div class="list-container mt-2">
    <h4 class="text-left mt-2 ml-2" style="color: #0750a4">รายรับล่าสุด</h4>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ชื่อผู้ใช้งาน</th>
          <th scope="col">สถานีชารจ์</th>
          <th scope="col">เวลาการชาร์จ</th>
          <th scope="col">จำนวนเงิน</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in num" :key="i">
          <td class="pt-3">สมดี มีใจงาน</td>
          <td class="pt-3">เดอะมอลล์ บางแค</td>
          <td class="pt-3">600 นาที</td>
          <td class="pt-3">600 บาท</td>
          <td>
            <div
              class="
                list-icon-container
                d-flex
                align-items-center
                justify-content-center
              "
            >
              <img
                class="list-icon-eye"
                :src="require('../../../assets/icon/dashbaord/eye.png')"
                alt=""
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script >
export default {
  data() {
    return {
      num: 10,
    };
  },
};
</script>

<style scoped>
.list-container {
  border: solid 1px #0750a4;
  padding: 10px;
}

th {
  color: #0750a4;
  font-weight: 500;
}

td {
  color: #000;
  text-align: center;
}

.table thead th {
  border: none;
  border-bottom: solid 1px #0094d4;
}

.list-icon-eye {
  width: 23px;
}

.list-icon-container {
  background-color: #0750a4;
  border-radius: 3px;
  height: 35px;
  width: 35px;
}
</style>