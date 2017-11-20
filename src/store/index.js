import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)



function addMods(player) {
    debugger
    var total = 1;
    for (var i = 0; i < player.items.length; i++) {
        var item = player.items[i];
        total += item.modifier
    }
    return total
}



export default new Vuex.Store({
    state: {
        // THIS IS THE LOCAL COPY OF ALL DATA FOR THE APPLICATION
        players: [
            {
                picture: 'https://timedotcom.files.wordpress.com/2015/01/mark-wahlberg-marky-mark.jpg',
                health: 100,
                playerName: 'Mark',
                attacks: {
                    slap: 1,
                    kick: 5
                },
                items: []
            },
            {
                picture: 'https://static.giantbomb.com/uploads/scale_small/0/6865/229647-flava_flav.0.jpg',
                health: 100,
                playerName: 'D$',
                attacks: {
                    punch: -5,
                    haduken: -1000
                },
                items: []
            },
            {
                picture: 'http://thecount.com/wp-content/uploads/Jake-from-State-Farm-did-he-die-400x364.jpeg',
                health: 100,
                playerName: 'Jakob',
                attacks: {
                    tickle: -100
                },
                items: []
            },
            {
                picture: 'http://media.tmz.com/2016/12/15/1215-pitbull-tmz-8.jpg',
                health: 10,
                playerName: 'J-Dawg',
                attacks: {
                    flu: 10000
                },
                items: []
            }
        ],
        items: [

            {
                name: 'flame',
                modifier: .8
            },
            {
                name: 'spike',
                modifier: .5
            },
            {
                name: 'shield',
                modifier: -.3
            },

        ]


    },
    mutations: {
        // FUNCTIONS THAT CAN CHANGE THE STATE
        slap(state, payload) {
            // DATA MUTATION
            payload.player.health -= payload.player.attacks[payload.attack] * addMods(payload.player)
            payload.player.items = []
        },
        addItem(state, payload) {
            payload.player.items.push(payload.item)
        },

    },
    actions: {
        // FUNCTIONS THAT REQUESTS TO CHANGE DATA
        slap({ commit, dispatch }, payload) {
            // BUSINESS LOGIC
            if (payload.player.health > 0) {
                // ALLOW THE SLAP
                commit('slap', payload)
            } else {
                // YOU MONSTER
                console.log('nope')
            }
        },
        addItem({ commit, dispatch }, payload) {
            if (payload.player.items.indexOf(payload.item) == -1) {
                commit('addItem', payload)
            }

        }

    }

})