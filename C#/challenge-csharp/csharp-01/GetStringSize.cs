namespace CSharpDiscovery.Quest01
{
    public class GetStringSize_Exercice
    {
        public static int GetStringSize(string str)
        {
            if (str is null) {
                return 0;
            } else {
                return str.Length;
            }
        }
    }
}
