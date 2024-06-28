//Classe base
class pessoa {
    constructor (nome, dtNascimento, endereco){
        this.nome=nome
        this.dtNascimento=dtNascimento
        this.endereco=endereco
    }
}

module.exports=pessoa;

//module.exports utilizado para exportar classes
//exports utilizado para obj e funcoes 