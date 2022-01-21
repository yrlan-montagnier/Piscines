package piscine

func RecursiveFactorial(nb int) int {
	result := 0

	if nb < 0 || nb > 25 {
		result = 0

	} else if nb > 0 {
		result = nb * RecursiveFactorial(nb-1)
		return result

	} else if nb == 0 {
		result = 1
	}
	return result
}
