const Hospital=require('../src/services/Hospital')

function relatorioInternacoes(hospital) {
    const internacoes=hospital.relatorioInternacoes()
    internacoes.forEach(internacao => {
        console.log(`Paciente: ${internacao.paciente.nome}, Data de Internação: ${internacao.dtInternacao}, Data de Alta: ${internacao.dtAlta}, Leito Ocupado: ${internacao.leitoOcupado}, Procedimentos Realizados: ${internacao.procedimentosRealizados.join(', ')}`);
    })
}

module.exports=relatorioInternacoes;
