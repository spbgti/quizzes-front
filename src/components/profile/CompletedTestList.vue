<template>
  <v-expansion-panel>
    <v-expansion-panel-content>
      <h3 class="text--secondary" slot="header">Результаты</h3>
      <!-- Test Completed Item -->
      <v-card>
        <v-card-actions>
          <v-layout v-for="item in dataList" :key="item.title">
            <list-item-completed :title="item.title"
                                 :percentage="item.percentage"
                                 :description="item.description"/>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
  import ListItemCompleted from '@/components/profile/ListItemCompleted'

  export default {
    name: 'completed-test-list',
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
        ]
      }
    },
    components: { ListItemCompleted }
  }
</script>

<style scoped>

</style>
