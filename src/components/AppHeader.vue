<script>
import { RouterLink } from "vue-router";
export default {
  name: "AppHeader",
};
</script>
<template>
  <header class="">
    <nav class="navbar navbar-expand-lg bg-body-tertiary py-2">
      <div class="container align-items-center">
        <h1 class="navbar-brand mb-0" href="#">Boolfolio</h1>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link :to="{ name: 'home' }" class="nav-link">
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'projects' }" class="nav-link">
                Projects
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'contact-us' }" class="nav-link">
                Contact Us
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<style scoped></style>
