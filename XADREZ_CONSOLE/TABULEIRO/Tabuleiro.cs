﻿using System;
using System.Collections.Generic;
using System.Text;

namespace XADREZ_CONSOLE.TABULEIRO
{
    class Tabuleiro
    {
        public int Linhas { get; set; }
        public int Colunas { get; set; }
        private Peca[,] Pecas;

        public Tabuleiro(int linhas, int colunas)
        {
            Linhas = linhas;
            Colunas = colunas;
            Pecas = new Peca[linhas, colunas];
        }

        public Peca AdicionarPeca(int linha, int coluna)
        {
            return Pecas[linha, coluna];
        }
    }
}
