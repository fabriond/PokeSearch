<template>
  <div class="home">
    <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      label="Search for a pokemon"
      solo-inverted
      item-text="name"
      return-object
      prepend-inner-icon="mdi-magnify"
    ></v-autocomplete>
    <v-flex row wrap justify-space-around class="mx-1 chosenList">
      <pokemon-card v-for="pokemon in chosen" :key="pokemon.id" :pokemonId="pokemon.id"/>
    </v-flex>
  </div>
</template>

<script>
// @ is an alias to /src
import PokemonCard from '../components/PokemonCard.vue'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    PokemonCard
  },
  data: () => ({
    select: null,
    search: null,
    loading: false,
    items: [],
    counter: 0
  }),
  methods: {
    validate(){
      if (this.$refs.form.validate()) {
        console.log(this.snackbar)
        this.snackbar = true
      }
    },
    querySelection(input){
      this.loading = true
      axios.get("https://pokeapi.co/api/v2/pokemon?limit=964").then((resp) => {
        this.items = resp.data.results.filter((value) => value.name.includes(input)).map((entry) => {
          let splitUrl = entry.url.split("/")
          splitUrl.pop()
          return {
            id: parseInt(splitUrl.pop()),
            name: entry.name.replace("-", " ")
          }
        })
        this.loading = false
      })
    }
  },
  computed: {
    chosen: function () { return this.$store.state.chosen }
  },
  watch: {
    search(input){
      input && this.querySelection(input)
    },
    select(result){
      if(this.$store.state.chosen.findIndex((value) => value.id === result.id) === -1){
        this.$store.state.chosen.push(result)
      }
    }
  }
}
</script>

<style>
.home{
  height: 100%;
  padding-top: 1%;
}

.v-list-item {
  text-transform: capitalize;
}
</style>
