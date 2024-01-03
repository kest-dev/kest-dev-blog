<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
    crossorigin="anonymous"
  />
  <!--Card Start-->
  <div class="row p-4">
    <div class="col-sm-3 mb-3 mb-sm-4">
      <div class="card" style="width: 18rem">
        <img
          src="../assets/blog1.png"
          class="card-img-top rounded float-start"
          alt="../assets/blog1.png"
        />
        <div class="card-body">
          <h5 class="card-title">Building this website</h5>
          <p class="card-text">
            This website is documenting my current progress in constructing and
            maintaining this website.
          </p>
          <router-link to="/about">Blog</router-link>
        </div>
      </div>
    </div>
    <!--Card end-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
});
</script>
