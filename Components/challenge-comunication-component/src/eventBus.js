import Vue from 'vue'
export default new Vue({
    methods: {
        setSelectedUser(user) {
            this.$emit('selectedUser', user)
        },
        onSelectedUser(callback) {
            this.$on('selectedUser', callback)
        }
    }
})