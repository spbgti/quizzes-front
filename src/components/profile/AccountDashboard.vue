<template>
  <v-card width="100%">
    <v-card-title>
      <h2>Somebody once told me</h2>
    </v-card-title>
    <v-card-actions>
      <v-avatar :size="64"
                class="grey lighten-4 mx-3 my-1">
        <img src="../../assets/logo.png" />
      </v-avatar>
      <h3><a href="#">Username</a></h3>
      <v-spacer />
      <v-btn flat>Btn-1</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
    export default {
      name: 'user-dashboard'
    }
</script>

<style scoped>

</style>
