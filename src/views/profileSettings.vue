<template>
  <div class="body-1">
    <a href="#" onclick="profileinstellungen()">Profileinstellungen</a>
    <!-- Modals -->
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
/* CSS für diese Seite hier einfügen */
</style>
