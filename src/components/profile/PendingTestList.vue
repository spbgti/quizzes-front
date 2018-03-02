<template>
  <v-expansion-panel expand>
    <v-expansion-panel-content>
      <h3 slot="header" class="text--secondary">Активные тесты</h3>
      <v-card>
        <v-card-actions>
          <!-- Test Pending Item -->
          <v-layout v-for="item in dataList" :key="item.title"> <!-- TODO: Redo keys -->
            <list-item-pending :title="item.title"
                               :percentage="item.percentage"
                               :description="item.description" />
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
  import ListItemPending from '@/components/profile/ListItemPending'

  export default {
    props: ['title'],
    data () {
      return {
        //  TODO: REQUEST DATA HERE
        dataList: [
          {
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga fugiat ipsa necessitatibus obcaecati placeat ratione suscipit. ' +
                   'Deserunt dolor eius facilis ipsam, iure, nisi numquam optio placeat quam, sit tempore vitae',
            percentage: 22,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
                         'Deserunt dolor eius facilis ipsam, iure, nisi numquam optio placeat quam, sit tempore vitae'
          }
        ],
        listOpened: true
      }
    },
    name: 'pending-test-list',
    components: { ListItemPending }
  }
</script>

<style scoped>

</style>
