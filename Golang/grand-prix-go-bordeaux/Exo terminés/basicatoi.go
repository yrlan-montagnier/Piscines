package piscine

func BasicAtoi(s string) int {
	str := 0
	for _, v := range s {
		a := 0
		for i := '1'; i <= v; i++ {
			a++
		}
		str = str*10 + a
	}
	return str
}
