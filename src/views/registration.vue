<template>

    <v-row justify="center">
        <v-dialog v-model="registration" persistent max-width="600px" @keydown.esc="registration = false"
                  @keydown.enter="registration = false">
            <template v-slot:activator="{ on }">
                <v-btn depressed v-on="on" color="#D9A566">Register</v-btn>
            </template>
            <v-card>
                <v-stepper v-model="e1" dark style="background: linear-gradient(to right, #f9f5ef, #ffd8b8);">
                    <v-stepper-header style="background: #132B40">
                        <v-stepper-step editable :complete="e1 > 1" step="1" color="#D9A566">Username</v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step editable :complete="e1 > 2" step="2" color="#D9A566">E-Mail</v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step editable step="3" color="#D9A566">Password</v-stepper-step>
                    </v-stepper-header>

                    <v-stepper-items>
                        <v-stepper-content step="1">

                            <v-container style="height: 280px;">
                                <v-row>
                                    <v-col cols="12">
                                        <v-row>
                                            <v-col cols="4">
                                                <v-card-title light>Username:</v-card-title>
                                            </v-col>
                                            <v-col>
                                                <v-text-field light required name="username" placeholder="User Name*"
                                                              id="username"
                                                              v-model="form.name" required></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-row>
                                            <v-col cols="4">
                                                <v-card-title light>Full Name:</v-card-title>
                                            </v-col>
                                            <v-col
                                                    cols="4"
                                            >
                                                <v-text-field
                                                        light
                                                        v-model="userData.first"
                                                        :rules="nameRules"
                                                        :counter="10"
                                                        placeholder="First Name*"
                                                        required
                                                />
                                            </v-col>

                                            <v-col
                                                    cols="4"
                                            >
                                                <v-text-field
                                                        light
                                                        v-model="userData.last"
                                                        :rules="nameRules"
                                                        :counter="10"
                                                        placeholder="Last Name*"
                                                        required
                                                />
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <small style="color: rgba(19,43,64,0.49); padding-left: 30px;">*indicates required field</small>

                            <div style="float: right">
                                <v-btn
                                        style="float: right"
                                        color="#132B40"
                                        @click="e1 = 2"
                                >
                                    Continue
                                </v-btn>
                                <v-btn text light v-on:click="cancel">Cancel</v-btn>
                            </div>
                        </v-stepper-content>

                        <v-stepper-content step="2">
                            <section style="height: 280px;">
                                <v-card-title light style="justify-content: center; padding-top: 10%;">What's your
                                    mail?
                                </v-card-title>

                                <v-col cols="12">
                                    <v-text-field
                                            light
                                            required
                                            name="email"
                                            v-model="form.email"
                                            type="email"
                                            placeholder="E-Mail*"
                                            id="email"
                                            :rules="emailRules"
                                    />
                                </v-col>
                            </section>
                            <small style="color: rgba(19,43,64,0.49); padding-left: 30px;">*indicates required field</small>

                            <div style="float: right">
                                <v-btn
                                        style="float: right"
                                        color="#132B40"
                                        @click="e1 = 3"
                                >
                                    Continue
                                </v-btn>

                                <v-btn text light v-on:click="cancel">Cancel</v-btn>
                            </div>
                        </v-stepper-content>

                        <v-stepper-content step="3">
                            <v-container style="height: 280px;">
                                <v-card-title light style="justify-content: center; padding-top: 10%;">Please insert
                                    your password!
                                </v-card-title>
                                <v-row>


                                    <v-col
                                            cols="12"
                                            md="6"
                                    >
                                        <v-text-field light required name="password" v-model="form.password"
                                                      placeholder="Password*"
                                                      type="password" id="password" required/>
                                    </v-col>

                                    <v-col
                                            cols="12"
                                            md="6"
                                    >
                                        <v-text-field light required name="confirmpassword" v-model="confirmpassword"
                                                      type="password" placeholder="Confirm Password*"
                                                      id="confirmpassword"
                                                      :rules="[comparepassword]"/>
                                    </v-col>
                                </v-row>

                            </v-container>
                            <small style="color: rgba(19,43,64,0.49); padding-left: 15px;">*indicates required field</small>

                            <div style="float: right">
                                <v-btn text v-on:click="cancel" light>Cancel</v-btn>
                                <v-btn v-on:click="submit" color="success">Confirm</v-btn>
                            </div>
                        </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
                <div style="background: darkred; color: white; padding: 2%; text-align: center" v-if="error" class="alert alert-danger">{{error}}</div>

            </v-card>
        </v-dialog>
    </v-row>

</template>

<script>
    import db from '../db'
    import firebase from 'firebase';

    export default {

        //variabler Speicher
        data: () => ({
            e1: 0,

            form: {
                name: "",
                email: "",
                password: ""
            },
            error: null,

            registration: false,
            valid: true,

            confirmpassword: '',

            userData: {
                userName: '',
                first: '',
                last: '',
                mail: '',
                //password: '',
                photoURL: ''
            },

            nameRules: [
                v => !!v || 'Name is required',
                v => v.length <= 10 || 'Name must be less than 10 characters',
            ],

            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
        }),

        // gebt jeder Page einen eigenen Namen
        name: 'registration',

        // benötigte Komponenten
        components: {},

        // entspricht den HTML-Attributen
        props: {},

        // reagieren auf prop-Veränderung
        watch: {},
        computed: {
            comparepassword() {
                return this.form.password !== this.confirmpassword ? 'passwords do not match' : ''
            }
        },

        // interne Methoden
        methods: {
            cancel() {
                this.registration = false;

                //Felder clearen
                this.form.name = '';
                this.form.email = '';
                this.form.password = '';
                this.confirmpassword = '';

                this.e1 = 0;
            },

            submit() {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(this.form.email, this.form.password)
                    .then(data => {
                        data.user
                            .updateProfile({
                                displayName: this.form.name,
                                photoURL: 'http://pronksiapartments.ee/wp-content/uploads/2015/10/placeholder-face-big.png'
                            })
                            .then(() => {
                            });


                        //Parallel erstellte Datenbank für weitere Informationen
                        let docRef = db.collection("Users").doc(data.user.uid)

                        this.userData.photoURL = 'http://pronksiapartments.ee/wp-content/uploads/2015/10/placeholder-face-big.png';
                        this.userData.mail = this.form.email;
                        this.userData.password = this.form.password;
                        this.userData.userName = this.form.name;

                        docRef.set(this.userData)

                        //Felder clearen
                        this.form.name = '';
                        this.form.email = '';
                        this.form.password = '';
                        this.confirmpassword = '';

                        //Dialog schließen
                        this.registration = false
                    })
                    .catch(err => {
                        this.error = err.message;
                    });
            },
        },

        // Initialisierung
        created() {
        }
    }
</script>

<style scoped>
    /* CSS für diese Seite hier einfügen */
</style>
