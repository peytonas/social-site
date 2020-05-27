<template>
  <div class="login">
    <header class="row">
      <div class="col-12 text-center">
        <h1 class="main-title">Social Site</h1>
      </div>
    </header>

    <main class="row">
      <div class="col-10 col-lg-6 m-auto login-form">
        <div class="card p-2 bg-primary">
          <form v-if="loginForm" class="form-row m-2" @submit.prevent="loginUser">
            <input type="email" class="m-3 form-control" v-model="creds.email" placeholder="email" />
            <input
              type="password"
              class="m-3 form-control"
              v-model="creds.password"
              placeholder="password"
            />
            <button class="btn btn-warning m-2" type="submit">Login</button>
          </form>
          <form v-else @submit.prevent="register" class="m-2 form-row">
            <input type="text" class="m-3 form-control" v-model="newUser.name" placeholder="name" />
            <input
              type="email"
              class="m-3 form-control"
              v-model="newUser.email"
              placeholder="email"
            />
            <input
              type="password"
              class="m-3 form-control"
              v-model="newUser.password"
              placeholder="password"
            />
            <button class="btn btn-warning" type="submit">Create Account</button>
          </form>
          <div class="action" @click="loginForm = !loginForm">
            <p v-if="loginForm">Create an account</p>
            <p v-else>Already have an account? Click here to Login</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "Login",
  mounted() {},
  data() {
    return {
      loginForm: true,
      creds: {
        email: "",
        password: ""
      },
      newUser: {
        email: "",
        password: "",
        name: ""
      }
    };
  },
  methods: {
    register() {
      this.$store.dispatch("register", this.newUser);
    },
    loginUser() {
      this.$store.dispatch("login", this.creds);
    }
  },
  computed: {}
};
</script>

<style>
.action {
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 10px;
  color: white;
}
.action:hover {
  color: blue;
  text-decoration: underline;
}
.login {
  min-height: 100vh;
  background-size: cover;
  color: white;
}
.bg {
  background-color: rgba(#4f4f4f);
  width: fit-content;
  margin: auto;
  padding: 10px;
}
input {
  box-shadow: inset 0px 0px 1px 1px white;
}
.main-title {
  font-family: "Berlin Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 100px;
  line-height: 113px;
}
header {
  min-height: 35vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.login-form {
  display: flex;
  align-items: center;
}
main {
  min-height: 40vh;
  display: flex;
  justify-content: center;
}
.joinPoll {
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
}
footer {
  min-height: 25vh;
}
</style>