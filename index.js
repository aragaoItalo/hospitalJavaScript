const Paciente=require('./src/models/Paciente');
const Funcionario=require('./src/models/Funcionario');
const Internacao=require('./src/models/Internacao');
const Hospital=require('./src/services/Hospital');
const relatorioPacientes=require('./reports/reportsPacientes');
const relatorioFuncionarios=require('./reports/reportsFuncionarios');
const relatorioInternacoes=require('./reports/reportsInternacoes');

const hospital = new Hospital();

// Cadastro de Pacientes
const paciente1 = new Paciente("Lucas Aragão", "Rua A, 123", "07/09/2013", "Plano A");
hospital.cadastrarPaciente(paciente1);

// Cadastro de Funcionários
const medico1 = new Funcionario("Dra. Lucelia", "Rua B, 789", "13/06/1977", "Pediatria", "Médica");
hospital.cadastrarFuncionario(medico1);

// Cadastro de Internações
const internacao1 = new Internacao(paciente1, "20/06/2024", "28/06/2024", "Leito 1", ["Cirurgia", "Exames"]);
hospital.cadastrarInternacao(internacao1);

// Geração de Relatórios
console.log("Relatório de Pacientes:");
console.log(gerarRelatorioPacientes(hospital));

console.log("Relatório de Funcionários:");
console.log(gerarRelatorioFuncionarios(hospital));

console.log("Relatório de Internações:");
console.log(gerarRelatorioInternacoes(hospital));
