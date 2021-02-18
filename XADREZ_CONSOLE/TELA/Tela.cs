using System;
using System.Collections.Generic;
using System.Text;
using XADREZ_CONSOLE.TABULEIRO;
using XADREZ_CONSOLE.TELA;

namespace XADREZ_CONSOLE.TELA
{
    class Tela
    {
        public static void ImprimirTabuleiro(Tabuleiro tabuleiro)
        {
            for (int i = 0; i < tabuleiro.Linhas; i++)
            {
                for (int j = 0; j < tabuleiro.Colunas; j++)
                {
                    if (tabuleiro.AdicionarPeca(i, j) == null)
                    {
                        Console.Write("- ");
                    }
                    else
                    {
                        Console.Write(tabuleiro.AdicionarPeca(i, j) + " ");
                    }                  
                }
                Console.WriteLine();
            }
        }
    }
}
