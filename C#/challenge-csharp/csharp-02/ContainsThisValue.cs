using System;
namespace CSharpDiscovery.Quest02
{
    public class ContainsThisValue_Exercice
    {
        public static bool ContainsThisValue(int[] tab, int value) 
        {
            if (tab is null) {
                return false;
            } 
            else {
                foreach (int i in tab) {
                    if (i == value) {
                        return true;
                    }
                }
            }
            return false;
        }
    }
}
