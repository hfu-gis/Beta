<template>
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
                                 <v-text-field label="E-mail" id="txtemail"></v-text-field>
                                 <v-text-field label="Password" id="txtpassword"></v-text-field>
                            <v-row>
                                 <v-btn class="grey darken-3 no white--text" @click="validate" >Sign up</v-btn><registration/>
                            </v-row>
                        </v-form>
                    </div>
                </v-form><br>






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


    import registration from "./registration";
    import db from '../db'



    export default {
        name: 'login',
        components: {registration},
        props: {},

        data: () => ({

            valid: true,
            success: false,


        }),



    methods: {



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
