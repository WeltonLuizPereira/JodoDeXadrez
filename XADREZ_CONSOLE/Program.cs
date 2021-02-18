using System;
using XADREZ_CONSOLE.TABULEIRO;

namespace XADREZ_CONSOLE
{
    class Program
    {
        static void Main(string[] args)
        {
            Posicao p = new Posicao(3, 4);
            Console.WriteLine(p);
            Tabuleiro tab = new Tabuleiro(8, 8);
            Console.WriteLine(tab);
           
        }
    }
}
