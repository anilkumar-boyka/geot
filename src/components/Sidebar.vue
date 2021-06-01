<template>
  <div>
    <b-card class="bg-color vh-100">
      <h5
        class="mb-3"
        :class="{ selectComponent: descriptionClass }"
        @click="selectedTitle('description')"
      >
        <b>Description</b>
      </h5>
      <div>
        <h5><b>Points</b></h5>
        <div
          class="mb-4"
          @click="selectedTitle('points')"
          :class="{ selectComponent: pointsClass }"
        >
          <b-avatar
            variant="info"
            :class="{ 'shadow-lg': pointsClass }"
            text="1"
          ></b-avatar>
          <span class="m-3">Abbesses Metro Station</span>
        </div>
        <div class="mb-4">
          <b-avatar variant="info" text="2"></b-avatar>
          <span class="m-3">Pigalle and the Moulin R...</span>
        </div>
        <div class="mb-4">
          <b-avatar variant="info" text="+"></b-avatar>
          <span class="m-3"> Create new point</span>
        </div>
      </div>
      <h5
        class="mb-4"
        @click="selectedTitle('media')"
        :class="{ selectComponent: mediaClass }"
      >
        <b>Media</b>
      </h5>
      <h5 class="mb-4"><b>Settings</b></h5>
    </b-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      descriptionClass: true,
      pointsClass: false,
      mediaClass: false,
    };
  },
  methods: {
    selectedTitle: function (title) {
      if (title === "description") {
        this.descriptionClass = true;
        this.pointsClass = this.mediaClass = false;
      } else if (title === "points") {
        this.pointsClass = true;
        this.descriptionClass = this.mediaClass = false;
      } else if (title === "media") {
        this.mediaClass = true;
        this.pointsClass = this.descriptionClass = false;
      }
    },
  },
};
</script>
<style scoped>
.bg-color {
  background-color: #f8f9fa;
  border: aliceblue;
}
.b-avatar {
  background-color: white;
}
.selectComponent {
  background-color: white;
  border-bottom: 3px solid lightblue;
  padding: 15px;
}
</style>
