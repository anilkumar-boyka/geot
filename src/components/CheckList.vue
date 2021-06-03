<template>
  <div>
    <b-card no-body style="max-width: 15rem" class="checklist shadow-sm">
      <b-card-body>
        <b-card-title><b>Checklist</b></b-card-title>
        <div v-for="name in checkListNames" :key="name" class="mb-2">
          <span>
            <b>{{ name }}</b></span
          >
          <span class="float-end">
            <b-icon icon="check-circle-fill" style="color: #96bb7c"></b-icon>
          </span>
        </div>
        <div v-for="(name, i) in notCheckedListNames" :key="i" class="mb-2">
          <span class="text-muted"
            ><b>{{ name }}</b></span
          >
        </div>
      </b-card-body>
      <div>
        <b-button
          pill
          variant="outline-info"
          size=""
          class="d-block m-auto w-75"
          >Preview</b-button
        >
        <b-button
          pill
          variant="info"
          class="d-block mt-3 mb-3 m-auto w-75 text-white"
          v-b-modal.checklist-modal
          >Publish</b-button
        >
      </div>
    </b-card>

    <b-modal
      id="checklist-modal"
      centered
      hide-backdrop
      contentClass="shadow"
      :static="true"
      content-class="shadow"
      ref="checklist_modal"
      size="sm"
    >
      <template #modal-header="{}">
        <!-- Emulate built in modal header close button action -->
        <h5><b>Publish Tour</b></h5>
      </template>
      <template #default="{}">
        <div v-for="(value, name) in publishTourInfo" :key="name">
          <span>{{ name }}</span
          ><span class="float-end"
            >{{ value }}
            <b-icon icon="chevron-right" class="text-muted"></b-icon>
          </span>
          <hr v-if="name != 'Gamification'" />
        </div>
      </template>
      <template #modal-footer="{ hide }">
        <b-button
          pill
          variant="info"
          v-b-modal.checklist_modal
          class="m-auto w-75 mb-3 text-white"
          @click="publishTour"
          >Publish</b-button
        >

        <br />
        <b-button
          pill
          variant="outline-info"
          class="d-block m-auto w-75"
          @click="hide()"
          >Cancel</b-button
        >
      </template>
    </b-modal>
    <b-modal
      id="publish-tour-modal"
      hide-footer
      hide-header
      centered
      hide-backdrop
      contentClass="shadow"
      :static="true"
      content-class="shadow"
      ref="publish-tour-modal"
      size="sm"
    >
      <template #default="{ hide }">
        <span class="d-block mb-4 text-muted">
          <b-icon
            icon="x"
            class="float-end cross-icon"
            scale="2"
            @click="hide"
          ></b-icon
        ></span>
        <img src="@/assets/success_badge.png" class="d-block m-auto" />
        <div class="mt-4 bottom-text">
          <div class="text-info"><b>Hurray!</b></div>
          <div class="text-muted">Your tour is live</div>
          <div class="text-muted">Share it to become noticed.</div>
          <div>
            <b-icon icon="facebook" class="me-4 mt-4"></b-icon>
            <b-icon icon="twitter" class="me-4"></b-icon>
            <b-icon icon="envelope-fill" class="me-4"></b-icon>

            <b-icon icon="link45deg"></b-icon>
          </div>
        </div>
        <b-button pill variant="outline-info" class="d-block mt-4 m-auto w-75"
          >View my tour</b-button
        >
      </template>
    </b-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkListNames: [
        "Name",
        "Description",
        "Cover Photo",
        "At least 1 point",
      ],
      notCheckedListNames: ["Narration", "Category"],
      publishTourInfo: {
        Category: "Walking Tour",
        "Tour Type": "Quest",
        Privacy: "Code Protected",
        Schedule: "M W S",
        Gamification: "None",
      },
    };
  },
  methods: {
    publishTour: function () {
      this.$bvModal.hide("checklist-modal");
      this.$bvModal.show("publish-tour-modal");
    },
  },
};
</script>
<style scoped>
.cross-icon {
  cursor: pointer;
}
.bottom-text {
  text-align: center;
}
.checklist {
  margin-top: 5rem !important;
}
</style>
