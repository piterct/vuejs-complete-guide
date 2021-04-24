new Vue({
    el: '#challenge03',
    data: {
        value: 0
    },
    computed: {
        result() {
            return this.value == 37 ? 'Value is equal 37' : 'Value is different from 37'
        }
    },
    watch: {
        result() {
            setTimeout(() => {
                this.value = 0
            }, 5000)
        }
    }
});