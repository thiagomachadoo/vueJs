new Vue({

    el: "#desafio",
    data: {
        name: "Thiago",
        idade: 15,
        image: "http://files.cod3r.com.br/curso-vue/vue.jpg"
    },
    methods: {
      idadePor3(){
         return this.idade * 3
      },
      random(){
         return Math.random()
      }  
    },
})

