<template>
  <!-- The Modal -->
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <div class="modal-body">
        <nav class="nav d-flex justify-content-between">
          <div class="d-flex">
            <a
              class="nav-link rounded-top"
              @click="onSelectTap('chargingStation')"
              :class="{ active: this.tapList[0].isShow }"
              >ข้อมูลสถานีชาร์จ</a
            >
            <a
              class="nav-link ml-2 rounded-top"
              @click="onSelectTap('charger')"
              :class="{ active: this.tapList[1].isShow }"
              >ข้อมูลเเท่นชาร์จ</a
            >
          </div>
          <a
            class="
              nav-link
              box
              d-flex
              justify-content-center
              align-self-center
              rounded
            "
            @click="onCloseModal(false)"
            ><img
              style="max-width: 25px"
              src="../../../assets/icon/x.png"
              alt=""
          /></a>
        </nav>
        <div class="data-content" style="overflow: scroll; height: 100%">
          <div
            v-if="this.tapList[0].isShow"
            class="d-flex justify-content-center"
          >
            <div class="modal-content">
              <h2>ข้อมูลสมาชิก</h2>
              <img
                class="user-profile-image rounded-circle mt-2 mb-4"
                src="../../../assets/image/warden.jpeg"
                alt=""
              />
              <div class="row">
                <div class="col"><p class="text-left">ชื่อสถานี :</p></div>
                <div class="col modal-data text-left">เดอะมอลล์ บางแค</div>
              </div>

              <div class="row">
                <div class="col"><p class="text-left">ที่อยู่ :</p></div>
                <div class="col modal-data text-left">
                  275 หมู่ 1 เดอะมอลล์ แขวง บางแคเหนือ เขตบางแค กรุงเทพมหานคร
                  10160
                </div>
              </div>

              <div class="row">
                <div class="col"><p class="text-left">เบอร์โทร :</p></div>
                <div class="col modal-data text-left">02-487-1000</div>
              </div>
              <div class="row">
                <div class="col"><p class="text-left">เวลาเปิด :</p></div>
                <div class="col modal-data text-left">11.00 น. - 21.30 น.</div>
              </div>
              <div class="row">
                <div class="col">
                  <p class="text-left">สถานที่ใกล้เคียง :</p>
                </div>
                <div class="col modal-data text-left">
                  ร้านกาแฟ, คาร์แคร์, ร้านสะดวกซื้อ
                </div>
              </div>
              <div class="row">
                <div class="col"><p class="text-left">จำนวนการชาร์จ :</p></div>
                <div class="col modal-data text-left">103 ครั้ง</div>
              </div>
              <div class="row">
                <div class="col">
                  <p class="text-left">ชม. การชาร์จรวม :</p>
                </div>
                <div class="col modal-data text-left">600 ชม.</div>
              </div>
              <div class="row">
                <div class="col"><p class="text-left">รายได้ :</p></div>
                <div class="col modal-data text-left">50,000 บาท นาที</div>
              </div>
              <div class="row">
                <div class="col"><p class="text-left">จำนวนแท่นชาร์จ :</p></div>
                <div class="col modal-data text-left">10 แท่น</div>
              </div>
            </div>
          </div>

          <div v-if="this.tapList[1].isShow">
            <h2 class="mt-2 pb-4 underline">ข้อมูลเเทนชาร์จ</h2>
            <div class="car-warper row">
              <div
                v-for="item in 10"
                :key="item"
                class="col-6 modal-data-car pb-3 border-blue-bottom mt-3 mb-3"
              >
                <div class="border-line-left">
                  <p class="text-left">แท่นชาร์จที่ {{ item }}</p>
                  <div class="row">
                    <div class="col-6 text-left">
                      <p>ชื่อแท่นชาร์จ :</p>
                    </div>
                    <div class="col-6 text-left">
                      <p class="text-dark">CHARGER A-{{ item }}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6 text-left">
                      <p>ประเภทหัวชาร์จ :</p>
                    </div>
                    <div class="col-6 text-left">
                      <p class="text-dark">Type 2 (AC)</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6 text-left">
                      <p>ช่องจอด :</p>
                    </div>
                    <div class="col-6 text-left">
                      <p class="text-dark">B06</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6 text-left">
                      <p>ชั้น :</p>
                    </div>
                    <div class="col-6 text-left">
                      <p class="text-dark">G</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6 text-left">
                      <p>รูปแบบไฟที่ชาร์จ :</p>
                    </div>
                    <div class="col-6 text-left">
                      <p class="text-dark">กำลังไฟฟ้า 22.08 kw</p>
                    </div>
                  </div>
                  <div class="d-flex">
                    <div class="charger-button-container">
                      <div
                        class="d-flex align-items-center justify-content-center"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPower: true,
      tapList: [
        { tapName: "chargingStation", isShow: true },
        { tapName: "charger", isShow: false },
      ],
    };
  },
  props: {
    id: {
      type: String,
      default: () => "",
    },
  },
  mounted() {
    console.log("id is : ", this.id);
    console.log(this.$store.getters.filterID);
  },
  methods: {
    onSelectTap(selectedTap) {
      for (let index in this.tapList) {
        if (selectedTap === this.tapList[index].tapName) {
          this.tapList[index].isShow = true;
        } else {
          this.tapList[index].isShow = false;
        }
      }
    },
    onCloseModal(isClose) {
      this.$emit("on-close-modal");
      return isClose;
    },
  },
};
</script>

<style scoped>
@import "../../../assets/css/modal.css";

@import "../../../assets/css/memberModal.css";

.underline {
  border-bottom: #0750a4 solid 1px;
}

.border-line-left {
  border-right: #0750a4 solid 1px;
}

.box {
  cursor: pointer;
  background-color: #0750a4;
  position: relative;
  top: 42px;
  left: 12px;
  padding: 10px !important;
  margin: 0px;
}

.data-content {
  background-color: #fff;
  height: 80vh;
  padding: 20px;
}

.nav-link.active {
  background-color: #fff !important;
  color: #0750a4;
}

.nav-link {
  color: #fff;
}

.list-icon {
  /* width: 20px; */
  height: 20px;
}

.list-icon-container-red {
  cursor: pointer;
  background-color: #fe6c6c;
  border-radius: 1px;
  height: 50px;
  width: 50px;
}

.list-icon-container-blue {
  cursor: pointer;
  background-color: #0750a4;
  border-radius: 1px;
  height: 50px;
  width: 50px;
}

.list-icon-container-green {
  cursor: pointer;
  background-color: #24c879;
  border-radius: 1px;
  height: 50px;
  width: 50px;
}

.list-icon-container-yellow {
  cursor: pointer;
  background-color: #ffa338;
  border-radius: 1px;
  height: 50px;
  width: 50px;
}
</style>