<template>
  <v-app>
    <v-toolbar dark class="orange darken-3">
      <v-toolbar-side-icon class="hidden-sm-and-up" @click.stop="navBarActive = !navBarActive"/>
      <v-toolbar-title>
        <v-icon>
          done_all
        </v-icon>
        Quizzers
      </v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn v-if="loggedIn === false" flat @click.stop="loginDialog = !loginDialog">
          <v-icon left>assignment_turned_in</v-icon>
          Login
        </v-btn>
        <v-btn flat v-else v-for="item in loggedInElements" :key="item.title">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer absolute temporary v-model="navBarActive" class="orange darken-3">
      <v-toolbar flat dark>
        <v-list class="orange darken-2">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>done_all</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              Quizzers
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider />
      <v-list dark class="orange darken-1 ">
        <v-list-tile v-if="loggedIn === false" class="mx-3" @click.stop="loginDialog = !loginDialog">
          <v-list-tile-action>
            <v-icon>assignment_turned_in</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            Login
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-else v-for="item in loggedInElements" :key="item.title"  class="mx-3" @click="">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{ item.title }}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <login-dialog absolute temporary :value="loginDialog" />
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import LoginDialog from '@/components/LoginDialog'

  export default {
    data () {
      return {
        loggedIn: false,
        loggedInElements: [
          {
            title: 'Profile', icon: 'perm_identity'
          },
          {
            title: 'Logout', icon: 'assignment_returned'

          }
        ],
        navBarActive: false,
        loginDialog: true
      }
    },
    components: { LoginDialog },
    name: 'App'
  }
</script>
