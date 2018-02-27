<template>
  <v-layout>
    <v-flex>
      <v-card dark class="blue darken-1">
        <v-card-title>
          <span><b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga fugiat ipsa necessitatibus obcaecati placeat ratione suscipit. Deserunt dolor eius facilis ipsam, iure, nisi numquam optio placeat quam, sit tempore vitae!</b></span>
          <v-spacer class="hidden-xs-only"/>
          <span class="mx-2">Набрано:</span>
          <v-progress-circular
            class="my-3"
          :size="50"
          :width="5"
          :rotate="360"
          :value="75"
        >
          75%
        </v-progress-circular>
        </v-card-title>
        <v-card-actions>
          <v-flex xs8 class="mx-2 hidden-xs-only">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolores eum molestiae?
          </v-flex>
          <div>
            <v-btn flat class="blue lighten-1 hidden-xs-only">
              <v-icon left>
                find_in_page
              </v-icon>
              Подробнее
            </v-btn>
            <v-btn small flat class="blue lighten-1 hidden-sm-and-up">
              <v-icon>
                find_in_page
              </v-icon>
            </v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
    export default {
      name: 'list-item-pending'
    }
</script>

<style scoped>

</style>
