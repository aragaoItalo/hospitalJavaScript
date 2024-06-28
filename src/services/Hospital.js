const Paciente = require('../models/Paciente');
const Funcionario = require('../models/Funcionario');
const Internacao = require('../models/Internacao');

class Hospital {
    constructor() {
        this.pacientes = [];
        this.funcionarios = [];
        this.internacoes = [];
    }

    cadastrarPaciente(novoPaciente) {
        this.pacientes.push(novoPaciente);
    }

    consultarPaciente(nome) {
        return this.pacientes.find(paciente => paciente.nome === nome);
    }

    atualizarPaciente(nome, novosDados) {
        const paciente = this.consultarPaciente(nome);
        if (paciente) {
            Object.assign(paciente, novosDados);
        }
    }

    excluirPaciente(nome) {
        this.pacientes = this.pacientes.filter(paciente => paciente.nome !== nome);
    }

    cadastrarFuncionario(novoFuncionario) {
        this.funcionarios.push(novoFuncionario);
    }

    consultarFuncionario(nome) {
        return this.funcionarios.find(funcionario => funcionario.nome === nome);
    }

    atualizarFuncionario(nome, novosDados) {
        const funcionario = this.consultarFuncionario(nome);
        if (funcionario) {
            Object.assign(funcionario, novosDados);
        }
    }

    excluirFuncionario(nome) {
        this.funcionarios = this.funcionarios.filter(funcionario => funcionario.nome !== nome);
    }

    cadastrarInternacao(novaInternacao) {
        this.internacoes.push(novaInternacao);
    }

    consultarInternacao(pacienteNome) {
        return this.internacoes.find(internacao => internacao.paciente.nome === pacienteNome);
    }

    atualizarInternacao(pacienteNome, novosDados) {
        const internacao = this.consultarInternacao(pacienteNome);
        if (internacao) {
            Object.assign(internacao, novosDados);
        }
    }

    excluirInternacao(pacienteNome) {
        this.internacoes = this.internacoes.filter(internacao => internacao.paciente.nome !== pacienteNome);
    }

    relatorioPacientes() {
        return this.pacientes;
    }

    relatorioFuncionarios() {
        return this.funcionarios;
    }

    relatorioInternacoes() {
        return this.internacoes;
    }
}

module.exports = Hospital;