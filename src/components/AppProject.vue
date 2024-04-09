<script>
import {RouterLink} from "vue-router";
export default {
  name: "AppProject",

  props: [
    "project_name",
    "description",
    "slug",
    "type",
    "technologies",
    "image",
  ],
  components: {},
  data() {
    return {
        imgUrl: "http://127.0.0.1:8000/storage/",
    };
  },
  methods: {

  },
  mounted() {

  },
};
</script>

<template>
    <router-link :to="{name:'singleProjectPage',params:{slug: slug}}">
        <div
     
     class="card m-2"
     style="width: 18rem"
   >

   <img :src="`${imgUrl}${image}`" class="card-img-top" alt="...">
     <div class="card-body">
       <h3 class="text-capitalize">{{ project_name }}</h3>
       <h5 >{{type.name}}</h5>
       <div >
           <span v-for="tech in technologies" key:="tech.id" class="text-capitalize badge text-bg-primary mx-1">{{ tech.name }}</span>
       </div>
       <p class="card-text">
         {{description }}
       </p>
     </div>
   </div>
    </router-link>



</template>

<style lang="scss">
.card:hover{
      opacity: 0.7; 
}
</style>
