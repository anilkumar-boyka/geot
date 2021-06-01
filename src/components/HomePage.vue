<template>
  <div>
    <app-navbar-layout />

    <div>
      <b-card header-tag="header" footer-tag="footer" class="border-0">
        <div class="row">
          <div class="col-4">
            <sidebar />
          </div>
          <div class="col-6">
            <b-card class="border-0">
              <b-tabs content-class="mt-3" pills>
                <b-tab v-for="title in tabsTitle" :key="title" :title="title">
                  <!--  <component :is="component_name"></component> -->
                </b-tab>
              </b-tabs>
              <div>
                <img
                  class="w-100 mb-3"
                  height="250px"
                  style="border-radius: 25px"
                  src="https://www.planetware.com/wpimages/2019/08/france-paris-montmartre-top-attractions-place-du-tertre.jpg"
                />
              </div>
              <div>
                <h3><b>A Walking trail of Montmarte,Paris</b></h3>
                <hr />
                <p>
                  Dominated b the grandeur of the ever-visible Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum
                </p>
                <hr />
                <b>Tags</b>
                <div class="mt-2 mb-5">
                  <b-button
                    pill
                    variant="light"
                    class="m-auto mb-3 me-3 text-secondary border"
                  >
                    <b-icon icon="plus-circle-fill" class="float-end"></b-icon>
                  </b-button>
                  <b-button
                    pill
                    variant="light"
                    class="m-auto w-25 mb-3 me-3 text-secondary border"
                    >Montmarte
                    <b-icon icon="x-circle-fill" class="float-end"></b-icon>
                  </b-button>
                  <b-button
                    pill
                    variant="light"
                    class="m-auto w-25 mb-3 text-secondary border"
                    >Paris
                    <b-icon icon="x-circle-fill" class="float-end"></b-icon>
                  </b-button>
                </div>
                <div>
                  <b>Categories</b>
                  <b-card></b-card>
                  <b-card></b-card>
                  <b-card></b-card>
                  <b-card></b-card>
                  <b-card></b-card>
                  <b-card></b-card>
                </div>
              </div>
            </b-card>
          </div>
          <div class="col-2">
            <checklist />
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import AppNavbarLayout from "./app-navbar/AppNavbarLayout.vue";
import Sidebar from "./Sidebar.vue";
import Checklist from "./CheckList.vue";
export default {
  components: {
    AppNavbarLayout,
    Sidebar,
    Checklist,
  },
  data() {
    return {
      tabsTitle: ["English", "French", "Spanish", "Deutch"],
    };
  },
};
</script>
