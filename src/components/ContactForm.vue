<script>
import axios from "axios";

export default {
  name: "ContactForm",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      success: false,
      errors: {},
    };
  },
  methods: {
    sendForm() {
      const data = {
        name: this.name,
        email: this.email,
        message: this.message,
      };
      this.errors = {}; //x svoutare errors obj se prima aveva errs
      axios.post("http://127.0.0.1:8000/api/contacts", data).then((res) => {
        this.success = res.data.success;
        if (!this.success) {
          this.errors = res.data.errors; //err handling
        } else {
          //reset "" data previous
          this.name = "";
          this.email = "";
          this.message = "";
        }
      });
    },
  },
  mounted() {},
};
</script>

<template>
  <div>
    <div>
      <h5>Contact Form</h5>
      <div class="alert alert-success" v-if="success === true" role="alert">
        Success!! Your message has been sent correctly.
      </div>
    </div>
    <div>
      <form @submit.prevent="sendForm()">
        <input
          type="text"
          name="name"
          id="name"
          class="form-control mb-3"
          :class="{ 'is-invalid': errors.name }"
          placeholder="your name here"
          v-model="name"
        />
        <p v-for="(err, i) in errors?.name" :key="`message-errors-${i}`">
          {{ err }}
        </p>
        <input
          type="email"
          name="email"
          id="email"
          class="form-control mb-3"
          :class="{ 'is-invalid': errors.email }"
          placeholder="yourEmail@example.com"
          v-model="email"
        />
        <p v-for="(err, i) in errors?.email" :key="`message-errors-${i}`">
          {{ err }}
        </p>
        <textarea
          class="form-control mb-3"
          name="message"
          id=""
          cols="30"
          rows="10"
          :class="{ 'is-invalid': errors.message }"
          v-model="message"
        ></textarea>
        <p v-for="(err, i) in errors?.message" :key="`message-errors-${i}`">
          {{ err }}
        </p>
        <button class="btn btn-primary" type="submit">Send</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss"></style>
