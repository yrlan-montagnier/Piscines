package piscine

func StrRev(s string) string {
	runes := []rune(s)
	long := 0
	for i := range runes {
		long = i
	}
	for i, j := 0, long; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}
	return string(runes)
}
