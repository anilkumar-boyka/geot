<template>
  <div>
    <!-- Image and text -->
    <b-navbar variant="faded" type="light" class="shadow-sm p-3 mb-5 bg-white">
      <b-navbar-brand href="#">
        <img
          src="https://placekitten.com/g/30/30"
          class="d-inline-block align-top"
          alt="Kitten"
        />
        BootstrapVue
      </b-navbar-brand>
      <b-navbar-nav class="mx-auto" large="true">
        <b-nav-item class="me-3" href="#">Discover</b-nav-item>
        <b-nav-item class="me-3" href="#"
          ><span class="text-info">Create</span></b-nav-item
        >
        <b-nav-item href="#"
          ><span class="badge rounded-pill bg-secondary p-2">Download</span>
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-item class="me-3 mt-2" href="#">
          <b-icon icon="bookmark" aria-hidden="true"></b-icon>
        </b-nav-item>
        <b-nav-item href="#" class="me-3 mt-2"
          ><b-icon icon="bell" aria-hidden="true"></b-icon
        ></b-nav-item>
        <b-nav-item
          ><b-avatar
            size="2rem"
            variant="info"
            src="https://placekitten.com/300/300"
          ></b-avatar>
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="nav align-items-center ml-auto">
        <user-dropdown />
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
import UserDropdown from "./components/UserDropdown.vue";
export default {
  components: {
    UserDropdown,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.badge {
  background-color: lightgrey !important;
}
</style>
