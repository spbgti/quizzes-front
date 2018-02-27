<template>
  <v-card width="100%">
    <v-card-title>
      <h2 class="text--secondary">Профиль</h2>
    </v-card-title>
    <v-card-actions>
      <v-layout row>
        <v-avatar :size="64"
                  class="grey lighten-4 mx-3 my-1">
          <img src="../../assets/logo.png" />
        </v-avatar>
        <div>
          <h3 class="text--primary">user.name</h3>
          <h5 class="blue--text text--lighten-3">user.type</h5>
          <h4 class="orange--text">user.group</h4>
        </div>
      </v-layout>
      <v-layout row>
        <v-spacer class="hidden-xs-only"/>
        <v-flex>
          <h5 class="text--secondary hidden-xs-only mx-2">Процент:</h5>
          <v-progress-circular
            :size="64"
            :width="8"
            :rotate="360"
            :value="60"
            color="primary"
          >
            ??
          </v-progress-circular>
        </v-flex>
      </v-layout>
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
