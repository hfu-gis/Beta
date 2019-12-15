<template>

    <v-row justify="center">
        <v-dialog v-model="registration" persistent max-width="600px" @keydown.esc="registration = false" @keydown.enter="registration = false" >
            <template v-slot:activator="{ on }" >
                <v-btn solo outlined flat  v-on="on">Register</v-btn>
            </template>
            <v-card>
                <v-form ref="form" v-model="valid" @submit.prevent="onSignup">
                <v-parallax src="../../img/Background/ocean.jpg" class="oceanbackground" width="width" height="100%">
                <v-card-title>
                    <v-row justify="center">
                    <span class="headline" >User Profile</span>
                    </v-row>
                </v-card-title>
                <v-card-text>

                    <v-container>
                        <v-row>

                            <v-col cols="12" >
                                <v-text-field solo flat filled  name="username" label="User Name*" id="username" v-model="username" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field solo flat filled name="email" v-model="email" type="email" label="E-mail*" id="email" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field   filled solo flat name="password" v-model="password" label="Password*" type="password" id="password" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field   filled solo flat name="confirmpassword" v-model="confirmpassword" type="password" label="Confirm Password*"  id="confirmpassword" :rules="[comparepassword]"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text type="submit" @click="registration = false">Close</v-btn>
                    <v-btn text @click="validate">Save</v-btn>
                </v-card-actions>
                </v-parallax>
                </v-form>
            </v-card>
        </v-dialog>
    </v-row>

</template>

<script>
    import db from '../db'


export default {

    data: () => ({
        registration: false,
        valid: true,
        success: false,
        username: '',
        email: '',
        password: '',
        confirmpassword: '',
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
    computed:{
    comparepassword(){

        return this.password !== this.confirmpassword ? 'passwords do not match' : ''
    }


    },

  // interne Methoden
  methods: {
        onSignup(){

            console.log({email: this.email,password: this.password,confirmpassword: this.confirmpassword})
        }


  },
    created() {
        let docRef = db.collection('Users')
        docRef.get().then(docs => {
            docs.forEach(doc => this.username.push(doc.data()))
        })




    }

  // Initialisierung


}
</script>

<style scoped>
/* CSS für diese Seite hier einfügen */
</style>
