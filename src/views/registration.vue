<template>
    <v-row justify="center">
        <v-dialog v-model="registration" persistent max-width="600px" @keydown.esc="registration = false" @keydown.enter="registration = false" >
            <template v-slot:activator="{ on }">
                <v-btn class="grey darken-3 no white--text" dark v-on="on">Register</v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="headline">User Profile</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field solo label="First Name*" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field solo label="Last Name*" required
                                ></v-text-field>

                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field solo label="User Name*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field solo label="Email*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field solo label="Password*" type="password" required></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="registration = false">Close</v-btn>
                    <v-btn color="blue darken-1" text @click="registration = false">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        registration: false,
    }),

    // gebt jeder Page einen eigenen Namen
  name: 'registration',

  // benötigte Komponenten
  components: {},

  // entspricht den HTML-Attributen
  props: {},

  // Variablen-Speicher


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
