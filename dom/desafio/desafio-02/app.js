new Vue({
    el: '#desafio',
    data: {
        valor : ""
    },
    methods: {
        exibirAlerta(){
            alert("salve fml")
        },
        alteralValor(event){
            this.valor = event.target.value
        }
    },  

})