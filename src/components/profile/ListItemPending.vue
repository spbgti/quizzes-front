<template>
  <v-layout>
    <v-flex>
      <v-card dark class="orange darken-3">
        <v-card-title>
          <span><b>{{title}}</b></span>
          <v-flex class="orange darken-4 py-2 px-2 mx-3 mt-3 hidden-xs-only">
            {{description}}
          </v-flex>
        </v-card-title>
        <v-card-actions>
          <v-flex xs8>
            <v-btn flat class="orange darken-1 hidden-xs-only">
              <v-icon left>
                forward
              </v-icon>
              Начать тест
            </v-btn>
            <v-btn small flat class="orange darken-1 hidden-sm-and-up">
              <v-icon center>
                forward
              </v-icon>
              Начать тест
            </v-btn>
          </v-flex>
          <v-spacer class="hidden-xs-only"/>
          <span class="mx-2 hidden-xs-only">Необходимо:</span>
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
