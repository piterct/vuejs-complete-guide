new Vue({
    el: '#gameApp',
    data: {
        running: false,
        playerLife: 100,
        monsterlife: 100,
        logs: []
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
            this.logs = []
        },
        attack(especial) {
            this.hurt('monsterlife', 5, 10, especial, 'Player', 'Monster', 'player');
            if (this.monsterlife > 0) {
                this.hurt('playerLife', 7, 12, false, 'Monster', 'Player', 'monster');
            }
        },
        hurt(property, min, max, especial, source, target, cls) {
            const plus = especial ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[property] = Math.max(this[property] - hurt, 0)
            this.registerLog(`${source} hit the  ${target} with ${hurt}.`, cls)
        },
        healAndHurt() {
            this.heal(10, 15)
            this.hurt('playerLife', 7, 12, false, 'Monster', 'Player', 'monster');
        },
        heal(min, max) {
            const heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100)
            this.registerLog(`Player received strength of ${heal}.`, 'player')
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value);
        },
        registerLog(text, cls) {
            this.logs.unshift({ text, cls })
        }
    },
    watch: {
        hasResult(value) {
            if (value) this.running = false
        }
    }
})