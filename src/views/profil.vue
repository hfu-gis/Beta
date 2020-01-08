<template>

    <body>
    <div style="margin-top: 150px; width: 90%; height: 90%; margin-left: auto; margin-right: auto; margin-bottom: 70px;">
        <div class="text-center">
            <img class="img-circle" src="https://randomuser.me/api/portraits/men/11.jpg" height="150" width="150"
                 align="center"/>
            <input id="fileUpload" type="file" hidden>
            <v-btn fab x-small dark @click="chooseFiles">


                <v-icon color="#D9A566">mdi-pencil</v-icon>
            </v-btn>

            <header>
                <h1 class="h1"><strong class="accent--text">{{message}}</strong>


                    <v-btn fab x-small dark @click="dialogName = true">
                        <v-icon color="#D9A566">mdi-pencil</v-icon>
                    </v-btn>

                    <!--Change name--></h1>
            </header>
        </div>
        <v-row align="center">
            <v-col class="text-center" cols="12" sm="3">
                <div class="my-2">
                    <v-btn width="100em" height="8em" class="button md5" outlined @click.stop="dialogProfile = true">
                        Profile
                    </v-btn>
                </div>
                <br>
                <div class="my-2">
                    <v-btn width="100em" height="8em" class="button" outlined @click.stop="dialogNotifications = true">
                        Notification
                    </v-btn>

                </div>
            </v-col>
            <v-col class="text-center" sm="3">
                <div class="my-2">
                    <v-btn width="100em" min-height="8em" class="button" outlined @click.stop="dialogPosts = true">My
                        Posts
                    </v-btn>
                </div>
                <br>
                <div class="my-2">
                    <v-btn width="100em" min-height="8em" class="button" outlined @click.stop="dialogIdea = true">Submit an Idea
                    </v-btn>
                </div>
            </v-col>
            <v-col class="text-center" sm="3">
                <div class="my-2">
                    <v-btn width="100em" min-height="8em" class="button" outlined @click.stop="dialogStats = true">
                        Statistics
                    </v-btn>
                </div>
                <br>
                <div class="my-2">
                    <v-btn width="100em" min-height="8em" class="button" outlined
                           v-on:click="updateMessage">My Suggestions
                    </v-btn>
                </div>
            </v-col>
            <v-col class="text-center" sm="3">
                <div class="my-2">
                    <v-btn width="100em" min-height="8em" class="button" outlined @click.stop="dialogAbo = true">
                        Abo`s/Friends
                    </v-btn>
                </div>
                <br>
                <div class="my-2">
                    <v-btn width="100em" min-height="8em" class="button" outlined v-on:click="logout">
                        Logout
                    </v-btn>
                </div>
                <v-dialog v-model="dialogName" max-width="400">
                    <v-card color="#8F94A6">
                        <v-col cols="12">
                            <v-card-title>
                                {{message}}
                            </v-card-title>


                            <input v-model="message"/>


                        </v-col>

                        <v-col cols="12">
                            <v-btn color="#D9A566" @click.stop="dialogName = false" v-on:click="updateName">Save</v-btn>
                        </v-col>


                    </v-card>
                </v-dialog>

                <v-dialog v-model="dialogProfile" max-width="400">
                    <v-card>
                        <v-card

                                class="mx-auto"
                                max-width="400"
                                color="#8F94A6"
                        >
                            <v-img
                                    src="https://randomuser.me/api/portraits/men/11.jpg"
                                    height="200px"
                            />

                            <v-card-title>
                                {{message}}
                            </v-card-title>

                            <v-card-subtitle>
                                Amateur - 0 erstellte Beiträge
                            </v-card-subtitle>
                        </v-card>
                    </v-card>
                </v-dialog>


                <v-dialog v-model="dialoglogout" max-width="260">
                    <v-card>
                        <v-card

                                class="mx-auto"
                                max-width="260"
                                color="#8F94A6"
                        >


                            <v-card-title>
                                You`re now Logged Out!
                            </v-card-title>


                        </v-card>
                    </v-card>
                </v-dialog>
                <v-dialog v-model="dialogAbo" max-width="260">
                    <v-card>
                        <v-card

                                class="mx-auto"
                                max-width="260"
                                color="#8F94A6"
                        >


                            <v-card-title>
                                You currently have no Abo/Friends
                            </v-card-title>


                        </v-card>
                    </v-card>
                </v-dialog>
                <v-dialog v-model="dialogNotifications" max-width="400">
                    <v-card>
                        <v-card

                                class="mx-auto"
                                max-width="400"
                                color="#8F94A6"
                        >


                            <v-card-title>
                                You currently have no Notifications
                            </v-card-title>


                        </v-card>
                    </v-card>
                </v-dialog>
                <v-dialog v-model="dialogPosts" max-width="400">
                    <v-card>
                        <v-card

                                class="mx-auto"
                                max-width="400"
                                color="#8F94A6"
                        >


                            <v-card-title>
                                You currently have no Posts
                            </v-card-title>


                        </v-card>
                    </v-card>
                </v-dialog>


                <v-dialog v-model="dialogIdea" max-width="500">
                    <v-card color="#8F94A6">
                        <v-card

                                class="mx-auto"
                                max-width="100%"
                                color="#8F94A6"

                        >

                            <v-col style="background: #D9A566">
                            <v-card-title>
                                Submit your Idea
                            </v-card-title>
                            </v-col>
                            <v-col cols="12" >
                                <v-text solo flat filled required>from: {{userData.userName}}</v-text>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field solo flat filled label="Titel" required
                                              v-model="mySuggestions.idea"></v-text-field>
                            </v-col>

                            <v-col cols="12">
                                <v-textarea solo flat filled color="#D9A566" label="type here"
                                            v-model="mySuggestions.text" placeholder="type here"></v-textarea>
                            </v-col>
                            <v-col cols="12">
                                <v-btn solo depressed flat @click="createSuggestion" type="submit" color="#D9A566">Send
                                </v-btn>
                            </v-col>

                        </v-card>
                    </v-card>
                </v-dialog>







                <v-dialog v-model="dialogSuggestions" max-width="400">
                    <v-card>
                        <v-card

                                class="mx-auto"
                                max-width="400"
                                color="#8F94A6"

                        >
                            <v-col style="background: #D9A566">
                            <v-card-title>Those are your current Suggestions:</v-card-title>
                            </v-col>
                            <v-col>
                                <v-card-title>

                                    {{mySuggestions.idea}}

                                </v-card-title>

                            </v-col>
                            <v-col>
                                <v-card-text>{{mySuggestions.text}}</v-card-text>
                            </v-col>
                            <v-divider color="#D9A566"/>
                            <v-col>

                                <v-card-title> Your answer</v-card-title>

                            </v-col>

            <v-col>
                <v-card-text>{{mySuggestions.answer}}</v-card-text>

            </v-col>
                            <!--<v-btn @click.stop="updateMessage">update</v-btn>-->


                        </v-card>
                    </v-card>
                </v-dialog>
                <v-dialog v-model="dialogStats" max-width="500">
                    <v-card
                            class="mt-4 mx-auto"
                            max-width="500"
                            color="#8F94A6"
                    >
                        <v-sheet
                                class="v-sheet--offset mx-auto"
                                color="#132B40"
                                elevation="12"
                                max-width="calc(100%)"
                        >
                            <v-sparkline
                                    :labels="labels"
                                    :value="value"
                                    color="#D9A566"
                                    line-width="2"
                                    padding="16"
                            ></v-sparkline>
                        </v-sheet>
                        <br/>

                        <v-card-text class="pt-0">
                            <div class="title font-weight-light mb-2">Your Likes</div>

                            <v-divider class="my-2"></v-divider>
                            <v-icon
                                    class="mr-2"
                                    small
                            >
                                mdi-clock
                            </v-icon>
                            <span class="caption-black">last registered like 2 Days ago</span>
                        </v-card-text>
                    </v-card>
                </v-dialog>

            </v-col>

        </v-row>
    </div>
    </body>
