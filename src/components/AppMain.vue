<script>
import axios from "axios";
export default {
  name: "AppMain",
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    getProjects() {
      axios.get("http://127.0.0.1:8000/api/projects").then((res) => {
        console.log(res.data.projects);
        this.projects = res.data.projects;
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
</template>
<style lang="scss" scoped></style>
