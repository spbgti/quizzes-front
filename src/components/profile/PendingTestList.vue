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
      <!-- Test Pending Item -->
        <list-item-pending />
    </v-card-actions>
  </v-card>
</template>

<script>
  import ListItemPending from '@/components/profile/ListItemPending'

  export default {
    props: ['title'],
    data () {
      return {
        listOpened: true
      }
    },
    name: 'pending-test-list',
    components: { ListItemPending }
  }
</script>

<style scoped>

</style>
