namespace CSharpDiscovery.Quest01
{
    public class DoubleArrayForEvenInteger_Exercice
    {
        public static int[] DoubleArrayForEvenInteger(int[] inputTab)
        {
            int index = 0;
            foreach(int i in inputTab) {
                if (i%2 == 0) {
                    index += 1;
                    continue;
                } else {
                    inputTab[index] = i * 2 ;
                    index += 1;
                }
            }
            return inputTab;
        }
    }
}