import { calcularFrequencias, calcularAtrasosAtuais } from './statistics.js';

export function calcularPontuacaoAposta(aposta, statsGlobais, configJogo) {
  const { frequencias } = statsGlobais;
  return aposta.reduce((total, d) => total + (frequencias[d - 1] || 0), 0);
}

export function categorizarAposta(pontuacao) {
  if (pontuacao > 100) return 'alta';
  if (pontuacao > 50) return 'media';
  return 'baixa';
}

export function analisarJogos(jogos, configJogo) {
  const frequencias = calcularFrequencias(jogos, configJogo.maxNumber);
  const atrasos = calcularAtrasosAtuais(jogos, configJogo.maxNumber);
  return { frequencias, atrasos };
}
