package piscine

func LastRune(s string) rune {

	tab := []rune(s)
	mot := 'a'
	for i := 0; i < len(tab); i++ {
		mot = tab[i]
	}
	return mot

}
