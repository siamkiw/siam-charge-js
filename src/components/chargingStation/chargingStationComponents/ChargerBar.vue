<template>
  <div class="underline d-flex justify-content-between py-2 px-1">
    <div
      class="chaeger-anme d-flex justtifly-content-center align-items-center"
    >
      <p>CHARGER A-1</p>
    </div>
    <div class="d-flex">
      <div class="charger-button-container">
        <div
          class="d-flex align-items-center justify-content-center ml-3"
          :class="{
            'list-icon-container-green': isPower,
            'list-icon-container-red': !isPower,
          }"
        >
          <img
            class="list-icon"
            :src="require('../../../assets/icon/open.png')"
            alt=""
          />
        </div>
      </div>
      <div class="charger-button-container">
        <div
          class="
            list-icon-container-blue
            d-flex
            align-items-center
            justify-content-center
            ml-3
          "
        >
          <img
            class="list-icon"
            :src="require('../../../assets/icon/restart.png')"
            alt=""
          />
        </div>
      </div>
      <div class="charger-button-container">
        <div
          class="
            list-icon-container-yellow
            d-flex
            align-items-center
            justify-content-center
            ml-3
          "
        >
          <img
            class="list-icon"
            :src="require('../../../assets/icon/warn.png')"
            alt=""
          />
        </div>
      </div>
      <div class="charger-button-container">
        <div
          class="
            list-icon-container-blue
            d-flex
            align-items-center
            justify-content-center
            ml-3
          "
        >
          <img
            class="list-icon"
            :src="require('../../../assets/icon/pen.png')"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  props: {
    isPower: {
      type: Array,
      default: () => false,
    },
  },
};
</script>

<style scoped>
p {
  margin: 0px;
}
</style>
