new Vue({
    el: '#challenge',
    data: {
        name: 'Michael Peter',
        age: 28,
        picture: 'https://miro.medium.com/max/2876/1*MoHYZRrpQcOociJZTo83zg.png'
    },
    methods: {
        calculateAge() {
            return this.age * 3;
        },
        random() {
            return Math.random();
        }
    }
})