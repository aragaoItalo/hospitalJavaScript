const Pessoa=require('./Pessoa')

class Funcionario extends Pessoa{
    constructor(nome, dtNascimento, endereco, especialidade, funcao){
        super(nome, dtNascimento, endereco)
        this.especialidade=especialidade
        this.funcao=funcao
    }
}

module.exports=Funcionario;