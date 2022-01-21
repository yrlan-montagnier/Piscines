package piscine

func IterativeFactorial(nb int) int {
	result := 1

	if nb < 0 || nb > 25 {
		return 0
	}
	for i := 1; i < nb+1; i++ {
		result = result * i

	}
	return result
}
