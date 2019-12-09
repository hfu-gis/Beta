<template>
<!-- <v-app id="inspire">
        <v-content>
            <v-container
                    class="fill-height"
                    fluid
            >
                <v-row
                        justify="center"
                >
                          align="center"
                  <v-col
                            cols="12"
                            sm="8"
                            md="4"
                    >
                        <v-card class="elevation-12">
                            <v-toolbar
                                    color="primary"
                                    dark
                                    flat
                            >
                                <v-toolbar-title>Login form</v-toolbar-title>
                                <v-spacer/>
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <v-btn
                                                :href="source"
                                                icon
                                                large
                                                target="_blank"
                                                v-on="on"
                                        >
                                            <v-icon>mdi-code-tags</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Source</span>
                                </v-tooltip>
                                <v-tooltip right>
                                    <template v-slot:activator="{ on }">
                                        <v-btn
                                                icon
                                                large
                                                href="https://codepen.io/johnjleider/pen/pMvGQO"
                                                target="_blank"
                                                v-on="on"
                                        >
                                            <v-icon>mdi-codepen</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Codepen</span>
                                </v-tooltip>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                            label="Login"
                                            name="login"
                                            prepend-icon="mdi-account"
                                            type="text"
                                    />

                                    <v-text-field
                                            id="password"
                                            label="Password"
                                            name="password"
                                            prepend-icon="mdi-textbox-password"
                                            type="password"
                                    />
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer/>
                                <v-btn color="primary" to="/home">
                                    Login
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app> -->
    <html>
 <head>Login
    <meta charset="UTF-8">
<title> Transparent Login Form </title>
</head>

<body>
<v-parallax src="../../img/Background/ocean.jpg" class="oceanbackground" width="width" height="100%">

    <v-container>
    <v-layout>
        <v-row justify="center" align="center">
            <v-flex xs12  xs5 offset-md12)>
            <v-card-text>
                <v-form class="px-3">
                    <div id="login">


                        <header><h1><strong> Login </strong></h1></header><br>
                        <v-form ref="form" v-model="valid">
                                 <v-text-field label="username" v-model="Users.username"  id="loginbox"></v-text-field>
                                 <v-text-field label="password"  v-model="Users.password" type="password"></v-text-field>
                                 <v-btn class="grey darken-3 no white--text" @click="validate" >Sign up</v-btn>
                        </v-form>
                    </div>
                </v-form><br>
                                 <a href="Link">Passwort vergessen?</a><br>
                                 <div id="openModal" class="modalDialog">
                                </div>
                    <v-list-item @click.stop="dialog2 = true" link :to="{path:'/app.vue'}">
                    <v-list-item-content><v-list-item-title>Not registered yet?</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                 </v-card-text>
              </v-flex>
           </v-row>
        </v-layout>
</v-container>
</v-parallax>
</body>
</html>
</template>


<script>

    import db from '../db'

        export default {
        name: 'login',
        props: {},

        data: () => ({

            valid: true,
            success: false,
            Users: {
               username: '',
                password: ''
            }
        }),


        methods: {

            validate: () => {
                if (this.$refs.form.validate()) {
                    console.debug('Validation success')
                    this.register()

                }
            },

            register: () => {

                let docRef = db.collection('Users').doc(this.Users.username)
                docRef.set(this.Users)
                    .catch(error => console.debug('Error', error))
                    .then(() => this.success =true)


            },

        },
          created() {
              let docRef = db.collection('Users')
              docRef.get().then(docs => {
                  docs.forEach(doc => this.username.push(doc.data()))
              })
              docRef = db.collection('Users').doc( 'Fokus')
              docRef.get().then(doc => this.userdata = doc.data())

          }
    }


</script>

<style scoped>

    .oceanbackground{
        width: 100%;
        height: 100%;
        position: absolute;

    }
    @font-face { font-family: 'Standard-Font';
        src: local('HWYGCOND.tff'),
        url('../../fonts/highway_gothic/HWYGNRRW.TTF') format('truetype');
    }

    h1{
        font-family: Standard-Font;
        font-size: 3em;
    }

    body {
        width: 100%;
        height: 100%;
        margin: 0;

    }
    #loginbox{

        width: 100em;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    a {
        color:#fff;
        font-weight: bolder;
    }
    a:visited {
        color:#fff;
    }

       input[type="text"], input[type="password"] {
        width: 300px;
        height: 50px;
        font-size: 18px;
        margin-bottom: 20px;
        padding-left:5px;

    }




</style>
