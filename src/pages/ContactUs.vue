<script>
import ContactForm from "../components/ContactForm.vue";

export default {
  name: "ContactUs",
  components: {
    ContactForm,
  },
};
</script>

<template>
  <div class="container py-3">
    <h3>Contact Us</h3>
    <div class="row">
      <ContactForm></ContactForm>
    </div>
  </div>
</template>

<style lang="scss"></style>
