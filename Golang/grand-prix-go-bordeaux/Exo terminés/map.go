package piscine

func Map(f func(int) bool, arr []int) []bool {
	longueur := 0

	for i := 0; i < len(arr); i++ {
		longueur = i + 1
	}

	arr_bool := make([]bool, longueur)

	for i, a := range arr {
		arr_bool[i] = f(a)
	}

	return arr_bool
}
