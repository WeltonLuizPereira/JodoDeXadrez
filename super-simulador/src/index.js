import { megaSenaRawData } from '../data/megaSenaRawData.js';
import { lotofacilRawData } from '../data/lotofacilRawData.js';
import { gameConfigs } from './gameConfigs.js';
import { analisarJogos, calcularPontuacaoAposta, categorizarAposta } from './analysis.js';
import { topNNumeros } from './statistics.js';

function exibirResultados(nome, jogos, config) {
  const stats = analisarJogos(jogos, config);
  const topN = topNNumeros(stats.frequencias, config.topN);
  console.log(`--- ${nome} ---`);
  console.log('Top', config.topN, 'dezenas:', topN.join(','));
  const apostaExemplo = topN.slice(0, config.numbersPerBet);
  const pont = calcularPontuacaoAposta(apostaExemplo, stats, config);
  const cat = categorizarAposta(pont);
  console.log('Aposta exemplo:', apostaExemplo.join(','));
  console.log('Pontuação:', pont, '- classificação:', cat);
  console.log();
}

exibirResultados('Mega-Sena', megaSenaRawData, gameConfigs.megasena);
exibirResultados('Lotofácil', lotofacilRawData, gameConfigs.lotofacil);
