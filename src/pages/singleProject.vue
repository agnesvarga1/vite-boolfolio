<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      project: [],
      imgUrl: "http://127.0.0.1:8000/storage/",
    };
  },
  methods: {
    getPro() {
      axios
        .get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`)
        .then((res) => {
          this.project = res.data.project;
          console.log(this.project);
        });
    },
  },
  mounted() {
    //console.log(this.$route.params.slug);
    this.getPro();
  },
};
</script>

<template>
  <div class="container d-flex flex-column align-items-center">
    <h2 class="text-capitalize">{{ project?.project_name }}</h2>
    <img class="w-50" :src="`${imgUrl}${project.image}`" alt="" />

    <div class="d-flex p-3 align-items-center justify-content-between w-50">
      <h5 class="mb-0">{{ project.type?.name }}</h5>
      <div>
           <span v-for="tech in project?.technologies" key:="tech.id" class="text-capitalize badge text-bg-primary mx-1">{{ tech.name }}</span>
        </div>
    </div>
    <p class="w-50 fs-4 mt-2">{{ project?.description }}</p>
  </div>
</template>

<style lang="scss"></style>
