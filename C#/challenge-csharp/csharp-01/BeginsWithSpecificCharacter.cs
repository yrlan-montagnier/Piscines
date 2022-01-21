namespace CSharpDiscovery.Quest01
{
    public class BeginsWithSpecificCharacter_Exercice
    {
        public static bool BeginsWithSpecificCharacter(string str, char begin)
        {
            string first = str.Substring(0,1);
            if (first.Contains(begin)) {
                return true;
            } else {
                return false;
            }
        }
    }
}
