<script>
import axios from "axios";
import AppProject from "../components/AppProject.vue";

export default {
  name: "AppMain",
  components: {
    AppProject,
  },
  data() {
    return {
      projectsArr: [],
      currentPage: "",
      lastPage: "",
      imgUrl: "http://127.0.0.1:8000/storage/",
    };
  },
  methods: {
    getProjects(num) {
      axios
        .get("http://127.0.0.1:8000/api/projects", {
          params: {
            page: num,
          },
        })
        .then((res) => {
          this.projectsArr = res.data.projects.data;
          this.currentPage = res.data.projects.current_page;
          this.lastPage = res.data.projects.last_page;
        });
    },
  },
  mounted() {
    this.getProjects(1);
  },
};
</script>
<template>
  <h2 class="text-center my-2">Projects</h2>
  <div class="container">
    <div class="container d-flex flex-wrap justify-content-center">
      <AppProject
        v-for="(item, i) in projectsArr"
        :key="item.id"
        :project_name="item.project_name"
        :description="item.description"
        :slug="item.slug"
        :type="item.type ? item.type.name : ''"
        :technologies="item.technologies ? item.technologies : ''"
        :image="item.image"
      />
    </div>
    <div class="d-flex justify-content-center mt-3">
      <nav aria-label="Page navigation example ">
        <ul class="pagination">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <button class="page-link" @click="getProjects(currentPage - 1)">
              Previous
            </button>
          </li>

          <li
            class="page-item"
            v-for="(element, index) in lastPage"
            :key="index"
          >
            <button class="page-link" @click="getProjects(element)">
              {{ element }}
            </button>
          </li>

          <li class="page-item" :class="{ disabled: currentPage === lastPage }">
            <button class="page-link" @click="getProjects(currentPage + 1)">
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
