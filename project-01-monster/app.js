new Vue({
    el: '#gameApp',
    data: {
        running: false,
        playerLife: 100,
        monsterlife: 100,
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterlife == 0
        }
    },
    methods: {
        startGame() {
            this.running = true
            this.playerLife = 100
            this.monsterlife = 100
        }
    },
    watch: {

    }
})