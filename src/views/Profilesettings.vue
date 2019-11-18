<template>
  <!--<div class="body-1">
    <a href="#" onclick="profileinstellungen()">Profileinstellungen</a>
    <div class="pE-Modal">
      <div class="pE-Modal-Inhalt">
        <div class="pE-schliessen" onclick="closeModalPE()">+</div>
        <button id="ProfilePictureAendern" onclick="bildUploadModal()"><img src="img/Profilbilder/1.png" alt="Profilbild ändern" title="Profilbild ändern" id="PresentProfilePicture"></button>
        <form action="" method="post">
          <input name="newUsername" type="text" placeholder="Neuer Benutzername">
          <input name="newBirthdate" type="text" placeholder="Geburtsdatum" onfocus="this.type = 'date'" onblur="this.type = 'text'">
          <br>
          <input name="newMail" type="email" placeholder="Neue Email-Adresse">
          <input name="newMailVal" type="email" placeholder="Neue Email-Adresse bestätigen">
          <br>
          <input name="newPassword" type="password" placeholder="Neues Passwort">
          <input name="newPasswordVal" type="password" placeholder="Neues Passwort bestätigen">
          <br>
          <br>
          <a href="" class="button">Änderungen speichern</a>
        </form>
      </div>
    </div>
  </div>
  -->
</template>


<script>
export default {
  // gebt jeder Page einen eigenen Namen
  name: 'profilesettings',

  // benötigte Komponenten
  components: {},

  // entspricht den HTML-Attributen
  props: {},

  // Variablen-Speicher
  data() {
    return {}
  },

  // reagieren auf prop-Veränderung
  watch: {},

  // interne Methoden
  methods: [],

  // Initialisierung
  created() {}
}
</script>

<style scoped>
/* CSS des Modal zu den Profileinstellungen */

/* Allgemeine Tags */
button:focus {
  outline: none;
}

.button {
  background-color: dodgerblue;
  padding: 4px;
  border: none;
  border-radius: 30%;
  text-decoration: none;
  color: white;
}


/* Profileinstellungen-Fenster */
.pE-Modal {
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.7);
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  display: none;
}

.pE-Modal-Inhalt {
  width: 500px;
  height: 650px;
  background-color: white;
  border-radius: 6px;
  text-align: center;
  padding: 20px;
  position: relative;
}

.pE-schliessen {
  position: absolute;
  top: 0;
  right: 14px;
  font-size: 42px;
  transform: rotate(45deg);
  cursor: pointer;
}



/* Profilbild */
#PresentProfilePicture {
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border-color: black;
  position: relative;
}

#ProfilePictureAendern {
  width: 150px;
  height: 150px;
  padding: 0;
  margin: 15px;
  background-color: white;
  display: inline-block;
  border-width: 4px;
  border-color: black;
  border-radius: 50%;
  cursor: pointer;
}



/* Formular Input */
input {
  width: 50%;
  display: block;
  margin: 15px auto;
}
</style>
