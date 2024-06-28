const hospital=require('../src/services/Hospital')

function relatorioPacientes(hospital) {
    const pacientes=hospital.relatorioPacientes()
    pacientes.forEach(paciente => {
        console.log(`Nome: ${paciente.nome}, Endereço: ${paciente.endereco}, Data de Nascimento: ${paciente.dtNascimento}, Plano de Saúde: ${paciente.planoDeSaude}`);
    });
}

module.exports=relatorioPacientes;