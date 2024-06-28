const pessoa=require('./Pessoa')

class funcionario extends pessoa{
    constructor(nome, dtNascimento, endereco, especialidade, funcao){
        super(nome, dtNascimento, endereco)
        this.especialidade=especialidade
        this.funcao=funcao
    }
}

module.exports=funcionario;