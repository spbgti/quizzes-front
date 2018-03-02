<template>
  <v-layout>
    <v-flex>
      <v-card dark class="blue darken-1">
        <v-card-title>
          <span><b>{{ title }}</b></span>
          <v-flex class="blue darken-3 py-2 px-2 mx-3 mt-3 hidden-xs-only">
            {{ description }}
          </v-flex>
        </v-card-title>
        <v-card-actions>
          <v-flex xs8>
            <v-btn flat class="blue lighten-1 hidden-xs-only">
              <v-icon left>
                find_in_page
              </v-icon>
              Подробнее
            </v-btn>
            <v-btn small flat class="blue lighten-1 hidden-sm-and-up">
              <v-icon center>
                find_in_page
              </v-icon>
              Подробнее
            </v-btn>
          </v-flex>
          <v-spacer class="hidden-xs-only"/>
          <span class="mx-2 hidden-xs-only text-xs-center">Набрано:</span>
          <v-flex class="text-xs-center">
            <v-progress-circular
              :size="45"
              :width="5"
              :rotate="360"
              :value="percentage"
            >
              {{ percentage }}%
            </v-progress-circular>
          </v-flex>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
    export default {
      props: ['title', 'description', 'percentage'],
      name: 'list-item-pending'
    }
</script>

<style scoped>

</style>
