<template>
  <v-container class="text-xs-center">
    <v-layout>
      <v-flex xs12>
        <div>
          <h1> Hello world! </h1>
          <img :src="imgSource" width="500px" class="media"/>
          <v-flex xs12 sm6 offset-sm3>
            <div>
              <p style="text-align: center">Lorem ipsum dolor sit amet, no eius mollis delenit eam, usu at quem odio autem, appareat conceptam voluptatibus vim ne.
                Eu duo soluta facete definitiones, volumus referrentur disputationi nam cu, recteque constituam vel ei.
                Sea ei dico facilis delectus.
                Corpora assentior ei pri, ut viris tollit graecis pri.
                Adipisci abhorreant qui ei, ei ius elitr oratio legere, id zril oportere mei.</p>
            </div>
          </v-flex>
          <v-btn large dark class="blue darken-1">Зарегистрироваться</v-btn>
          <br/>
          <a @click.stop="">Уже есть аккаунт?</a>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        imgSource: 'http://pngimg.com/uploads/student/student_PNG166.png'
      }
    }
  }
</script>

<style scoped>
  @media screen and (max-width: 600px) {
    .media {
      max-width: 250px;
    }
  }
</style>
