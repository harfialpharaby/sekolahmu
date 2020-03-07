<template>
  <b-container fluid>
    <b-row
      class="text-light text-left justify-content-center pt-5"
      style="background-color:#3598DB"
    >
      <b-col cols="5">
        <h1>{{ $route.params.title }}</h1>
        <p v-if="selectedAppendix">
          <b-icon-tag-fill></b-icon-tag-fill>
          {{ selectedAppendix.category_name }}
        </p>
      </b-col>
      <b-col cols="3">
        <img
          class="detail-img"
          v-if="selectedAppendix"
          :src="selectedAppendix.avatar"
          :alt="$route.params.title"
          width="375px"
        />
      </b-col>
    </b-row>

    <b-row class="text-left justify-content-center">
      <b-col cols="5">
        <b-row>
          <b-col
            cols="2"
            style="background-color:#3598DB"
            class="text-light font-weight-bold p-3"
          >
            Deskripsi
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p
              class="text-dark mt-5"
              style="font-size:15px;letter-spacing:1px"
              v-if="selectedAppendix"
            >
              {{ selectedAppendix.abstract }}
            </p>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="3">
        <div class="detail-price" v-if="selectedAppendix">
          {{
            selectedAppendix.price === "0.00"
              ? "GRATIS"
              : `Rp ${selectedAppendix.price.replace(
                  /(\d)(?=(\d\d\d)+(?!\d))/g,
                  "$1."
                )}`
          }}
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="d-flex justify-content-around mt-5">
        <div
          @click="$router.go(-1)"
          tag="div"
          class="w-50 font-weight-bold zoom-next"
        >
          BACK
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { BIconTagFill } from "bootstrap-vue";

export default {
  components: {
    BIconTagFill
  },
  data() {
    return {
      selectedAppendix: null
    };
  },
  methods: {
    async fetchAppendix() {
      await this.$store.dispatch("fetchAppendix");
      this.getSelected();
    },
    async getSelected() {
      this.selectedAppendix = await this.$store.state.appendix.data.filter(
        item => item.name === this.$route.params.title
      )[0];
    }
  },
  created() {
    if (!this.$store.appendix) {
      this.fetchAppendix();
    } else {
      this.getSelected();
    }
  }
};
</script>

<style scoped>
.detail-img {
  border: 1px solid white;
  border-bottom-width: 0px;
}

.detail-price {
  border: 1px solid black;
  border-top-width: 0px;
  width: 375px;
  padding: 30px;
  font-size: 35px;
  font-weight: bold;
  background-color: white;
  color: #422b6d;
}
</style>
