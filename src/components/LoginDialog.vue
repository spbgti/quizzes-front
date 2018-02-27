<template>
  <v-dialog v-model="_show" max-width="500px">
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
        <v-btn color="primary" flat @click.stop="show = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
    // TODO: MAKE LOGIN DIALOG GREAT AGAIN (Do it so it works)
    export default {
      props: ['value'],
      data () {
        return {
          _show: this.value
        }
      },
      computed: {
        show: {
          set (value) {
            this._show = value
            this.$emit('input', value)
          },
          get () {
            return this._show
          }
        }
      },
      name: 'login-dialog'
    }
</script>
