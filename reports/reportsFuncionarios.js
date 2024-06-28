const Hospital=require('../src/services/Hospital')

function relatorioFuncionarios(hospital) {
    const funcionarios=hospital.relatorioFuncionarios()
    funcionarios.forEach(funcionario => {
        console.log(`Nome: ${funcionario.nome}, Endereço: ${funcionario.endereco}, Data de Nascimento: ${funcionario.dtNascimento}, Especialidade: ${funcionario.especialidade}, Função: ${funcionario.funcao}`)
    });
}

module.exports=relatorioFuncionarios;