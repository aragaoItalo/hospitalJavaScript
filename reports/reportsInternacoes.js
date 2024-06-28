const Hospital = require('../src/services/Hospital');

function relatorioInternacoes(hospital) {
    try {
        const internacoes = hospital.relatorioInternacoes();

        if (!internacoes || !Array.isArray(internacoes)) {
            throw new Error('Erro: Dados de internações não foram corretamente inicializados ou não são um array.');
        }

        internacoes.forEach(internacao => {
            const pacienteNome = internacao.paciente ? internacao.paciente.nome : 'Não informado';
            const dtInternacao = internacao.dtInternacao || 'Não informada';
            const dtAlta = internacao.dtAlta || 'Não informada';
            const leitoOcupado = internacao.leitoOcupado || 'Não informado';
            const procedimentosRealizados = internacao.procedimentosRealizados ? internacao.procedimentosRealizados.join(', ') : 'Nenhum procedimento realizado';

            console.log(`Paciente: ${pacienteNome}, Data de Internação: ${dtInternacao}, Data de Alta: ${dtAlta}, Leito Ocupado: ${leitoOcupado}, Procedimentos Realizados: ${procedimentosRealizados}`);
        });
    } catch (error) {
        console.error('Erro ao gerar relatório de internações:', error.message);
    }
}

module.exports = relatorioInternacoes;

