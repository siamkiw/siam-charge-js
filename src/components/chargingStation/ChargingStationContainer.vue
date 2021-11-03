<template>
  <div>
    <div
      v-if="!isAddStation && !isAddCharger"
      class="d-flex justify-content-between haeder-page"
    >
      <h1 class="text-left">สถานีชารจ์</h1>
      <button
        @click="onAddStation()"
        type="button"
        class="btn btn-primary btn-block my-auto"
      >
        <img src="../../assets/icon/plus.png" alt="" />
        เพิ่มสถานี่ชารจ์
      </button>
    </div>

    <div v-if="isAddStation && !isAddCharger" class="d-flex haeder-page">
      <div
        @click="onAddStation()"
        class="sign-box sign-box-blue d-flex justify-content-center mr-3"
      >
        <img class="m-auto" src="../../assets/icon/less-than-w.png" alt="" />
      </div>
      <h1 class="text-left ml-3 mr-3">สถานีชารจ์</h1>
      <div class="sign-box d-flex justify-content-center">
        <img class="m-auto" src="../../assets/icon/over-b.png" alt="" />
      </div>
      <h1 class="text-left ml-3">เพิ่มสถานี่ชารจ์</h1>
    </div>

    <div v-if="isAddCharger" class="d-flex haeder-page">
      <div
        @click="onAddStation()"
        class="sign-box sign-box-blue d-flex justify-content-center mr-3"
      >
        <img class="m-auto" src="../../assets/icon/less-than-w.png" alt="" />
      </div>
      <h1 class="text-left ml-3 mr-3">สถานีชารจ์</h1>
      <div class="sign-box d-flex justify-content-center">
        <img class="m-auto" src="../../assets/icon/over-b.png" alt="" />
      </div>
      <h1 class="text-left ml-3">เพิ่มสถานี่ชารจ์</h1>
      <div class="sign-box d-flex justify-content-center">
        <img class="m-auto" src="../../assets/icon/over-b.png" alt="" />
      </div>
      <h1 class="text-left ml-3">เพิ่มสถานี่ชารจ์</h1>
    </div>

    <ChargingStationViewer
      v-if="!isAddStation && !isAddCharger"
      :items="items"
    />
    <ChargingStationAddStation
      v-if="isAddStation"
      v-on:on-add-charger="toogleAddCharger"
    />
    <ChargingStationAddCharger v-if="!isAddStation && isAddCharger" />
  </div>
</template>

<script >
import ChargingStationViewer from "../chargingStation/chargingStationComponents/ChargingStationViewer.vue";
import ChargingStationAddStation from "../chargingStation/chargingStationComponents/ChargingStationAddStation.vue";
import ChargingStationAddCharger from "./chargingStationComponents/ChargingStationAddCharger.vue";
import apiServeices from "../../services/api_services";

export default {
  components: {
    ChargingStationViewer,
    ChargingStationAddStation,
    ChargingStationAddCharger,
  },
  data() {
    return {
      isAddStation: false,
      isAddCharging: false,
      isAddCharger: false,
      items: [],
    };
  },
  async mounted() {
    console.log("This is chargeing station");
    await this.onGetChargeStations();
  },
  methods: {
    onAddStation() {
      this.isAddStation = !this.isAddStation;
      this.isAddCharger = false;
    },
    toogleAddCharger(isAddCharger) {
      console.log("toogleAddCharger");
      this.isAddStation = !isAddCharger;
      this.isAddCharger = isAddCharger;
    },
    async onGetChargeStations() {
      const { data } = await apiServeices.onGetChargeStations();
      const res = data.responseData;
      if (res.code === 200 && res.success) {
        this.items = res.data;
        console.log("this.items : ", this.items);
      }
    },
  },
};
</script>

<style scoped>
/* @import "../../assets/css/memberModal.css"; */
button {
  width: 20%;
  height: 48px;
}

button img {
  width: 16px;
  margin-right: 10px;
}

.sign-box {
  width: 50px;
  height: 50px;
}

.sign-box img {
  height: 50%;
  width: 50%;
}

.sign-box-blue {
  background: #0750a4;
}
</style>
