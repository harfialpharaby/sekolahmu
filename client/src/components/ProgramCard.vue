<template>
  <div>
    <b-row>
      <b-col>
        <img
          :src="appendix.avatar"
          @click="$router.push(`/detail/${appendix.name}`)"
          cover
          alt="avatar"
          height="200px"
          class="zoom mb-3"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col class="text-left ml-3">
        <p class="font-weight-bold">
          {{ appendix.name }}
        </p>
        <div>
          <b-icon-tag></b-icon-tag>
          <span class="price-tag">
            {{
              appendix.price === "0.00"
                ? "GRATIS"
                : `Rp ${appendix.price.replace(
                    /(\d)(?=(\d\d\d)+(?!\d))/g,
                    "$1."
                  )}`
            }}
          </span>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BIconTag } from "bootstrap-vue";

export default {
  props: ["appendix"],
  components: {
    BIconTag
  }
};
</script>

<style scoped>
.zoom {
  background-color: green;
  transition: transform 0.4s; /* Animation */
  margin: 0 auto;
}

.zoom:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  cursor: pointer;
}

.price-tag {
  font-weight: bold;
  color: #3598db;
}
</style>
