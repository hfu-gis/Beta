    <template>

        <body>
        <div style="margin-top: 150px; width: 90%; height: 90%; margin-left: auto; margin-right: auto; margin-bottom: 70px;">
            <div class="text-center">
                <img class="img-circle" src="https://randomuser.me/api/portraits/men/39.jpg" height="150" width="150"
                     align="center"/>
                <input id="fileUpload" type="file" hidden>
                <v-btn fab x-small dark @click="chooseFiles">
                    <v-icon color="#D9A566">mdi-pencil</v-icon>
                </v-btn>

                <header>
                    <h1 class="h1"><strong class="accent--text" >{{message}}</strong>



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
                        <v-btn width="100em" min-height="8em" class="button" outlined @click.stop="dialogIdea = true">Submit
                            an
                            Idea
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
                        <v-btn width="100em" min-height="8em" class="button" outlined @click.stop="dialogSuggestions = true">My
                            Suggestions
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
                        <v-btn width="100em" min-height="8em" class="button" outlined @click.stop="dialoglogout = true">
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


                </v-col >

                                <v-col cols="12">
                            <v-btn color="#D9A566"    @click.stop="dialogName = false">Save</v-btn>
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
                                        src="https://randomuser.me/api/portraits/men/39.jpg"
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


                                <v-card-title>
                                    Submit your Idea
                                </v-card-title>
                                <v-col cols="12">
                                    <v-text-field solo flat filled label="Username" required v-model="usersuggestion.username"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field solo flat filled label="Titel" required v-model="usersuggestion.Idea"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea solo flat filled color="#D9A566" label="type here" v-model="usersuggestion.text" placeholder="type here"> </v-textarea>
                                </v-col>
                                <v-col cols="12">
                                    <v-btn solo depressed flat @click="create" type="submit" color="#D9A566">Send
                                    </v-btn>
                                </v-col>

                            </v-card>
                        </v-card>
                    </v-dialog>


                    <v-dialog v-model="dialogSuggestions" max-width="260">
                        <v-card>
                            <v-card

                                    class="mx-auto"
                                    max-width="260"
                                    color="#8F94A6"
                            >


                                <v-card-title>
                                    You currently have no Suggestions
                                </v-card-title>


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

        export default {

            // gebt jeder Page einen eigenen Namen
            name: 'profil',

            // benötigte Komponenten
            components: {},

            // entspricht den HTML-Attributen
            props: {},


            // Variablen-Speicher
            data: () => ({
                userdata: {
                    userName: '',
                },
                usersuggestion: {
                    username:'',
                    Idea: '',
                    text:''
                },

                message: 'Peter',
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



                create() {
                    let docRef = db.collection("Suggestions").doc(this.usersuggestion.Idea)
                    docRef.set(this.usersuggestion)

                    //TODO Fehlermeldungn Catchen!!!
                    this.dialogIdea = false
                },



            },


            // Initialisierung
            created() {
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
