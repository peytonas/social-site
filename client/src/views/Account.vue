<template>
  <div class="Account">
    <div class="pos-f-t">
      <div class="row">
        <nav class="navbar col-12 navbar-dark bg-primary">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse text-secondary" id="navbarToggleExternalContent">
            <router-link class="nav-links" to="/">Home</router-link>|
            <router-link class="nav-links" to="/about">About</router-link>
            <div>
              <h3 @click="Logout()" aria-placeholder="Logout-Button" class="logout">Logout</h3>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router/index.js";
import NotificationService from "../NotificationService.js";
export default {
  name: "Account",
  data() {
    return {};
  },
  computed: {},
  methods: {
    async Logout() {
      if (
        await NotificationService.confirmAction(
          "Are you sure you want to log out?"
        )
      ) {
        this.$store.dispatch("logout");
      }
    },
    goDashboard() {
      this.$router.push({ name: "Home" });
    }
  },
  components: {}
};
</script>


<style scoped>
/* .navbar-toggler {
} */
.nav-links {
  color: #c4cdd3;
}
.logout {
  color: red;
  cursor: pointer;
  margin-bottom: 5px;
}
button:focus {
  outline: 0;
}
.logout:hover {
  color: white;
  text-decoration: solid underline;
}
.dashboard-link {
  cursor: pointer;
}
.dashboard-link:hover {
  color: white;
  text-decoration: solid underline;
}
</style>