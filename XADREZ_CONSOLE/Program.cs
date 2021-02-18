using System;
using XADREZ_CONSOLE.TABULEIRO;
using XADREZ_CONSOLE.TELA;

namespace XADREZ_CONSOLE
{
    class Program
    {
        static void Main(string[] args)
        {
            Tabuleiro tabuleiro = new Tabuleiro(8, 8);
            Tela.ImprimirTabuleiro(tabuleiro);
           
        }
    }
}
