<template>
  <v-app :dark="true">
    <v-flex v-if="loggedIn" row class="row-flex">  
      <v-navigation-drawer permanent fixed expand-on-hover>
        <v-list>
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/about">
            <v-list-item-icon>
              <v-icon>mdi-help</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title>About</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-flex>
        <router-view class="content"/>
      </v-flex>
    </v-flex>

    <v-flex v-else row wrap align-center class="row-flex">
      <v-form
        ref="form"
        v-model="valid"
      >
        <v-text-field
          v-model="login"
          :rules="rules"
          label="Login"
          type="text"
        ></v-text-field>

        <v-text-field
          v-model="password"
          :rules="rules"
          label="Senha"
          type="password"
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >Validate</v-btn>
      </v-form>
    </v-flex>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  components: {

  },
  data: () => ({
    valid: true,
    loggedIn: false,
    login: null,
    password: null,
    rules: [
      v => !!v || 'Field is required',
    ]
  }),
  methods: {
    validate(){
      if (this.$refs.form.validate()) {
        console.log(this.snackbar)
        this.loggedIn = true
      }
      return;
    },
  }
}
</script>

<style>
html, body {
  height: 100%;
  width: 100%;
}
body {
  margin: 0; 
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.row-flex {
  margin: 0px !important;
}
.v-form{
  width: 25%;
  margin: 10px auto;
  padding: 20px;
  background-color: rgb(80, 80, 80);
}
.content {
  margin-left: 4%
}
</style>
