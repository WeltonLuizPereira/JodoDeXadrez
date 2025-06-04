// Funções de cálculo estatístico para o Super Simulador

export function calcularFrequencias(jogosAnteriores, totalDezenas) {
  const freq = Array(totalDezenas).fill(0);
  for (const jogo of jogosAnteriores) {
    for (const d of jogo) {
      if (d >= 1 && d <= totalDezenas) {
        freq[d - 1] += 1;
      }
    }
  }
  return freq;
}

export function calcularAtrasosAtuais(jogosAnteriores, totalDezenas) {
  const atrasos = Array(totalDezenas).fill(0);
  for (let dezena = 1; dezena <= totalDezenas; dezena++) {
    let atraso = 0;
    for (let i = jogosAnteriores.length - 1; i >= 0; i--) {
      if (jogosAnteriores[i].includes(dezena)) {
        break;
      }
      atraso++;
    }
    atrasos[dezena - 1] = atraso;
  }
  return atrasos;
}

export function calcularCoocorrencias(jogosAnteriores, totalDezenas) {
  const cooc = Array.from({ length: totalDezenas }, () =>
    Array(totalDezenas).fill(0)
  );
  for (const jogo of jogosAnteriores) {
    for (const a of jogo) {
      for (const b of jogo) {
        if (a !== b) {
          cooc[a - 1][b - 1] += 1;
        }
      }
    }
  }
  return cooc;
}

export function topNNumeros(freq, n) {
  const pares = freq.map((valor, idx) => ({ dezena: idx + 1, valor }));
  pares.sort((a, b) => b.valor - a.valor);
  return pares.slice(0, n).map((p) => p.dezena);
}
