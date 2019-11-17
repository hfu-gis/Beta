<template>
<!-- <v-app id="inspire">
        <v-content>
            <v-container
                    class="fill-height"
                    fluid
            >
                <v-row
                        align="center"
                        justify="center"
                >
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
    <video-background class="mdi-file-video" sources="/video/Tunnel.mp4" width="200" height="200"></video-background>

<head>Login
    <meta charset="UTF-8">
<title> Transparent Login Form </title>
</head>

<body>
<v-container>
    <v-layout>
        <v-flex xs12  xs3 offset-md3)>
            <v-card-text>
                <v-form class="px-3">
                    <div id="login">


                                <header><h1><strong> Login </strong></h1></header>
                                 <v-text-field label="user name" v-model="username" id="loginbox"></v-text-field>
                                 <v-text-field label="password" v-model="password" type="password"></v-text-field>
                                 <v-btn>Sign up</v-btn>
                    </div>
                </v-form>
                                 <a href="Link">Passwort vergessen?</a><br>
                                <a href="#openModal">Register</a>
                                <div id="openModal" class="modalDialog">
                                </div>

            </v-card-text>
        </v-flex>
    </v-layout>
</v-container>
</body>
</html>


</template>

<script>
    export default {
        props: {
            source: String,
        }
    }
</script>

<style scoped>

    body {
        margin: 0 auto;
        background-image: url("/img/Background/blauerHimmel.jpg");
        background-size: cover;
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
