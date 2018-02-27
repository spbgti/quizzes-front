<template>
  <v-layout>
    <v-flex>
      <v-card dark class="orange darken-3">
        <v-card-title>
          <span><b>Some test</b></span>
        </v-card-title>
        <v-card-actions>
          <v-flex xs8 class="mx-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolores eum molestiae?
          </v-flex>
          <v-spacer />
          <v-btn flat class="orange darken-1">
            <v-icon left>
              forward
            </v-icon>
            Начать тест
          </v-btn>
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
