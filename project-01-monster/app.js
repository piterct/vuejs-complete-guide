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
        },
        attack(especial) {
            this.hurt('monsterlife', 5, 10, especial);
            this.hurt('playerLife', 7, 12, false);
        },
        hurt(property, min, max, especial) {
            const plus = especial ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[property] = Math.max(this[property] - hurt, 0)
        },
        healAndHurt() {
            this.heal(10, 15)
            this.hurt('playerLife', 7, 12, false);
        },
        heal(min, max) {
            const heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100)
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value);
        }
    },
    watch: {
        hasResult(value) {
            if (value) this.running = false
        }
    }
})