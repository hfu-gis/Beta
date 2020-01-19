<template>
  <div class="body-1">
  </div>
</template>

<script>
export default {
  //Seitenname
  name: 'searchBlank',

  // Initialisierung
  created() {
    //Main-Part dieser Seite: Sonst würde die Änderung der Sucheingabe nicht übernommen/ aktualisiert werden
    this.$router.replace('/postinglist')
  }
}
</script>

<style scoped>
</style>
