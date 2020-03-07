<template>
  <b-container>
    <b-row>
      <b-col cols="7" class="text-right m-auto">
        <div class="hello">Hello</div>
        <div class="creativity">
          This is me being creative
        </div>
      </b-col>
      <b-col cols="5">
        <img src="../assets/IMG_5580.png" alt="harfi-photo" class="mb-5" />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button
          squared
          variant="link"
          class="text-capitalize font-weight-bold p-3 text-decoration-none"
          @click="$router.push('/frontend1')"
        >
          Start the journey <b-icon-chevron-right />
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { BIconChevronRight } from "bootstrap-vue";

export default {
  components: {
    BIconChevronRight
  }
};
</script>

<style scoped>
.hello {
  font-size: 100px;
  font-weight: bold;
  padding: 0px;
  letter-spacing: 5px;
}

img {
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
}

.creativity {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  letter-spacing: 4px;
}

button:hover {
  transform: scale(1.5);
  -webkit-transform: scale(1.5);
  transition: transform 0.4s;
}
</style>
