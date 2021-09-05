new Vue({
    el: '#gameApp',
    data: {
        running: false,
        playerLife: 100,
        monsterlife: 0,
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterlife == 0
        }
    },
    methods: {

    },
    watch: {

    }
})