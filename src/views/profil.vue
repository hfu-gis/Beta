<template>

    <body>
    <div style="margin-top: 150px; width: 90%; height: 90%; margin-left: auto; margin-right: auto; margin-bottom: 70px;">
        <div class="text-center">

            <!--  Zeigt das Bild an, dass in Firebase hinterlegt ist (mit URL)-->
            <img class="img-circle" :src="profileURL" height="150" width="150"
                 align="center"/>
            <input id="fileUpload" type="file" hidden>
            <!--  öffnet ein Dialog zum Bild ändern-->
            <v-btn fab x-small dark v-on:click="changePhotoURL = true" style="position: relative; margin-top: 4.4%;margin-left: -1.3%">
                <v-icon color="#D9A566" >mdi-pencil</v-icon>
            </v-btn>


            <!-- Dialog zum Bild ändern-->
            <v-dialog v-model="changePhotoURL" max-width="700px">
                <v-card style="background: linear-gradient(to right, #f9f5ef, #ffd8b8);">
                    <v-card-title>Insert new Photo URL:</v-card-title>
                    <v-row style="width: 100%; padding: 20px;">
                            <v-text-field
                                    v-model="newPhotoURL"
                                    label="URL"
                                    outlined
                                    required
                                    style="padding-left: 2%; padding-right: 2%;"
                            >
                            </v-text-field>
                            <v-btn outlined v-on:click="changeURL" >Confirm</v-btn>
                    </v-row>
                </v-card>
            </v-dialog>

            <!-- Anzeige des Usernames-->
            <header>
                <h1 class="h1"><strong class="accent--text">{{message}}</strong>

                    <!--Öffnet ein Dialog zum Username ändern -->
                    <v-btn fab x-small dark @click="dialogName = true">
                        <v-icon color="#D9A566">mdi-pencil</v-icon>
                    </v-btn>

                    <!--Change name--></h1>
            </header>
        </div>
        <!-- Buttons um verschiedene Dialoge zu öffnen-->
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
                    <v-btn width="100em" min-height="8em" class="button" outlined @click.stop="dialogIdea = true">Submit
                        an Idea
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
                    <!-- Ruft Methode updateMessage bei klick auf-->
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
                    <!-- Ruft Methode logout bei klick auf-->
                    <v-btn width="100em" min-height="8em" class="button" outlined v-on:click="logout">
                        Logout
                    </v-btn>
                </div>

                <!-- Dialog zum ändern des Usernames-->
                <v-dialog v-model="dialogName" max-width="400"
                          style="background: linear-gradient(to right, #f9f5ef, #ffd8b8);">
                    <v-card
                            style="background: linear-gradient(to right, #f9f5ef, #ffd8b8);">
                        <v-col cols="12" style="background: #132B40">
                            <v-card-title style="color: white">
                                {{message}}
                            </v-card-title>
                        </v-col>


                        <input v-model="message" style="margin-left: 7%; margin-top: 5%; margin-bottom: 2%"/>


                        <v-col cols="12">
                            <!-- Ruft Methode updateMessage bei klick auf-->
                            <v-btn color="#132B40" style="color: white " @click.stop="dialogName = false"

                                   v-on:click="updateName">Save
                            </v-btn>

                        </v-col>


                    </v-card>
                </v-dialog>
                <!-- Dialog der die jeweiligen Profildaten anzeigt wie name Bild usw-->
                <v-dialog v-model="dialogProfile" max-width="400">
                    <v-card>
                        <v-card

                                class="mx-auto"
                                max-width="400"
                                color="#8F94A6"
                                style="background: linear-gradient(to right, #f9f5ef, #ffd8b8);"
                        >
                            <v-img
                                    :src="profileURL"
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

                <!-- Dialog der anzeigt das der User ausgeloggt wurde-->
                <v-dialog v-model="dialoglogout" max-width="260">
                    <v-card>
                        <v-card

                                class="mx-auto"
                                max-width="260"
                                color="#8F94A6"
                                style="background: linear-gradient(to right, #f9f5ef, #ffd8b8);"
                        >


                            <v-card-title>
                                You`re now Logged Out!
                            </v-card-title>


                        </v-card>
                    </v-card>
                </v-dialog>
                <!-- Dialog der die Abos anzeigt-->
                <v-dialog v-model="dialogAbo" max-width="260">
                    <v-card>
                        <v-card

                                class="mx-auto"
                                max-width="260"
                                color="#8F94A6"
                                style="background: linear-gradient(to right, #f9f5ef, #ffd8b8);"
                        >


                            <v-card-title>
                                You currently have no Abo/Friends
                            </v-card-title>


                        </v-card>
                    </v-card>
                </v-dialog>
                <!-- Dialog der die Notifications anzeigt -->
                <v-dialog v-model="dialogNotifications" max-width="400">
                    <v-card>
                        <v-card

                                class="mx-auto"
                                max-width="400"
                                color="#8F94A6"
                                style="background: linear-gradient(to right, #f9f5ef, #ffd8b8);"
                        >


                            <v-card-title>
                                You currently have no Notifications
                            </v-card-title>


                        </v-card>
                    </v-card>
                </v-dialog>



                <!-- Dialog der die selbst geschriebenen Post anzeigt-->
                <v-dialog v-model="dialogPosts" max-width="900">
                    <v-card>

                        <v-card
                                class="mx-auto"
                                color="#8F94A6"
                                style="background: linear-gradient(to right, #f9f5ef, #ffd8b8);"
                        >


                            <v-card-title v-if="items[0] === ''">
                                You currently have no Posts
                            </v-card-title>

                            <v-card-title v-if="items[0] !== ''">
                                All Posts you wrote:
                            </v-card-title>

                            <div>
                                <v-col
                                        v-for="(item, i) in items"
                                        :key="i"
                                        md="auto"
                                >
                                    <v-card
                                            color="#8F94A6"
                                            dark
                                    >
                                        <v-row >

                                            <v-col>


                                                <v-card-title
                                                        class="headline"
                                                        v-text="item.title"

                                                />

                                                <v-chip-group
                                                        column
                                                        active-class="primary--text"
                                                        dark
                                                        style="padding-left: 1.5%"
                                                >
                                                    <!--<v-chip disabled v-for="tag in item.hashtags" :key="tag">-->
                                                    <v-chip disabled>
                                                        {{ item.hashtag }}
                                                    </v-chip>
                                                </v-chip-group>

                                                <!--<v-breadcrumbs :items="bread_items" divider=">"></v-breadcrumbs>-->


                                            </v-col>

                                        </v-row>
                                        <v-row>
                                            <v-card-text v-text="item.text"/>
                                        </v-row>
                                        <v-row>
                                            <v-col  style="padding-top: 2%;" >
                                                <!-- Sorgt dafür dass nur eine Erweiterung der beiträge ausgeklappt wird und nicht alle gleichzeitig-->
                                                <v-btn @click="item.beitragsnummer = !item.beitragsnummer"
                                                       style=" background: #3d4f68; " block>
                                                    Comment
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                        <v-expand-transition>
                                            <div v-show="item.beitragsnummer">
                                                <v-divider></v-divider>
                                            <v-card-text>Comments?</v-card-text>

                                            </div>
                                        </v-expand-transition>
                                    </v-card>
                                </v-col>
                            </div>
                        </v-card>
                    </v-card>
                </v-dialog>




                <!-- Dialog der einen eine Idea einreichen lässt-->
                <v-dialog v-model="dialogIdea" max-width="500">
                    <v-card color="#8F94A6">
                        <v-card

                                class="mx-auto"
                                max-width="100%"
                                color="#8F94A6"
                                style="background: linear-gradient(to right, #f9f5ef, #ffd8b8);"


                        >

                            <v-col style="background: #132B40">
                                <v-card-title style="color: white">
                                    Submit your Idea
                                </v-card-title>
                            </v-col>
                            <v-col cols="12">
                                <v-text solo flat filled required>from: {{userData.userName}}</v-text>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field solo flat filled label="Titel" required
                                              v-model="mySuggestions.idea"/>
                            </v-col>

                            <v-col cols="12">
                                <v-textarea solo flat filled color="#D9A566" label="type here"
                                            v-model="mySuggestions.text" placeholder="type here"/>
                            </v-col>
                            <v-col cols="12">
                                <!-- Ruft Methode createSuggestion bei click auf-->
                                <v-btn solo depressed flat @click="createSuggestion" type="submit" color="#132B40"
                                       style="color: white">Send
                                </v-btn>
                            </v-col>

                        </v-card>
                    </v-card>
                </v-dialog>

                <!-- Dialog der seine eingereichte Idee mit Antwort anzeigt-->
                <v-dialog v-model="dialogSuggestions" max-width="400">
                    <v-card>
                        <v-card

                                class="mx-auto"
                                max-width="400"
                                color="#8F94A6"
                                style="background: linear-gradient(to right, #f9f5ef, #ffd8b8);"
                        >
                            <v-col style="background: #132B40">
                                <v-card-title style="color: white">Those are your current Suggestions:</v-card-title>
                            </v-col>

                            <v-col>
                                <v-card-text>{{mySuggestions.idea}}</v-card-text>
                            </v-col>
                            <v-col>
                                <v-card-text>
                                    {{mySuggestions.text}}

                                </v-card-text>
                            </v-col>
                            <v-divider color="#132B40"/>
                            <v-col>
                                <v-card-title>
                                    Your answer
                                </v-card-title>
                            </v-col>
                            <v-col>
                                <v-card-text>
                                    {{mySuggestions.answer}}
                                </v-card-text>

                            </v-col>
                            <!--<v-btn @click.stop="updateMessage">update</v-btn>-->


                        </v-card>
                    </v-card>
                </v-dialog>
                <!-- Dialog der die Likes auf seinen Posts zeigt-->
                <v-dialog v-model="dialogStats" max-width="500">
                    <v-card
                            class="mt-4 mx-auto"
                            max-width="500"
                            color="#8F94A6"
                            style="background: linear-gradient(to right, #f9f5ef, #ffd8b8);"
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
                            />
                        </v-sheet>
                        <br/>

                        <v-card-text class="pt-0">
                            <div class="title font-weight-light mb-2">Your Likes</div>

                            <v-divider class="my-2"/>
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
            changePhotoURL: false,
            newPhotoURL: '',
            profileURL: '',

            items: [],

            /** Daten für Idee einreichung*/

            mySuggestions: {
                idea: '',
                text: '',
                creatorID: '',
                answer: 'no answer yet',
            },

            userData: {
                userName: '',
                first: '',
                last: '',
                mail: '',
                //password: '',
            },
            /** Default falue für anzeigen der Dialoge*/
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
            /** Daten für Diagramm anzeige*/
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

            /**  diese Methode sorgt dafür das man ausgeloggt wird*/
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


            /** Diese Methode sorgt dafür das der aktuelle Profilbild url ausgetauscht wird durch einen der vom benutzer angegeben wurde */
            changeURL(){
                var user = firebase.auth().currentUser;
                if (user) {
                    user.updateProfile({photoURL: this.newPhotoURL})
                    this.changePhotoURL = false;

                    db.collection("Users").doc(user.uid).update({
                        photoURL: this.newPhotoURL
                    });

                }
                this.profileURL = this.newPhotoURL;
                this.updateUser();
            },
            /** Mit dieser Methode wird eine Nachhricht in firebase hochgeladen und gespeichert die dann vom Entwicklerteam beantwortet werden kann*/
            createSuggestion() {
                if (this.mySuggestions.idea != '' && this.mySuggestions.text != '') {
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

            /** Diese Methode Updated den Username sodass die eingabe nun der username ist */
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
                    //docRef.update()
                }
            },
            /** Hier wird der aktuell eingeloggte User geupdated und die Daten runtergeladen*/
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
            /** Hier wird der Vorschlage wenn einer eingereicht wurde von firebase aufgerufen und angezeigt*/

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
            },
            /**  Hier werden die eigenen Erstellten Beiträge von firebase geladen und angezeigt*/
            updateMyPosts(){
                var user = firebase.auth().currentUser;
                db.collection("Threads").where("creatorID", "==", user.uid).get().then(threadsFromDB => {
                    threadsFromDB.forEach(
                        doc => {
                            this.items.push(doc.data())
                        })
                })
                    .catch(err => {
                        console.log('Error getting documents', err)
                    })
            }

        },


        // Initialisierung
        created() {
            this.updateUser();
            this.updateMyPosts();
            var user = firebase.auth().currentUser;
            if (user) {
                this.message = user.displayName;
                this.profileURL = user.photoURL;
            }
        }
    }
</script>

<style scoped>
    .img-circle {
        border-radius: 50%;
    }
</style>
