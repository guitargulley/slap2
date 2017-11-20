<template>
  <div class="HelloWorld">

    <div v-for="player in players" class="player" :class="getHealthStatus(player)">

      <img :src="player.picture" alt="">
      <h1>Player: {{player.playerName}}</h1>
      <h4 v-if="player.health >= 1">Health: {{player.health}}</h4>
      <h4 v-else>DEAD</h4>
      <button :disabled="player.health <= 1" @click="slap(player)">Slap</button>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        players: [
          {
            picture: '//placehold.it/100x100',
            health: 100,
            playerName: 'Mark'
          },
          {
            picture: '//placehold.it/100x100',
            health: 100,
            playerName: 'D$'
          },
          {
            picture: '//placehold.it/100x100',
            health: 100,
            playerName: 'Jakob'
          },
          {
            picture: '//placehold.it/100x100',
            health: 100,
            playerName: 'J-Dawg'
          }
        ]
      }
    },
    methods: {
      slap(player) {
        player.health -= 25
      },
      getHealthStatus(player) {
        return {
          healthy: player.health > 75,
          dying: player.health <= 75 && player.health > 0, 
          dead: player.health <= 0
        }
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
  h1{
    color: blue
  }
</style>