<template>
  <b-container fluid v-if="appendix">
    <b-container>
      <b-row>
        <b-col>
          <p class="question text-left">
            Buat sebuah aplikasi frontend dengan menggunakan framework
            javascript (vue.js/react.js/angular) dengan contoh desain pada
            landing page
            <a
              href="https://www.sekolah.mu"
              target="_blank"
              rel="noopener noreferrer"
              >https://www.sekolah.mu</a
            >
            dan spesifikasi data list program (json format pada bagian appendix
            paling bawah) seperti di bawah ini! (desain / layout tidak harus
            sama persis, pengembangan ide dan kreatifitas sangat diapresiasi) -
            Fokus lebih kepada menampilkan list-list program sesuai data yang
            terdapat pada json - Informasi lain yang dapat membantu desain
            kalian dapat mengambil dari laman website di atas
          </p>
        </b-col>
        <b-col cols="2" class="d-flex align-items-center">
          <router-link
            to="/backend1"
            tag="div"
            class="w-50 font-weight-bold zoom-next"
          >
            NEXT CHALLENGE
          </router-link>
        </b-col>
      </b-row>
      <hr class="bg-success" />
    </b-container>
    <b-row>
      <b-col cols="2" style="background-color:#19459B"></b-col>
      <b-col cols="8">
        <b-tabs
          class="mt-5"
          active-nav-item-class="text-white rounded-pill bg-primary font-weight-bold"
          content-class="mt-4"
        >
          <b-tab lazy v-for="(cat, i) in categories" :key="i" :title="cat">
            <template v-slot:title>
              <div class="cat-name rounded-circle">
                {{ cat }}
              </div>
            </template>
            <b-container fluid>
              <b-row class="mt-3">
                <b-col
                  v-for="(appendix, i) in appendix.data.filter(
                    item => item.category_name === cat
                  )"
                  :key="i"
                >
                  <ProgramCard :appendix="appendix"></ProgramCard>
                </b-col>
              </b-row>
            </b-container>
          </b-tab>
        </b-tabs>
      </b-col>
      <!-- <b-col cols="2" class="d-flex align-items-center">
        <router-link
          to="/backend1"
          tag="div"
          class="w-50 font-weight-bold zoom-next"
        >
          NEXT CHALLENGE
        </router-link>
      </b-col> -->
    </b-row>
  </b-container>
</template>

<script>
import ProgramCard from "@/components/ProgramCard.vue";

export default {
  components: {
    ProgramCard
  },
  created() {
    this.$store.dispatch("fetchAppendix");
  },
  computed: {
    appendix() {
      return this.$store.state.appendix;
    },
    categories() {
      return this.$store.state.appendix.data.reduce((acc, item) => {
        if (!acc.includes(item.category_name)) {
          acc.push(item.category_name);
        }
        return acc;
      }, []);
    }
  }
};
</script>

<style scoped>
.cat-name {
  text-transform: lowercase;
}

.cat-name::first-letter {
  text-transform: capitalize;
}
</style>
