<template>
  <div class="border-blue">
    <div class="d-flex justify-content-center">
      <div class="border-blue row w-75 mt-3">
        <div class="col border-right">
          <div class="row mb-3">
            <div class="col-3">
              <p class="title">ชื่อสถานี:</p>
            </div>
            <div class="col-9">
              <p>เดอะมอลล์ บางแค</p>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-3">
              <p class="title">ที่อยุ่:</p>
            </div>
            <div class="col-9">
              <p>
                275 หมู่ 1 เดอะมอลล์ แขวง บางแคเหนือ เขตบางแค กรุงเทพมหานคร
                10160
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row mb-3">
            <div class="col-4">
              <p class="title">เวลาเปิดปิด:</p>
            </div>
            <div class="col-8">
              <p class="text-right">11.00 น. - 21.30 น.</p>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-4">
              <p class="title">ค่าบริการ / วัตต์ :</p>
            </div>
            <div class="col-8">
              <p class="text-right">100</p>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-4">
              <p class="title">ค่าจองเข้าชาร์จ :</p>
            </div>
            <div class="col-8">
              <p class="text-right">200</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-4">
      <div class="input-warpper">
        <div class="mb-3">
          <label for="chargerName" class="form-label my-2">ชื่อ*</label>
          <input
            type="text"
            class="form-control mt-1"
            id="chargerName"
            placeholder="กรอกชื่อเเท่นชารจ์"
          />
        </div>

        <div class="mb-3">
          <div class="form-group">
            <label for="chargerType" class="form-label my-2"
              >ประเภทหัวชารจ์</label
            >
            <select class="form-control" id="chargerType">
              <option value="0">ประเภทหัวชารจ์</option>
              <option value="1">Quick Charge (CCS/SAE Combo)</option>
              <option value="2">Quick Charge (CHAdeMO)</option>
              <option value="3">Mennekes (Type 2)</option>
              <option value="4">Type 2 (AC)</option>
            </select>
          </div>
        </div>

        <div class="mb-3 row">
          <div class="col">
            <label for="chargerParkingChannel" class="form-label my-2"
              >ช่องจอด</label
            >
            <input
              type="text"
              class="form-control mt-1"
              id="chargerParkingChannel"
              placeholder="กรอกช่องจอด"
            />
          </div>
          <div class="col">
            <label for="chargerFloor" class="form-label my-2">ชั้น</label>
            <input
              type="text"
              class="form-control mt-1"
              id="chargerFloor"
              placeholder="กรอกชั้น"
            />
          </div>
        </div>

        <div class="mb-3">
          <div class="form-group">
            <label for="chargerType" class="form-label my-2"
              >รูปเเบบไฟที่ชารจ์</label
            >
            <select class="form-control" id="chargerType">
              <option value="0">รูปเเบบไฟที่ชารจ์</option>
              <option value="1">Quick Charge (CCS/SAE Combo)</option>
              <option value="2">Quick Charge (CHAdeMO)</option>
              <option value="3">Mennekes (Type 2)</option>
              <option value="4">Type 2 (AC)</option>
            </select>
          </div>
        </div>

        <div class="underline my-4"></div>
        <div class="row">
          <div class="col d-flex justify-content-end">
            <button
              @click="onCancelEdit"
              type="button"
              class="btn btn-outline-primary btn-lg btn-block"
            >
              ยกเลิก
            </button>
          </div>
          <div class="col d-flex justify-content-start">
            <button type="button" class="btn btn-primary btn-lg btn-block">
              บันทึกข้อมูล
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.btn-block {
  width: 50%;
}

.input-warpper {
  width: 50%;
}

.title {
  color: #0750a4;
}

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
  width: 50%;
}

h2,
p {
  margin-bottom: 0px;
}

p {
  font-size: 18px;
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