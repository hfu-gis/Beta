<template>
  <div class="body-1">
    <!-- HTML-Code aus dem Body-Tag hier einfügen -->


    <div id="openModal" class="modalDialog">
      <div>

        <h2>Registration</h2>

        <v-subheader>Please choose your User Name</v-subheader>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
                  label="Solo"
                  placeholder="Username"
                  solo
          ></v-text-field>
        </v-col>
        <v-subheader>Please enter your E-Mail Adress</v-subheader>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
                  label="Solo"
                  placeholder="E-Mail"
                  solo
          ></v-text-field>
        </v-col>

        <v-subheader>Please Enter Password</v-subheader>

        <v-col cols="12" sm="6" md="3">
          <v-text-field
                  label="Solo"
                  placeholder="Password"
                  solo
          ></v-text-field>
        </v-col>
        <v-subheader>Please verify Password</v-subheader>

        <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
                  label="Solo"
                  placeholder="Password"
                  solo
          ></v-text-field>

        </v-col>



        <v-btn line-position="center"><v-icon class="ma-1"color="indigo"> mdi-eye</v-icon></v-btn>
        </v-row>

        <br>
        <v-btn outlined color="indigo">Submit</v-btn>
        <br>
        <a href="http:www.BIT of Advice/login">I already have an Account</a>

      </div>
    </div>


  </div>
</template>

<script>
export default {
  // gebt jeder Page einen eigenen Namen
  name: 'registration',

  // benötigte Komponenten
  components: {},

  // entspricht den HTML-Attributen
  props: {},

  // Variablen-Speicher
  data() {
    return {}
  },

  // reagieren auf prop-Veränderung
  watch: {},

  // interne Methoden
  methods: [],

  // Initialisierung
  created() {}
}
</script>

<style scoped>
/* CSS für diese Seite hier einfügen */
</style>
