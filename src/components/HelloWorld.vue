<template>
  <div class="HelloWorld">
    <div v-for="player in players" class="player col-xs-12 col-sm-6 col-md-4" :class="getHealthStatus(player)">
      
      <img :src="player.picture" height="250px" width="auto" alt="">
      <h1>Player: {{player.playerName}}</h1>
      <h4 v-if="player.health >= 1">Health: {{player.health}}</h4>
      <h4 v-else>DEAD</h4>
      
      <button v-for="item in items" @click="addItem(item, player)">{{item.name}}</button>
      
      
      <button v-for="(val, attack) in player.attacks" :disabled="player.health <= 1" @click="slap(player, attack)">{{attack}}</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {

      }
    },
    methods: {
      slap(player, attack, item) {
        this.$store.dispatch('slap', { player, attack })
      },
      addItem(item, player){
        this.$store.dispatch('addItem', {item, player})
      },
      getHealthStatus(player) {
        return {
          healthy: player.health > 75,
          dying: player.health <= 75 && player.health > 0,
          dead: player.health <= 0
        }
      }
    },
    computed: {
      players() {
        return this.$store.state.players
      },
      items() {
        return this.$store.state.items
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .healthy {
    color: green
  }

  .dying {
    color: orange
  }

  .dead {
    color: red
  }

  h1 {
    color: blue
  }
</style>