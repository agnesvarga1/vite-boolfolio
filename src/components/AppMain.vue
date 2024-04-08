<script>
import axios from "axios";
import AppHeader from "./AppHeader.vue"
export default {
  name: "AppMain",

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
      
     
      axios.get('http://127.0.0.1:8000/api/projects',
        {
         params: {
              page: num
             }
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
  <div class="container ">
  <div class="container d-flex flex-wrap justify-content-center">
    <div
      v-for="(item, i) in projectsArr"
      :key="item.id"
      class="card m-2"
      style="width: 18rem"
    >

    <img v-show ="item.image" :src="imgUrl+item.image" class="card-img-top" alt="...">
      <div class="card-body">
        <h3 class="text-capitalize">{{ item.project_name }}</h3>
        <h5 v-if="item.type !== null">{{  item.type.name}}</h5>
        <div v-if="item.technologies">
            <span v-for="tech in item.technologies" key:="tech.id" class="text-capitalize badge text-bg-primary mx-1">{{ tech.name }}</span>
        </div>
        <p class="card-text">
          {{ item.description }}
        </p>
      </div>
    </div>
  
  </div>
  <div class="d-flex justify-content-center mt-3"> 
    <nav aria-label="Page navigation example ">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <button class="page-link" @click="getProjects(currentPage - 1)">
          Previous
        </button>
      </li>

      <li class="page-item" v-for="(element, index) in lastPage" :key="index">
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
