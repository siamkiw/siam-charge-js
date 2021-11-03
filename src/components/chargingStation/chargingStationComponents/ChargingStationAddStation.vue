<template>
  <div class="border-blue">
    <div class="row mt-3">
      <div class="col">
        <div class="d-flex justify-content-center border-right">
          <div class="input-warpper">
            <div class="mb-3">
              <label for="stationName" class="form-label my-2">ชื่อสถานี</label>
              <input
                v-model="foo"
                type="text"
                class="form-control mt-1"
                id="stationName"
                placeholder=""
              />
            </div>

            <div class="mb-3">
              <label for="stationAss" class="form-label my-2">ที่อยู่</label>
              <input
                type="text"
                class="form-control mt-1"
                id="stationAss"
                placeholder=""
              />
            </div>

            <div class="mb-3">
              <label for="stationNumber" class="form-label my-2"
                >เบอร์โทร</label
              >
              <input
                type="number"
                class="form-control mt-1"
                id="stationNumber"
                placeholder=""
              />
            </div>

            <!-- <div class="form-group">
              <label for="memberSex" class="form-label my-2">select</label>
              <select class="form-control" id="memberSex">
                <option value="1">male</option>
                <option value="2">woman</option>
              </select>
            </div> -->

            <div class="d-flex justify-content-between align-self-center">
              <div class="mb-3">
                <label for="IDNumber" class="form-label my-2">เวลาเปิด*</label>
                <input
                  type="text"
                  class="form-control mt-1"
                  id=""
                  placeholder=""
                />
              </div>
              <div
                style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <p class="mt-4">ถึง</p>
              </div>
              <div class="mb-3">
                <label for="IDNumber" class="form-label my-2">เวลาปิด*</label>
                <input
                  type="text"
                  class="form-control mt-1"
                  id=""
                  placeholder=""
                />
              </div>
            </div>

            <div class="mb-3">
              <label for="memberAddress" class="form-label my-2"
                >ที่อยู่*</label
              >
              <textarea
                class="form-control mt-1"
                id="memberAddress"
                rows="3"
              ></textarea>
            </div>

            <div class="mb-3">
              <label for="memberEmail" class="form-label my-2"
                >สถานที่ใกล้เคียง</label
              >
              <input
                type="text"
                class="form-control mt-1"
                id="memberEmail"
                placeholder="สถานที่ใกล้เคียง"
              />
            </div>

            <div class="mb-3">
              <label for="memberEmail" class="form-label my-2"
                >อัปโหลดรูปสถานีชาร์จ</label
              >
              <div class="d-flex justify-content-between mt-1">
                <input
                  type="text"
                  class="form-control w-75"
                  style="height: 50px"
                  id="memberEmail"
                  placeholder="สถานที่ใกล้เคียง"
                />
                <button
                  type="button"
                  style="height: 50px"
                  class="btn btn-primary btn-block my-auto w-25 ml-3"
                >
                  อัพโหลด
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="d-flex justify-content-center">
          <div class="input-warpper">
            <div class="mb-3">
              <label for="stationName" class="form-label my-2"
                >ค่าบริการ / วัตต์</label
              >
              <input
                v-model="foo"
                type="text"
                class="form-control mt-1"
                id="stationName"
                placeholder="0"
              />
            </div>

            <div class="mb-3">
              <label for="stationName" class="form-label my-2"
                >ค่าจองเข้าชาร์จ ต่อ 1 ชม.</label
              >
              <input
                v-model="foo"
                type="text"
                class="form-control mt-1"
                id="stationName"
                placeholder="0"
              />
            </div>

            <div class="charging-header d-flex justify-content-between">
              <p>เเท่นชารจ์</p>
              <button
                @click="onAddCharger()"
                type="button"
                class="btn btn-primary btn-block my-auto w-25"
              >
                <img
                  style="padding-bottom: 3px"
                  src="../../../assets/icon/plus.png"
                  alt=""
                />
                เพิ่มสถานี่ชารจ์
              </button>
            </div>
            <ChargerBar />
          </div>
        </div>
      </div>
    </div>
    <div class="underline my-4"></div>
    <div class="row">
      <div class="col d-flex justify-content-end">
        <div class="w-25">
          <button
            @click="onCancelEdit"
            type="button"
            class="btn btn-outline-primary btn-lg btn-block"
          >
            ยกเลิก
          </button>
        </div>
      </div>
      <div class="col d-flex justify-content-start">
        <div class="w-25">
          <button type="button" class="btn btn-primary btn-lg btn-block">
            บันทึกข้อมูล
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from "vue";
import ChargerBar from "../../chargingStation/chargingStationComponents/ChargerBar.vue";

export default {
  components: {
    ChargerBar,
  },
  methods: {
    onCancelEdit() {
      console.log("on-cancel-edit");
      this.$emit("on-cancel-edit");
      return false;
    },
    onAddCharger() {
      console.log("on-add-charger");
      this.$emit("on-add-charger");
      return true;
    },
  },
};
</script>

<style scoped>
.charging-header {
  color: #0750a4;
  border-bottom: #0750a4 solid 1px;
  padding-bottom: 10px;
  margin-top: 20px;
}

.underline {
  border-top: #0750a4 solid 1px;
}

.border-right {
  border-right: solid 1px #0750a4 !important;
}

label {
  color: #0750a4;
}

input,
select,
textarea {
  border-color: #0750a4;
}

.input-warpper {
  width: 85%;
}

h2,
p {
  margin-bottom: 0px;
}

p {
  font-size: 22px;
}

button img {
  width: 16px;
  margin-right: 10px;
}
</style>

default: () => {
        numMembers : {
            num : 111,
        }
        // numCharger : 222,
        // chargingTime : 333,


    }