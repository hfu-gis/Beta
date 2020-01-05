<template>

    <v-row justify="center">
        <v-dialog v-model="registration" persistent max-width="600px" @keydown.esc="registration = false"
                  @keydown.enter="registration = false">
            <template v-slot:activator="{ on }">
                <v-btn  depressed  v-on="on" color="#D9A566">Register</v-btn>
            </template>
            <v-card>
                <v-form ref="form" v-model="valid" style="background: #162a3b" id="signup">
                    <br>
                    <v-card-title>
                        <v-row justify="center">
                            <span class="headline"
                                  style="color: #D9A566;">You need a bit of advice? Just register!</span>
                        </v-row>
                    </v-card-title>
                    <v-divider/>
                    <v-card-text style="background: linear-gradient(to right, #f9f5ef, #ffd6a6);">
                        <v-container>
                            <v-row>

                                <v-col cols="12">
                                    <v-text-field required name="username" placeholder="User Name*" id="username"
                                                  v-model="user.userName" required></v-text-field>
                                </v-col>
                                <v-container>
                                    <v-row>
                                        <v-col
                                                cols="12"
                                                md="6"
                                        >
                                            <v-text-field
                                                    v-model="user.first"
                                                    :rules="nameRules"
                                                    :counter="10"
                                                    placeholder="First Name*"
                                                    required
                                            />
                                        </v-col>

                                        <v-col
                                                cols="12"
                                                md="6"
                                        >
                                            <v-text-field
                                                    v-model="user.last"
                                                    :rules="nameRules"
                                                    :counter="10"
                                                    placeholder="Last Name*"
                                                    required
                                            />
                                        </v-col>
                                    </v-row>
                                </v-container>
                                <v-col cols="12">
                                    <v-text-field
                                            required
                                            name="email"
                                            v-model="user.email"
                                            type="email"
                                            placeholder="E-Mail*"
                                            id="email"
                                            :rules="emailRules"
                                    />
                                </v-col>
                                <v-container>
                                    <v-row>
                                        <v-col
                                                cols="12"
                                                md="6"
                                        >
                                            <v-text-field required name="password" v-model="user.password"
                                                          placeholder="Password*"
                                                          type="password" id="password" required></v-text-field>
                                        </v-col>

                                        <v-col
                                                cols="12"
                                                md="6"
                                        >
                                            <v-text-field required name="confirmpassword" v-model="confirmpassword"
                                                          type="password" placeholder="Confirm Password*" id="confirmpassword"
                                                          :rules="[comparepassword]"></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-file-input label="Upload file" @change="Image" />
                                    </v-row>
                                </v-container>
                            </v-row>
                        </v-container>
                        <small style="color: #132B40">*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text @click="registration = false" color="#D9A566">Close</v-btn>
                        <v-btn text @click="create" color="success">Save</v-btn>

                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>
    </v-row>

</template>

<script>
    import db from '../db'


    export default {

        //variabler Speicher
        data: () => ({
            registration: false,
            valid: true,
            success: false,
            selectedfile: null,

            confirmpassword: '',

            user: {
                userName: '',
                first: '',
                last: '',
                email: '',
                password: '',
                image: '',
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
                return this.user.password !== this.confirmpassword ? 'passwords do not match' : ''
            }
        },

        // interne Methoden
        methods: {
            create() {
                let docRef = db.collection("Users").doc(this.user.userName)
                docRef.set(this.user)

                //TODO Fehlermeldungn Catchen!!!
                this.registration = false
            },
            Image(e){
                this.selectedfile = e;

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
