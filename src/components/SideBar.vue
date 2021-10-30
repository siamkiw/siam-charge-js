<template>
  <div
    class="d-flex flex-column text-white bg-primary"
    style="min-width: 275px; min-height: 100vh"
  >
    <ul class="nav nav-pills flex-column mb-auto">
      <li v-for="(sidebar, index) in sidebarData" :key="index">
        <router-link :to="sidebar.route">
          <a
            class="nav-link text-left"
            @click="onClickSideBar(index)"
            :class="{ active: index == current }"
          >
            <img
              class="iamge-side-bar"
              :src="sidebar.iconPath"
              :lazy-src="sidebar.iconPath"
              alt=""
            />
            {{ sidebar.title }}
          </a>
        </router-link>
      </li>
    </ul>
    <hr />
    <div class="dropdown">
      <ul class="nav nav-pills flex-column mb-auto">
        <li>
          <a href="#" class="nav-link text-left">
            <img
              class="iamge-side-bar"
              :src="require('../assets/icon/logout.png')"
              alt=""
            />
            ออกจากระบบ
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      sidebarData: [
        {
          title: "เเดชบอร์ด",
          route: "/dashboard",
          iconPath: require("../assets/icon/Vector.png"),
        },
        {
          title: "รายชื่อสมาชิก",
          route: "/memberList",
          iconPath: require("../assets/icon/nameList.png"),
        },
        {
          title: "สถานี่ชาร์จ",
          route: "/chargingstation",
          iconPath: require("../assets/icon/Vector.png"),
        },
        {
          title: "รถยนต์",
          route: "/car",
          iconPath: require("../assets/icon/car.png"),
        },
        {
          title: "รุ่นรถยนต์",
          route: "/carModel",
          iconPath: require("../assets/icon/car.png"),
        },
        {
          title: "บัญชีรายรับ",
          route: "/income",
          iconPath: require("../assets/icon/book.png"),
        },
        {
          title: "คูปอง",
          route: "/cupon",
          iconPath: require("../assets/icon/cupon.png"),
        },
        {
          title: "บัตรสิทธิประโยชน์",
          route: "/privilegecard",
          iconPath: require("../assets/icon/card.png"),
        },
        {
          title: "ข่าวสารโปรโมชั่น",
          route: "/news",
          iconPath: require("../assets/icon/paper.png"),
        },
        {
          title: "เเจ้งเตื่อน",
          route: "/alert",
          iconPath: require("../assets/icon/bell.png"),
        },
        {
          title: "ผู้ดูเเล",
          route: "/admin",
          iconPath: require("../assets/icon/nameList.png"),
        },
      ],
    };
  },
  methods: {
    onClickSideBar(index) {
      this.current = index;
    },
  },
};
</script>

<style scoped>
.bg-primary {
  background-color: #0750a4 !important;
}

.nav-link.active {
  border-left: solid 4px #fff;
}

.nav-link {
  padding-top: 15px;
  padding-bottom: 15px;
}

.iamge-side-bar {
  width: 20px;
  margin-right: 15px;
  margin-left: 10px;
}

.nav-link {
  color: #fff;
}

a {
  text-decoration: none !important;
}
</style>
