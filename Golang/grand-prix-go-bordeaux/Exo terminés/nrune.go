package piscine

func NRune(s string, n int) rune {
	tab := []rune(s)
	mot := 0
	mot2 := 0

	for i := range tab {
		mot = i + 1
	}
	if n > mot {
		return 0
	}
	if n <= 0 {
		return 0
	}
	for i := 0; i < n; i++ {
		mot2 = i

	}
	return tab[mot2]
}
