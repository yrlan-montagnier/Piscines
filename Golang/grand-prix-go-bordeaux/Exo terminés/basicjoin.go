package piscine

func BasicJoin(elems []string) (s string) {
	for _, word := range elems {
		s += word
	}
	return
}
