<template>
  <div>
    <b-navbar variant="faded" type="light" class="shadow-sm p-3 mb-5 bg-white">
      <b-navbar-brand href="#">
        <img
          width="200"
          src="https://geotourist.com/news/wp-content/uploads/2017/01/cropped-cropped-logo.png"
          alt="geotourist"
        />
      </b-navbar-brand>
      <b-navbar-nav class="mx-auto" large="true">
        <b-nav-item class="me-3 mt-2" href="#">Discover</b-nav-item>
        <b-nav-item class="me-3 mt-2" href="#"
          ><span class="text-info">Create</span></b-nav-item
        >
        <b-nav-item href="#" class="mt-1"
          ><span class="badge rounded-pill bg-secondary p-2">Download</span>
        </b-nav-item>
      </b-navbar-nav>
      <notification-dropdown />
      <b-navbar-nav>
        <b-nav-item class="me-3 mt-2" href="#" v-b-modal.bookmark_modal
          ><b-icon icon="bookmark" aria-hidden="true"></b-icon
        ></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav>
        <user-dropdown />
      </b-navbar-nav>
    </b-navbar>
    
    <b-modal
      hide-footer
      hide-header
      id="bookmark_modal"
      centered
      hide-backdrop
      contentClass="shadow"
      :static="true"
      content-class="shadow"
      ref="bookmark_modal"
    >
      <template style="display:none" #modal-header="{}">
        <!-- Emulate built in modal header close button action -->
        <div></div>
      </template>
      <template #default="{}">
        <b class="m-3">Recently Taken</b><br />
        <p class="mb-0">
          <img
            src="https://placekitten.com/300/300"
            style="width: 80px; height: 80px; margin-left: 15px; float: left;"
          />
          <b class="m-4">Pandora - The World of Lorem ipsum ....</b><br />
          <small class="text-secondary m-5">5 min ago</small>
          <br />
          <div>
          <span
            class="badge rounded-pill border border-success text-success mb-1"
            style="background-color: #c6ffc1 !important;"
            >Write A review</span
          >
          <span class="float-end">
          <b-icon font-scale="1.5" icon="box-arrow-up" class="text-secondary me-2"></b-icon>
          <b-icon
          font-scale="1.5" 
            class="bookmark-fill"
            icon="bookmark-fill"
            aria-hidden="true"
          ></b-icon>
          </span>
          </div>
        </p>
      <hr />
      <b class="m-3">Unfinished Tours</b><br />
        <p class="mb-0">
          <img
            src="https://placekitten.com/300/300"
            style="width: 80px; height: 80px; margin-left: 15px; float: left"
          />
          <b class="m-4">A Walking trail of lLorem ipsum dolor...</b><br />
          <small class="text-secondary m-5">12 days ago</small>
          <br />
          <div>
            <span class="text-warning" >70%</span>
         <span
          class="badge rounded-pill border border-warning text-warning"
          style="background-color: #ffffc7 !important"
          >Resume</span
        >
          <span class="float-end">
          <b-icon font-scale="1.5"  icon="box-arrow-up" class="text-secondary me-2"></b-icon>
          <b-icon
          font-scale="1.5" 
            class="bookmark-fill"
            icon="bookmark-fill"
            aria-hidden="true"
          ></b-icon>
          </span>
          </div>
        </p>
    
      </template>
          <template class="bookmark-modal_footer_and_header" #modal-footer="{ }">
      <div></div>
    </template>
 
    </b-modal>

    
  </div>
  
</template>
<script>
import UserDropdown from "./components/UserDropdown.vue";
import NotificationDropdown from "./components/NotificationDropdown.vue";
export default {
  components: {
    UserDropdown,
    NotificationDropdown,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.badge {
  background-color: lightgrey !important;
}
bi-icon,
.bi-bookmark-fill {
  color: lightgray;
}
.text-success,
.text-warning {
  margin-left: 23px;
}
.modal-header {
  color: red;
}
img {
  border-radius: 15px;
}
/* .mt-2 {
  margin-top: 0 !important;
} */
</style>

