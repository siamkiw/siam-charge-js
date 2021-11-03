<template>
  <div class="container-fluid">
    <ChargingStationContainer />
  </div>
</template>

<script lang="ts">
import ChargingStationContainer from "../components/chargingStation/ChargingStationContainer.vue"; // @ is an alias to /src

export default {
  components: {
    ChargingStationContainer,
  },
};
</script>
