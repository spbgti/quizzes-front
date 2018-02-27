<template>
  <v-layout>
    <v-flex>
      <v-card dark class="orange darken-3">
        <v-card-title>
          <span><b>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus esse eveniet exercitationem fuga fugiat id illo itaque labore magni mollitia nesciunt obcaecati quam rerum sequi tenetur, ullam unde ut?</b></span>
          <v-spacer class="hidden-xs-only"/>
          <span class="mx-2">Необходимо:</span>
          <v-progress-circular
            class="my-3"
            :size="50"
            :width="5"
            :rotate="360"
            :value="65"
          >
            65%
          </v-progress-circular>
        </v-card-title>
        <v-card-actions>
          <v-flex xs8 class="mx-2 hidden-xs-only">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolores eum molestiae?
          </v-flex>
          <v-flex>
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
