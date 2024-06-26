const Pessoa=require('./Pessoa')

class Paciente extends Pessoa{
    constructor(nome, dtNascimento, endereco, planoDeSaude){
    // método p chamar o construtor da classe herdada
    super(nome, endereco, dtNascimento)
    this.planoDeSaude=planoDeSaude
    }
}

module.exports=Paciente