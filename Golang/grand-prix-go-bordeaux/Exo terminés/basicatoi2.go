package piscine

func BasicAtoi2(s string) int {
	str := 0
	for _, v := range s {
		if int(rune(v)) > 47 && int(rune(v)) < 58 {
			a := 0
			for i := '1'; i <= v; i++ {
				a++
			}
			str = str*10 + a
		} else {
			return 0
		}
	}
	return str
}

