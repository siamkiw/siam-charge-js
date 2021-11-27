<template>
  <div class="border-blue">
    <div class="input-group mt-2 mb-4">
      <input
        class="form-control border-right-0 border-top-0 border-left-0"
        placeholder="ค้นหา"
      />
      <span
        class="
          input-group-append
          bg-white
          border-right-0 border-top-0 border-left-0
        "
      >
        <span
          class="input-group-text bg-transparent"
          style="border-right-width: 0px; border-top-width: 0px"
        >
          <img
            style="max-width: 23px"
            src="../../../assets/icon/magnifyingGlass.png"
            alt=""
          />
        </span>
      </span>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th class="text-center" scope="col">ชื่อสถานี</th>
          <th class="text-center" style="max-width: 200px" scope="col">
            ที่อยู่
          </th>
          <th class="text-center" scope="col">เวลาเปิด</th>
          <th class="text-center" scope="col">ชม. การชาร์จ</th>
          <th class="text-center" scope="col">รายได้</th>
          <th class="text-center" scope="col">แท่นชาร์จ</th>
          <th class="text-left" style="max-width: 400px" scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td class="pt-3 text-center">{{ item.name }}</td>
          <td class="pt-3 text-left" style="max-width: 200px">
            {{ item.address }}
          </td>

          <td class="pt-3">{{ item.openingTime }}</td>
          <td class="pt-3">{{ item.totalChargeTimeHours }}</td>
          <td class="pt-3">{{ item.totalIncomeBaht }}</td>
          <td class="pt-3">{{ item.totalChargePoint }}</td>
          <td class="pt-3">
            <div class="d-flex align-items-center">
              <div
                class="
                  list-icon-container-blue
                  d-flex
                  align-items-center
                  justify-content-center
                  mx-1
                "
                @click="onCloseViewModal(true, item.id)"
              >
                <img
                  class="list-icon-eye"
                  :src="require('../../../assets/icon/dashbaord/eye.png')"
                  alt=""
                />
              </div>

              <div
                class="
                  list-icon-container-mint
                  d-flex
                  align-items-center
                  justify-content-center
                  mx-1
                "
              >
                <img
                  class="list-icon-eye"
                  :src="require('../../../assets/icon/pinter.png')"
                  alt=""
                />
              </div>

              <div
                class="
                  list-icon-container-blue
                  d-flex
                  align-items-center
                  justify-content-center
                  mx-1
                "
              >
                <img
                  class="list-icon-eye"
                  :src="require('../../../assets/icon/pen.png')"
                  alt=""
                />
              </div>

              <div
                class="
                  list-icon-container-red
                  d-flex
                  align-items-center
                  justify-content-center
                  mx-1
                "
                @click="onToogleDeleteUserModal(true)"
              >
                <img
                  class="list-icon-eye"
                  :src="require('../../../assets/icon/junk.png')"
                  alt=""
                />
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <MemberListModalDeleteUser
      v-if="isShowDeleteUserModal"
      v-on:on-close-delete-user-modal="onToogleDeleteUserModal"
    />

    <ChargingStationModal
      v-if="isViewModal"
      :stationId="id"
      v-on:on-close-modal="onCloseViewModal()"
    />
  </div>
</template>

<script>
import MemberListModalDeleteUser from "../../ModalDeleteUser.vue";
import ChargingStationModal from "../chargingStationComponents/ChargingStationModal.vue";

export default {
  components: {
    MemberListModalDeleteUser,
    ChargingStationModal,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isViewModal: false,
      isShowDeleteUserModal: false,
      id: "",
    };
  },
  methods: {
    onCloseViewModal(isClose, id) {
      this.$store.dispatch("setIDFilter", id);
      this.isViewModal = isClose;
    },
    onToogleDeleteUserModal(isClose) {
      this.isShowDeleteUserModal = isClose;
    },
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

.table td {
  vertical-align: middle !important;
}

.table thead th {
  border: none;
  border-bottom: solid 1px #0094d4;
}

.list-icon-eye {
  width: 19px;
}

.list-icon-container-blue {
  cursor: pointer;
  background-color: #0750a4;
  border-radius: 3px;
  height: 35px;
  width: 35px;
}

.list-icon-container-green {
  cursor: pointer;
  background-color: #24c879;
  border-radius: 3px;
  height: 35px;
  width: 35px;
}

.list-icon-container-mint {
  cursor: pointer;
  background-color: #3dcba0;
  border-radius: 3px;
  height: 35px;
  width: 35px;
}

.list-icon-container-red {
  cursor: pointer;
  background-color: #fe6c6c;
  border-radius: 3px;
  height: 35px;
  width: 35px;
}

input:focus,
textarea:focus,
select:focus {
  outline: none !important;
}

.input-group {
  width: 45%;
}

h2,
p {
  margin-bottom: 0px;
}

p {
  font-size: 22px;
}
</style>
