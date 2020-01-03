<template>
    <html>
    <head>Login
        <meta charset="UTF-8">
        <title> Transparent Login Form </title>
    </head>

    <body>
    <v-container style="margin-top: 250px;">
        <v-layout>
            <v-row justify="center" align="center">
                <v-flex xs12 xs5 offset-md12)>
                    <v-card-text>
                        <v-form class="px-3">
                            <div id="login">
                                <header><h1><strong> Login </strong></h1></header>
                                <br>
                                <v-form ref="form" v-model="valid">
                                    <v-text-field label="E-mail" v-model="userdata.txtemail" required></v-text-field>
                                    <v-text-field label="Password" type="password"
                                                  v-model="userdata.txtpassword"></v-text-field>
                                    <v-row no-gutters>
                                        <v-btn color="#D9A566" @click="auth">Sign up</v-btn>
                                        <registration/>
                                        <v-spacer/>
                                        <v-spacer/>
                                    </v-row>
                                </v-form>
                            </div>
                        </v-form>
                        <br>
                    </v-card-text>
                </v-flex>
            </v-row>
        </v-layout>
    </v-container>
    </body>
    </html>
</template>


<script>


    import registration from "./registration";
    import db from '../db'


    export default {
        name: 'login',
        components: {registration},
        props: {},

        data: () => ({

            valid: true,
            success: false,
            userdata: {
                txtemail: 'testpersonFuwa@gmail.com',
                txtpassword: 'furtwangen'

            }


        }),


        methods: {

            auth() {
                db
                    .auth().signInWithEmailAndPassword(this.userdata.txtemail, this.userdata.txtpassword).then(() => {

                    //bei Erfolg
                    this.$router.push('/postinglist')
                })
            }

        },
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

    @font-face {
        font-family: 'Standard-Font';
        src: local('HWYGCOND.tff'),
        url('../../fonts/highway_gothic/HWYGNRRW.TTF') format('truetype');
    }

    h1 {
        font-family: Standard-Font;
        font-size: 3em;
    }

    body {
        width: 100%;
        height: 100%;
        margin: 0;

    }

    a {
        color: #fff;
        font-weight: bolder;
    }

    a:visited {
        color: #fff;
    }

    input[type="text"], input[type="password"] {
        width: 300px;
        height: 50px;
        font-size: 18px;
        margin-bottom: 20px;
        padding-left: 5px;

    }


</style>
