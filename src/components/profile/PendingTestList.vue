<template>
  <v-card>
    <v-card-title>
      <h3>{{ title }}</h3>
    </v-card-title>
    <v-card-actions>
      <!-- Test Completed Item -->
      <!-- Test Pending Item -->
      <list-item-pending />
    </v-card-actions>
  </v-card>
</template>

<script>
  import ListItemPending from '@/components/profile/ListItemPending'

  export default {
    props: ['title'],
    name: 'user-test-list',
    components: { ListItemPending }
  }
</script>

<style scoped>

</style>
