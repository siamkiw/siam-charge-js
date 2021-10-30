<template>
  <div class="row">
    <div class="col-6 card-container d-flex justify-content-center">
      <div class="card-body" style="text-align: center">
        <p>จำนวนสมาชิก</p>
        <img
          class="card-icon mt-3 mb-2"
          :src="require('../../../assets/icon/dashbaord/person.png')"
          alt=""
        />
        <span class="d-flex justify-content-center mt-3">
          <h2>600</h2>
          <p style="margin-top: 5px" class="ml-2">คน</p>
        </span>
      </div>
    </div>

    <div class="col-6 card-container d-flex justify-content-center">
      <div class="card-body" style="text-align: center">
        <p>จำนวนสมาชิก</p>
        <img
          class="card-icon mt-3 mb-2"
          :src="require('../../../assets/icon/dashbaord/charger.png')"
          alt=""
        />
        <span class="d-flex justify-content-center mt-3">
          <h2>600</h2>
          <p style="margin-top: 5px" class="ml-2">คน</p>
        </span>
      </div>
    </div>

    <div class="col-6 card-container d-flex justify-content-center">
      <div class="card-body" style="text-align: center">
        <p>จำนวนสมาชิก</p>
        <img
          class="card-icon mt-3 mb-2"
          :src="require('../../../assets/icon/dashbaord/carTime.png')"
          alt=""
        />
        <span class="d-flex justify-content-center mt-3">
          <h2>600</h2>
          <p style="margin-top: 5px" class="ml-2">คน</p>
        </span>
      </div>
    </div>

    <div class="col-6 card-container d-flex justify-content-center">
      <div class="card-body" style="text-align: center">
        <p>จำนวนสมาชิก</p>
        <img
          class="card-icon mt-3 mb-2"
          :src="require('../../../assets/icon/dashbaord/carCharge.png')"
          alt=""
        />
        <span class="d-flex justify-content-center mt-3">
          <h2>600</h2>
          <p style="margin-top: 5px" class="ml-2">คน</p>
        </span>
      </div>
    </div>

    <div class="col-6 card-container d-flex justify-content-center">
      <div class="card-body" style="text-align: center">
        <p>จำนวนสมาชิก</p>
        <img
          class="card-icon mt-3 mb-2"
          :src="require('../../../assets/icon/dashbaord/income.png')"
          alt=""
        />
        <span class="d-flex justify-content-center mt-3">
          <h2>600</h2>
          <p style="margin-top: 5px" class="ml-2">คน</p>
        </span>
      </div>
    </div>

    <div class="col-6 card-container d-flex justify-content-center">
      <div class="card-body" style="text-align: center">
        <p>จำนวนสมาชิก</p>
        <img
          class="card-icon mt-3 mb-2"
          :src="require('../../../assets/icon/dashbaord/chargerbill.png')"
          alt=""
        />
        <span class="d-flex justify-content-center mt-3">
          <h2>600</h2>
          <p style="margin-top: 5px" class="ml-2">คน</p>
        </span>
      </div>
    </div>

    <div class="col-6 card-container d-flex justify-content-center">
      <div class="card-body" style="text-align: center">
        <p>จำนวนสมาชิก</p>
        <img
          class="card-icon mt-3 mb-2"
          :src="require('../../../assets/icon/dashbaord/chart.png')"
          alt=""
        />
        <span class="d-flex justify-content-center mt-3">
          <h2>600</h2>
          <p style="margin-top: 5px" class="ml-2">คน</p>
        </span>
      </div>
    </div>

    <div class="col-6 card-container d-flex justify-content-center">
      <div class="card-body" style="text-align: center">
        <p>จำนวนสมาชิก</p>
        <img
          class="card-icon mt-3 mb-2"
          :src="require('../../../assets/icon/dashbaord/chart.png')"
          alt=""
        />
        <span class="d-flex justify-content-center mt-3">
          <h2>600</h2>
          <p style="margin-top: 5px" class="ml-2">คน</p>
        </span>
      </div>
    </div>
  </div>
</template>

<script >
export default {};
</script>

<style scoped>
.card-icon {
  width: 40%;
  max-width: 120px;
}

.card-body {
  color: #0750a4;
  border: solid 1px #0750a4;
  width: 25vw;
  height: 25vw;
  max-width: 250px;
  max-height: 250px;
}

.card-container {
  padding: 8px;
}

h2,
p {
  margin-bottom: 0px;
}

p {
  font-size: 22px;
}
</style>

default: () => {
        numMembers : {
            num : 111,
        }
        // numCharger : 222,
        // chargingTime : 333,


    }