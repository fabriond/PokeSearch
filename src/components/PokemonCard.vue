<template>
  <v-card class="pokemon-card" color="dark green" v-if="pokemon" width="200px">
    <v-img :src="pokemon.sprites.front_default"/>
    <v-card-title>{{pokemon.name.replace("-", " ")}}</v-card-title>
    <v-card-actions>
      <v-btn icon color="red" @click="remove">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'pokemon-card',
  components: {
    
  },
  props: {
    pokemonId: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    pokemon: null
  }),
  methods: {
    getPokemon(){
      console.log(this)
      axios.get("https://pokeapi.co/api/v2/pokemon/" + this.pokemonId).then((resp) => {
        this.pokemon = resp.data
      })
    },
    remove(){
      this.$store.state.chosen = this.$store.state.chosen.filter((value) => value.id !== this.pokemon.id)
    }
  },
  beforeMount() {
    this.getPokemon()
  }
}
</script>

<style>
.pokemon-card{
  text-transform: capitalize;
  margin: 10px;
}
</style>