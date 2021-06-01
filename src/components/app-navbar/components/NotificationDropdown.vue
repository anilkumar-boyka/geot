<template>
  <div>
    <b-nav-item-dropdown class="dropdown-item mt-2">
      <template #button-content>
        <b-icon icon="bell" class="text-secondary"></b-icon>
      </template>

      <b-dropdown-item-button>
        <h6><b>Today</b></h6>

        <img
          class="me-3"
          src="https://placekitten.com/300/300"
          alt="Smiley face"
          style="float: left; width: 45px; height: 45px; border-radius: 50%"
        />
        <div class="notification-font-size">
          <b>Walt Disney World</b> sent you <b>2</b> tickets to
          <b>Pandora-The World of ...</b>

          <p class="notification-font-size text-muted">2 hours ago</p>
        </div>
      </b-dropdown-item-button>
      <b-dropdown-divider></b-dropdown-divider>

      <b-dropdown-item-button class="mt-1">
        <h6><b>2 days ago</b></h6>
        <img
          class="me-3"
          src="https://placekitten.com/300/300"
          alt="Smiley face"
          style="float: left; width: 45px; height: 45px; border-radius: 50%"
        />
        <div class="notification-font-size">
          <b>Bran Koggler</b> has followed you and
          <b>2</b>
          other people
        </div>
      </b-dropdown-item-button>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item-button class="mt-1">
        <div class="notification-font-size">
          <img
            class="me-3"
            src="https://placekitten.com/300/300"
            alt="Smiley face"
            style="float: left; width: 45px; height: 45px; border-radius: 50%"
          />
          <b>Your</b> tour
          <b>A walkingtrail of Monmarte ,Paris</b>
          has been published
          <p class="notification-font-size text-muted">2 days ago</p>
        </div>
      </b-dropdown-item-button>
    </b-nav-item-dropdown>
  </div>
</template>

<style scoped>
.dropdown-toggle::after {
  display: none;
}
.notification-font-size {
  font-size: 13px;
  width: 350px;
  white-space: normal;
}
</style>
