<template>
  <v-dialog v-model="internalLoginDialogActive" max-width="500px">
    <v-card>
      <v-card-title>
        <span>Dialog 3</span>
        <v-spacer></v-spacer>
        <v-menu bottom left>
          <v-btn icon slot="activator">
            <v-icon>more_vert</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile @click="">
              <v-list-tile-title></v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-card-title>
      <v-card-actions>
        <v-btn color="primary" flat @click.stop="internalLoginDialogActive=false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
    export default {
      props: ['loginDialogActive'],
      data () {
        return {
          internalLoginDialogActive: this.loginDialogActive
        }
      },
      name: 'login-dialog'
    }
</script>
