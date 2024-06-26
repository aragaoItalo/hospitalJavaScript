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