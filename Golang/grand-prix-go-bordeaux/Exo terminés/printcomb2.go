package piscine

import "github.com/01-edu/z01"

func PrintComb2() {
	for n := '0'; n <= '9'; n++ {
		for m := '0'; m <= '9'; m++ {
			for o := '0'; o <= '9'; o++ {
				for p := '0'; p <= '9'; p++ {
					if (n < o || (n <= o && m <= p)) && !(n == o && m == p) {
						z01.PrintRune(n)
						z01.PrintRune(m)
						z01.PrintRune(' ')

						z01.PrintRune(o)
						z01.PrintRune(p)
						if !(n == '9' && m == '8' && o == '9' && p == '9') {
							z01.PrintRune(',')
							z01.PrintRune(' ')
						}
					}
				}
			}
		}
	}
	z01.PrintRune('\n')
}
