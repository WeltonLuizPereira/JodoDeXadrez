﻿using System;
using System.Collections.Generic;
using System.Text;
using XADREZ_CONSOLE.TABULEIRO;

namespace XADREZ_CONSOLE.TABULEIRO
{
    class Peca
    {
        public Posicao Posicao { get; set; }
        public Cor Cor { get; set; }
        public int QuantidadeDeMovimentos { get; set; }
        public Tabuleiro Tabuleiro { get; set; }

        public Peca(Posicao posicao, Cor cor, Tabuleiro tabuleiro)
        {
            Posicao = posicao;
            Cor = cor;
            Tabuleiro = tabuleiro;
            QuantidadeDeMovimentos = 0;
        }
    }
}
