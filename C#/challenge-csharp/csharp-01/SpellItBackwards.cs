namespace CSharpDiscovery.Quest01

{
    public class SpellItBackwards_Exercice
    {
        public static string SpellItBackward(string str)
        {
            char[] strArray = str.ToCharArray();  
            for (int i = 0, j = str.Length - 1; i < j; i++, j--) {  
                char c = strArray[i];  
                strArray[i] = strArray[j];  
                strArray[j] = c;  
            }
            return new string(strArray);  
        }
    }
}
