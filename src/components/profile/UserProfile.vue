<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <!-- User Dashboard Controller -->
        <account-dashboard :flatness="false" class="hidden-xs-only" />
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 md6 class="pr-1 py-2">
        <!-- User Test Pending -->
        <pending-test-list  />
      </v-flex>
      <v-flex xs12 md6 class="pl-1 py-2 hidden-xs-only">
        <!-- User Test Completed -->
        <completed-test-list  />
      </v-flex>
    </v-layout>
    <v-layout class="hidden-sm-and-up" row>
        <v-flex xs12 md6 class="py-2">
        <!-- User Test Completed -->
        <completed-test-list title="Результаты тестов" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import AccountDashboard from '@/components/profile/AccountDashboard'
  import PendingTestList from '@/components/profile/PendingTestList'
  import CompletedTestList from '@/components/profile/CompletedTestList'

  export default {
    name: 'user-profile',
    components: {
      AccountDashboard,
      PendingTestList,
      CompletedTestList
    }
  }
</script>

<style scoped>

</style>
