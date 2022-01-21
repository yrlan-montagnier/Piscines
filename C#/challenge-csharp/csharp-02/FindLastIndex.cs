using System;
namespace CSharpDiscovery.Quest02
{
    public class FindLastIndex_Exercice
    {
        public static int? FindLastIndex(int[] tab, int a)
        {
        if (tab is null) {
            return null;
        } 
        for (int i = 0; i < tab.Length; i++) {
            if (tab[i] == a) {
                return Array.LastIndexOf(tab, a);
            }
        }
        return null;
        }
    }
}
