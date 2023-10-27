const ataqueTipo = {
    mago: "magia",
    guerreiro: "espada",
    monge: "artes marciais",
    ninja: "shuriken"
}


class jornadaDoHeroi {
    constructor (tipo){
        this.nome = "heroi"
        this.idade = 25;
        this.tipo = tipo.toLowerCase();
    }

 

    atacar(){
        if(ataqueTipo.hasOwnProperty(this.tipo)){
            console.log(`O ${this.tipo} atacou usando ${ataqueTipo[this.tipo]}`)
        }else{
            console.log("Classe incorreta, Digite novamente!")
        }
        
    }
}


const ataque = new jornadaDoHeroi("Guerreiro")//Escolha entre as opções Mago, Guerreiro, monge e ninja!

ataque.atacar()
