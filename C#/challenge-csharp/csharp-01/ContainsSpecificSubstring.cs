namespace CSharpDiscovery.Quest01
{
    public class ContainsSpecificSubstring_Exercice
    {
        public static bool ContainsSpecificSubstring(string str, string pattern)
        {
            if (str.Contains(pattern)) {
                return true;
            } else {
                return false;
            }
        }
    }
}
