<template>
  <div id="nav">
    <b-container fluid>
      <b-row>
        <b-col class="home-link">
          <h4>
            <router-link to="/">
              <span class="font-weight-light">AINUR</span>
              <span class="font-weight-bold"> HARFI</span>
              <p class="font-weight-light" style="letter-spacing:6px;">
                ALFARABY
              </p>
            </router-link>
          </h4>
        </b-col>
        <b-col class="menu-links">
          <router-link class="m-3 font-weight-light" to="/frontend1">
            CODE BLOCK
          </router-link>
          <router-link class="m-3 font-weight-light" to="/frontend2">
            PROGRAM
          </router-link>
          <router-link class="m-3 font-weight-light" to="/backend1">
            BIG-O NOTATION
          </router-link>
          <router-link class="m-3 font-weight-light" to="/backend2">
            LOGIN
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
.home-link {
  letter-spacing: 1px;
}
</style>
