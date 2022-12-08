<template>
  <div class="wrapper">
    <!-- <notifications></notifications> -->
    <side-bar>
      <template v-slot:links>
        <sidebar-item
          :link="{
            name: 'dashboard',
            icon: 'ni ni-shop text-primary',
            path: '/dashboard',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Employees',
            icon: 'ni ni-single-02 text-orange',
            path: '/employees',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Checklists',
            icon: 'ni ni-check-bold text-blue',
            path: '/components/checklists',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Timeoff',
            icon: 'ni ni-user-run text-green',
            path: '/components/timeoff',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Calendar',
            icon: 'ni ni-calendar-grid-58 text-pink',
            path: '/calendar',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Notifications',
            icon: 'ni ni-bell-55 text-red',
            path: '/components/notifications',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Profile',
            icon: 'ni ni-circle-08 text-purple',
            path: '/pages/user',
          }"
        >
        </sidebar-item>
      </template>
    </side-bar>
    <div class="main-content" style="background-color: rgb(241, 243, 249)">
      <dashboard-navbar :type="$route.meta.navbarType"></dashboard-navbar>

      <div @click="$sidebar.displaySidebar(false)">
        <router-view></router-view>
      </div>
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-new */
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`);
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className);
    }, 100);
  }
}

import DashboardNavbar from "./DashboardNavbar.vue";
import ContentFooter from "./ContentFooter.vue";

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
  },
  methods: {
    initScrollbar() {
      let isWindows = navigator.platform.startsWith("Win");
      if (isWindows) {
        initScrollbar("sidenav");
      }
    },
  },
  mounted() {
    this.initScrollbar();
  },
};
</script>
<style lang="scss"></style>
