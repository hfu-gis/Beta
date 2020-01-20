<template>
    <html>
    <head>Login
        <meta charset="UTF-8">
        <title> Transparent Login Form </title>
    </head>

    <body>
    <!-- Ruft login auch bei Enter auf -->
    <v-container style="margin-top: 250px;" @keydown.enter="login">
        <v-layout>
            <v-row justify="center" align="center">
                <v-flex xs12 xs5 offset-md12)>
                    <v-card-text>
                        <v-form class="px-3" >
                            <div id="login">
                                <header><h1><strong>Login</strong></h1></header>
                                <br>
                                <v-form ref="form">
                                    <!-- Eingabefelder für E-mail und Passwort-->
                                    <v-text-field label="E-Mail" type="email" v-model="email" required></v-text-field>
                                    <v-text-field label="Password" type="password" v-model="password"></v-text-field>
                                    <v-row no-gutters>
                                        <!-- Button der Methode Login aufruft -->
                                        <v-btn color="#D9A566" v-on:click="login">Sign in</v-btn>
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
    import firebase from 'firebase';

    export default {
        name: 'login',
        components: {registration},
        props: {},

        data: () => ({


            email: '',
            password: ''
        }),


        methods: {

            /** hier wird überprüft ob die eingegeben daten existieren und dann wird eine fehlermeldung ausgegeben oder man wird eingeloggt über firebase*/
            login: function (e) {
                firebase
                    .auth()
                    .signInWithEmailAndPassword(this.email, this.password)
                    .then(
                        user => {
                            alert(`You are logged in as ${user.user.displayName}`);
                            this.$router.push('/');

                        },
                        err => {
                            alert(err.message);
                        }
                    );
                e.preventDefault();
            },

        },
        created() {

        }
    }


</script>

<style scoped>

    @font-face {
        font-family: 'Standard-Font';
        src: local('HWYGCOND.tff'),
        url('../../fonts/highway_gothic/HWYGNRRW.TTF') format('truetype');
    }

    h1 {
        font-family: Standard-Font;
        font-size: 3em;
    }




</style>
