namespace CSharpDiscovery.Quest02
{
    public class AreEquals_Exercice
    {
        public static bool AreEquals(int[] tab1, int[] tab2)
        {
        // On initialise une variable de type bool
        bool isArrayEqual = true;
        // Si la longueur du 1er tableau est égale à celle du deuxième
		if (tab1.Length == tab2.Length) {
			for (int i = 0; i < tab2.Length; i++) {
                // Si un élément du tableau n'est pas le même, variable isArrayEqual = false
				if (tab2[i] != tab1[i]) {
					isArrayEqual = false;
				}
			}
		} 
        // Si la length des 2 tableaux n'est pas la même --> variable isArrayEqual = false
        else {
			isArrayEqual = false;
		}
        // Si aucun isArrayEqual = false, la fonction renvoie vrai
		if (isArrayEqual) {
            return true;
        // Sinon elle renvoie faux
		} else {
            return false;
		}
        }
    }
}
