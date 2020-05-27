<template>
  <div id="app" class="container-fluid bg-dark">
    <Account />
    <router-view />
  </div>
</template>
<script>
import Account from "./views/Account";
export default {
  components: {
    Account
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0447a0;
  min-height: 100vh;
}

::-webkit-scrollbar {
  display: none;
}
</style>
