<template>
  <v-card :flat="flatness" width="100%">
    <v-card-title class="hidden-xs-only">
      <h2 class="text--secondary">Профиль</h2>
    </v-card-title>
    <v-card-actions>
      <v-layout row>
        <v-flex class="text-xs-center">
          <v-avatar :size="64"
                    class="grey lighten-4 mx-5 my-1">
            <img src="../../assets/logo.png" />
          </v-avatar>
          <h3 class="text--primary">{{ user.name }}</h3>
          <h5 class="blue--text text--lighten-1">{{ user.username }}</h5>
          <h4 class="orange--text">{{ user.email }}</h4>
        </v-flex>

      </v-layout>
      <v-layout row>
        <v-spacer class="hidden-xs-only"/>
        <v-flex>
          <!-- TODO: Процент по конкретнму предмету -->
          <h5 class="text--secondary my-3 mx-2">Процент:</h5>
          <v-progress-circular
            :size="64"
            :width="8"
            :rotate="360"
            :value="60"
            color="primary"
          >
            ??
          </v-progress-circular>
        </v-flex>
      </v-layout>
    </v-card-actions>
  </v-card>
</template>

<script>
    export default {
      props: ['flatness'],
      data () {
        return {
          user: ''
        }
      },
      name: 'user-dashboard',
      //  TODO: REQUEST USER INFO HERE
      created () {
        this.$http.get('https://jsonplaceholder.typicode.com/users/1').then(
          response => {
            this.user = response.body
            console.log(response.body)
          },
          error => {
            console.log(error)
          }
        )
      }
    }
    //  TODO: Refactor in DRY standarts
</script>

<style scoped>

</style>
