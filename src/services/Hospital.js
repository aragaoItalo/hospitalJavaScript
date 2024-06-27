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