</template>

<script>


    import db from "../db";
    import firebase from 'firebase';

    export default {

        // gebt jeder Page einen eigenen Namen
        name: 'profil',

        // benötigte Komponenten
        components: {},

        // entspricht den HTML-Attributen
        props: {},


        // Variablen-Speicher
        data: () => ({
            mySuggestions: {
                idea: '',
                text: '',
                creatorID: '',
                answer:'no answer yet',
            },

            userData: {
                userName: '',
                first: '',
                last: '',
                mail: '',
                //password: '',
            },

            message1: '',
            message: 'no user logged in',
            dialoglogout: false,
            dialogAbo: false,
            dialogSuggestions: false,
            dialogStats: false,
            dialogIdea: false,
            dialogNotifications: false,
            dialogPosts: false,
            dialogProfile: false,
            dialogName: false,
            labels: [
                '1.5',
                '1.6',
                '1.7',
                '1.8',
                '1.9',
                '1.10',
                '1.11',
                '1.12',
            ],
            value: [
                200,
                250,
                260,
                300,
                310,
                315,
                360,
                400,
            ],
        }),


        // reagieren auf prop-Veränderung
        watch: {},

        // interne Methoden
        methods: {
            chooseFiles() {
                document.getElementById("fileUpload").click()
            },
            logout: function (e) {
                firebase
                    .auth()
                    .signOut()
                    .then(
                        user => {
                            alert(`You are now logged Out`);
                            this.updateUser()
                            this.$router.push('/homepage');

                        },
                        err => {
                            alert(err.message);
                        }
                    );
                e.preventDefault();
            },


            createSuggestion() {
                if(this.mySuggestions.idea != '' && this.mySuggestions.text != '') {
                    var user = firebase.auth().currentUser;
                    let docRef = db.collection("Suggestions").doc(user.uid)
                    this.mySuggestions.creatorID = user.uid;
                    docRef.set(this.mySuggestions)

                    //TODO Fehlermeldungn Catchen!!!
                    this.dialogIdea = false

                    //Felder clearen
                    this.mySuggestions.text = '';
                    this.mySuggestions.idea = '';
                    this.mySuggestions.creatorID = '';
                    this.mySuggestions.answer = '';
                }
            },


            updateName() {
                firebase.auth().currentUser.updateProfile({
                    displayName: this.message
                })

                var user = firebase.auth().currentUser;
                if (user) {
                    this.updateUser()
                    let docRef = db.collection("Users").doc(user.uid)

                    //Neuen Namen setzen
                    this.userData.userName = this.message

                    docRef.set(this.userData)
                    docRef.update()
                }
            },

            updateUser() {
                var user = firebase.auth().currentUser;
                if (user) {
                    db.collection("Users").doc(user.uid).get().then(doc => {
                        this.userData = doc.data()
                    }).catch(err => {
                        console.log('Error getting documents', err)
                    })
                }
            },

            signOut() {
                firebase
                    .auth()
                    .signOut()
                    .then(() => {
                        if (this.message != "no user logged in") {

                            this.dialoglogout = true
                            this.message = 'no user logged in'
                        }
                        /*this.$router.replace({
                            name: "home"
                        });*/
                    });
            },

            updateMessage() {
                this.dialogSuggestions = true;

                var user = firebase.auth().currentUser;
                if (user) {
                    db.collection("Suggestions").doc(user.uid).get().then(doc => {
                        this.mySuggestions = doc.data()
                    }).catch(err => {
                        console.log('Error getting documents', err)
                    })

                    console.log(this.mySuggestions.creatorID);
                }
            }

        },


        // Initialisierung
        created() {
            this.updateUser()
            var user = firebase.auth().currentUser;
            if (user) {
                this.message = user.displayName;
            }
        }
    }
</script>

<style scoped>
    .oceanbackground {
        width: 100%;
        height: 100%;
        position: absolute;
    }

    .img-circle {
        border-radius: 50%;
    }

    /* CSS für diese Seite hier einfügen */
</style>
