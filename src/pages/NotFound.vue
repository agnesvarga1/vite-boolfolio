<script>
export default {
  components: {},
};
</script>

<template>
  <div
    id="not-found"
    class="w-100 text-light d-flex flex-column justify-content-center align-items-center"
  >
    <h1>OOPS!</h1>
    <p class="mb-3">Something went wrong...</p>
    <h2>Page Not Found</h2>
    <h3>Error: 404</h3>
  </div>
</template>

<style lang="scss">
#not-found {
  background-color: rgb(26, 26, 53);
  height: 94.7vh;
  h1 {
    font-size: 5rem;
    font-weight: 700;
  }
  h2,
  h3 {
    font-size: 3rem;
  }
  p {
    font-size: 1.5rem;
  }
}
</style>
