<template>

    <v-row justify="center">
        <v-dialog v-model="registration" persistent max-width="600px" @keydown.esc="registration = false"
                  @keydown.enter="registration = false">
            <template v-slot:activator="{ on }">
                <v-btn solo depressed text v-on="on" color="#D9A566">Register</v-btn>
            </template>
            <v-card>
                <v-form ref="form" v-model="valid" @submit.prevent="onSignup" style="background: #162a3b">
                    <br>
                    <v-card-title>
                        <v-row justify="center">
                            <span class="headline"
                                  style="color: #D9A566;">You need a bit of advice? Just register!</span>
                        </v-row>
                    </v-card-title>
                    <v-divider/>
                    <v-card-text style="background: #ffeac4;">
                        <v-container>
                            <v-row>

                                <v-col cols="12">
                                    <v-text-field solo flat filled name="username" label="User Name*" id="username"
                                                  v-model="username" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field solo flat filled name="email" v-model="email" type="email"
                                                  label="E-mail*" id="email" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field filled solo flat name="password" v-model="password" label="Password*"
                                                  type="password" id="password" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field filled solo flat name="confirmpassword" v-model="confirmpassword"
                                                  type="password" label="Confirm Password*" id="confirmpassword"
                                                  :rules="[comparepassword]"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                        <small style="color: #132B40">*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text type="submit" @click="registration = false" color="#D9A566">Close</v-btn>
                        <v-btn text @click="validate" color="#D9A566">Save</v-btn>
                    </v-card-actions>
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
        computed: {
            comparepassword() {

                return this.password !== this.confirmpassword ? 'passwords do not match' : ''
            }


        },

        // interne Methoden
        methods: {
            onSignup() {
                console.log({email: this.email, password: this.password, confirmpassword: this.confirmpassword})
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
