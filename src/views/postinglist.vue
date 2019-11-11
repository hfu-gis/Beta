<template>
  <div class="body-1">
    <header>
      <a href=""><img src="img/Logos/BitOfAdvice_logo_2.png"/></a>
      <section id="search_and_menu">
        <div class="filter_dropdown">
          <a href=""> <img src="img/Buttons/icons8-menü-52_2.png"/></a>
          <div class="filter_dropdown-content">
            <p><a href="">Profil</a></p>
            <p><a href="">Logout</a></p>
          </div>
        </div>
        <input type="search">
      </section>
    </header>
    <main>
      <section id="hashtags_and_filter">
        <h2 id="hashtag">#Sucheingabe</h2>
        <h2 id="add_hashtags"><a href=""> + </a></h2>

        <section id="filter">
          <input type="image" src="img/Buttons/icons8-up-squared-24_2.png">

          <div class="filter_dropdown">
            <span>Filter</span>
            <div class="filter_dropdown-content">
              <p><a href="">Datum</a></p>
              <p><a href="">Relevanz</a></p>
            </div>
          </div>
        </section>
      </section>

      <section id="post_list">
        <section class="post_container">
          <section class="post_left">
            <img class="post_thumbnail" src="../../img/Profilbilder/1.png"/>
          </section>
          <section class="post_right">
            <h2>Überschrift</h2>
            <h3>24.10.2019 // 13:09</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. <br><br> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </section>

        </section>
        <section class="post_container">
          <section class="post_left">
            <img class="post_thumbnail" src="../../img/Profilbilder/3.png"/>
          </section>
          <section class="post_right">
            <h2>Überschrift</h2>
            <h3>24.10.2019 // 13:09</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. <br><br> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </section>

        </section>
        <section class="post_container">
          <section class="post_left">
            <img class="post_thumbnail" src="../../img/Profilbilder/1.png"/>
          </section>
          <section class="post_right">
            <h2>Überschrift</h2>
            <h3>24.10.2019 // 13:09</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. <br><br> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </section>
        </section>
      </section>
    </main>
    <footer>
      <h3>Impressum    |    Datenschutz</h3>
    </footer>
  </div>
</template>

<script>
export default {
  // gebt jeder Page einen eigenen Namen
  name: 'template',

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
