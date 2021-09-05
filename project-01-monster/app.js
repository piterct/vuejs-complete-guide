new Vue({
    el: '#gameApp',
    data: {
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