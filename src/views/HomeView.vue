<template>
  <!--Card Start-->
  <div class="row p-4" data-bs-theme="dark">
    <div class="col-sm-3 mb-3 mb-sm-4">
      <div class="card" style="width: 18rem">
        <img
          src="../assets/blog1.png"
          class="card-img-top rounded float-start"
          alt="../assets/blog1.png"
        />
        <div class="card-body">
          <h5 class="card-title">
            <router-link to="/blog1">Building this website</router-link>
          </h5>
          <p class="card-text">Last Modified: 1/3/2024</p>
          <p class="card-text">
            This website is documenting my current progress in constructing and
            maintaining this website.
          </p>
        </div>
      </div>
    </div>
    <!--Card end-->

    <div class="col-sm-3 mb-3 mb-sm-4">
      <div class="card" style="width: 18rem">
        <img
          src="../assets/blog1.png"
          class="card-img-top rounded float-start"
          alt="../assets/blog1.png"
        />
        <div class="card-body">
          <h5 class="card-title">
            <router-link to="/blog2"
              >Procedural Grid Map Generation: The Path Way</router-link
            >
          </h5>
          <p class="card-text">Last Modified: 1/8/2024</p>
          <p class="card-text">
            This goes through how using pathfinding algorithms like the A* can
            generate maps and guarantee the paths are possible.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
});
</script>
