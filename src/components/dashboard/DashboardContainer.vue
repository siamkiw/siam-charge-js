<template>
  <div class="row">
    <div class="col-5">
      <DashboardCard />
    </div>
    <div class="col-7">
      <DashboardList />
    </div>
  </div>
</template>

<script>
import DashboardCard from "../dashboard/dashboardComponents/DashboardCard.vue";
import DashboardList from "../dashboard/dashboardComponents/DashboardList.vue";
export default {
  components: {
    DashboardCard,
    DashboardList,
  },
};
</script>

<style>
</style>