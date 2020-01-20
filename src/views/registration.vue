<template>

    <v-row justify="center">
        <!-- Dialog zum Registrieren-->
        <v-dialog v-model="registration" persistent max-width="600px" @keydown.esc="registration = false"
                  @keydown.enter="registration = false">
            <!-- Button der ein Dialog öffnet-->
            <template v-slot:activator="{ on }">
                <v-btn depressed v-on="on" color="#D9A566">Register</v-btn>
            </template>
            <v-card>
                <v-stepper v-model="e1" dark style="background: linear-gradient(to right, #f9f5ef, #ffd8b8);">
                    <!-- Stepper der 3 Schritte erstellt-->
                    <v-stepper-header style="background: #132B40">
                        <v-stepper-step editable :complete="e1 > 1" step="1" color="#D9A566">Username</v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step editable :complete="e1 > 2" step="2" color="#D9A566">E-Mail</v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step editable step="3" color="#D9A566">Password</v-stepper-step>
                    </v-stepper-header>

                    <v-stepper-items>
                        <!-- Erster schritt im Dialog mit Name und Username-->
                        <v-stepper-content step="1">




                                        <v-row>

                                                <v-card-title light>Username: </v-card-title>

                                            <v-col >
                                                <v-text-field light required  placeholder="User Name*"
                                                              id="username"
                                                              v-model="form.name" required></v-text-field>
                                            </v-col>
                                        </v-row>

                                    <v-col >
                                        <v-row>

                                                <v-card-title light>Full Name:</v-card-title>

                                            <v-col >
                                            <v-text-field
                                                    light
                                                    v-model="userData.first"
                                                    :rules="nameRules"
                                                    :counter="10"
                                                    placeholder="First Name*"
                                                    required
                                            />
                                        </v-col>
                                            </v-row><v-row>


                                            <v-col

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


                            <small style="color: rgba(19,43,64,0.49);">*indicates required field</small>
                            <!-- 2. Schritt mit email Adresse mit überprüfung auf @zeichen-->
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
                            <section >
                                <v-card-title light style="justify-content: center;">What's your
                                    mail?
                                </v-card-title>

                                <v-col >
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
                            <small style="color: rgba(19,43,64,0.49); ">*indicates required field</small>
                            <!-- 3. Schritt mit Passwort mit Überprüfung auf übereinstimmung der beiden eingaben-->
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

                                <v-card-title light style="justify-content: center; padding-top: 10%;">Choose your Password
                                </v-card-title>
                                <v-row>


                                    <v-col


                                    >
                                        <v-text-field light required name="password" v-model="form.password"
                                                      placeholder="Password*"
                                                      type="password" id="password" required/>
                                    </v-col>

                                    <v-col


                                    >
                                        <v-text-field light required name="confirmpassword" v-model="confirmpassword"
                                                      type="password" placeholder="Confirm Password*"
                                                      id="confirmpassword"
                                                      :rules="[comparepassword]"/>
                                    </v-col>
                                </v-row>


                            <small style="color: rgba(19,43,64,0.49); ">*indicates required field</small>
                            <!-- Submit button der Methode zum hochladen aufruft-->
                            <div style="float: right">
                                <v-btn text v-on:click="cancel" light>Cancel</v-btn>
                                <v-btn v-on:click="submit" color="success">Confirm</v-btn>
                            </div>
                        </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
                <!-- Error alert Message-->
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
            /** Daten für übertragung an Firebase*/
            form: {
                name: "",
                email: "",
                password: ""
            },
            error: null,

            registration: false,
            valid: true,
            /** Variable für überprüfung des Passworts */
            confirmpassword: '',
            /** Daten für übertragung an Firebase*/
            userData: {
                userName: '',
                first: '',
                last: '',
                mail: '',
                //password: '',
                photoURL: ''
            },
            /** Reguliert länge des Namens*/
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length <= 10 || 'Name must be less than 10 characters',
            ],
            /**Reguliert formatierung der E-mail */
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
            /**  Überprüft übereinstimmung des Passworts*/
            comparepassword() {
                return this.form.password !== this.confirmpassword ? 'passwords do not match' : ''
            }
        },

        // interne Methoden
        methods: {

            /** hier wird das Popup beim click eines buttons geschlossen*/
            cancel() {
                this.registration = false;

                //Felder clearen
                this.form.name = '';
                this.form.email = '';
                this.form.password = '';
                this.confirmpassword = '';

                this.e1 = 0;
            },
            /** Hier werden die eingetragen daten auf firebase hochgeladen und gespeichert*/
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
