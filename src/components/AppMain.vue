<script>
import axios from "axios";
export default {
  name: "AppMain",
  data() {
    return {
      projectsArr: [],
    };
  },
  methods: {
    getProjects() {
      axios.get("http://127.0.0.1:8000/api/projects").then((res) => {
        //console.log(res.data.projects);

        this.projectsArr = res.data.projects;
      });
    },
  },
  mounted() {
    this.getProjects();
  },
};
</script>
<template>
  <h2 class="text-center my-2">Projects</h2>
  <div class="container d-flex flex-wrap">
    <div
      v-for="(item, i) in projectsArr"
      :key="item.id"
      class="card m-2"
      style="width: 18rem"
    >
      <!-- <img :src="" class="card-img-top" alt="..." /> -->
      <div class="card-body">
        <h3 class="text-capitalize">{{ item.project_name }}</h3>
        <p class="card-text">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
