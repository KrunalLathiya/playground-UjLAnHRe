new Vue({
    el: '#editable',
    data: {
        text1: 'Edit me!'
    }
})

new Vue({
    el: '#reverse',
    data: {
        text2: 'Tech.io Vue.js Template'
    },
    methods: {
        reverseMessage: function () {
            this.text2 = this.text2.split('').reverse().join('')
        }
    }
})

