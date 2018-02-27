<template>
  <v-card>
    <v-card-title>
      <h3 class="text--secondary">{{ title }}</h3>
      <v-spacer/>
      <v-btn flat icon @click="listOpened = !listOpened">
        <v-icon v-if="listOpened = false">
          keyboard_arrow_down
        </v-icon>
        <v-icon v-else @click="listOpened = !listOpened">
          keyboard_arrow_up
        </v-icon>
      </v-btn>
    </v-card-title>
    <v-card-actions>
      <!-- Test Completed Item -->
      <list-item-completed/>
    </v-card-actions>
  </v-card>
</template>

<script>
  import ListItemCompleted from '@/components/profile/ListItemCompleted'

  export default {
    props: ['title'],
    name: 'completed-test-list',
    components: { ListItemCompleted }
  }
</script>

<style scoped>

</style>
