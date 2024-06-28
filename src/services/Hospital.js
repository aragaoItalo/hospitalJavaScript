const Paciente=require('../models/Paciente')
const Funcionario=require('../models/Funcionario')
const Internacao=require('../models/Internacao')

class Hospital{
    constructor(){
        this.pacientes = []
        this.funcionarios = []
        this.internacoes = []
        
    }
}

//CRUD p pacientes, funcionarios e internações

//Método para o paciente
cadastrarPaciente(paciente){
    this.pacientes.push(paciente)
}
consultarPaciente(nome){
    return this.pacientes.find(paciente=>paciente.nome === nome)
}
atualizarPaciente(nome, novosDados){
    const paciente=this.consultarPaciente(nome)
    if(paciente){
        Object.assign(paciente, novosDados)
    }
}
excluirPaciente(nome){
    this.pacientes=this.pacientes.filter(paciente=>paciente.nome !== nome)
}

//Método para o Funcionário
cadastrarFuncionario(funcionario){
    this.funcionarios.push(funcionario)
}
consultarFuncionario(nome){
    return this.funcionarios.find(funcionario=>funcionario.nome === nome)
}
atualizarFuncionario(nome, novosDados){
    const funcionario=this.consultarFuncionario(nome)
    if(funcionario){
        Object.assign(funcionario, novosDados)
    }
}
excluirFuncionario(nome){
    this.funcionarios=this.funcionarios.filter(funcionario=>funcionario.nome !== nome)
}

//Método para as Internações 
cadastrarInternacao(internacao){
    this.internacoes.push(internacao)
}
consultarInternacao(pacienteNome){
    return this.internacoes.filter(internacao=>internacao.paciente.nome === pacienteNome)
}
atualizarInternacao(pacienteNome, novosDados){
    const internacoes= this.consultarInternacao(pacienteNome)
    internacoes.forEach(internacao=>Object.assign(internacao, novosDados));
}
excluirInternacao(pacienteNome){
    this.internacoes=this.internacoes.filter(internacao=>internacao.paciente.nome !== pacienteNome)
}


// RELATÓRIOS

gerarRelatorioPacientes(){
    return this.pacientes
}
gerarRelatorioFuncionarios(){
    return this.funcionarios
}
gerarRelatorioInternacoes(){
    return this.internacoes
}


module.exports=Hospital