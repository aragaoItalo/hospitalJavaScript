const pessoa=require('./Pessoa')

class paciente extends pessoa{
    constructor(nome, dtNascimento, endereco, planoDeSaude){
    // método p chamar o construtor da classe herdada
    super(nome, endereco, dtNascimento)
    this.planoDeSaude=planoDeSaude
    }
}

module.exports=paciente;