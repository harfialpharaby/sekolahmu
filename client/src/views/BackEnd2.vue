<template>
  <b-container fluid>
    <b-row>
      <b-col cols="5" style="height:43.65vw;background-color:#19459B"></b-col>
      <b-col cols="7" class="d-flex align-items-end justify-content-end mb-5">
        <router-link to="/" tag="div" class="w-50 font-weight-bold zoom-next">
          BACK HOME
        </router-link>
        <div class="form">
          <div v-if="userLogin">
            <p class="font-weight-light">Yay, here is your token</p>
            <hr class="bg-danger" />
            <p class="text-break">
              {{ userLogin }}
            </p>
            <hr class="bg-danger" />
            <p class="font-weight-light">
              How does it work?
              <span>
                See
                <a
                  href="https://github.com/harfialpharaby/sekolahmu/tree/master/server"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  docs
                </a>
              </span>
              <span class="text-muted">OR</span>
              <span>
                try on
                <a
                  href="https://documenter.getpostman.com/view/3871398/SzRxV9oR?version=latest"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Postman
                </a></span
              >
            </p>
            <p class="text-muted font-italic mt-3" style="font-size:12px">
              This is the end of the challenges, thank you for giving me this
              opportunity and hope you enjoy.
            </p>
            <b-button squared variant="danger" class="ml-2" @click="logout()">
              Logout
            </b-button>
          </div>
          <b-form @submit="onSubmit" class="text-left" v-else>
            <b-form-group
              id="input-name"
              label="NAME"
              label-for="name"
              v-if="!isShowLogin"
            >
              <b-form-input
                id="name"
                v-model="form.fullname"
                type="text"
                required
                placeholder="William Wills"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-email" label="EMAIL" label-for="email">
              <b-form-input
                id="email"
                v-model="form.email"
                type="email"
                required
                placeholder="william.wills@mail.com"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-password"
              label="PASSWORD"
              label-for="password"
            >
              <b-form-input
                id="password"
                v-model="form.password"
                type="password"
                required
                placeholder="Super secret password ever"
              ></b-form-input>
            </b-form-group>

            <b-button squared type="submit" variant="primary">
              {{ isShowLogin ? "Login" : "Register" }}
            </b-button>
            <b-button
              squared
              variant="dark"
              class="ml-2"
              @click="changeCurrentShow()"
            >
              {{ isShowLogin ? "Register" : "Back" }}
            </b-button>
          </b-form>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        fullname: "",
        email: "",
        password: ""
      },
      BASE_URL: "http://localhost:3000/users",
      isShowLogin: true
    };
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      const action = this.isShowLogin ? "login" : "register";
      this.$store.dispatch("LoginRegister", { action, form: this.form });
      this.nullifyForm();
    },
    logout() {
      localStorage.clear();
      this.$store.commit("SET_TOKEN", null);
    },
    nullifyForm() {
      this.form = {
        name: "",
        email: "",
        password: ""
      };
    },
    changeCurrentShow() {
      this.isShowLogin = !this.isShowLogin;
    }
  },
  computed: {
    userLogin() {
      return this.$store.state.token;
    }
  }
};
</script>

<style scoped>
.form {
  background-color: white;
  position: absolute;
  left: -10vw;
  top: 10vw;
  padding: 50px;
  width: 40vw;
  -webkit-box-shadow: 2px 2px 5px -1px rgba(0, 0, 0, 0.65);
  -moz-box-shadow: 2px 2px 5px -1px rgba(0, 0, 0, 0.65);
  box-shadow: 2px 2px 5px -1px rgba(0, 0, 0, 0.65);
}
</style>
