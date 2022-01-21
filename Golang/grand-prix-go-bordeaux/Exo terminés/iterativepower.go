package piscine

func IterativePower(nb int, power int) int {

	if power == 0 && nb == 0 {
		return 1
	}
	if power < 0 {
		return 0
	}
	if power == 0 {
		return 1
	}

	if power > 1 {
		power--
		return nb * IterativePower(nb, power)
	} else {
		return nb
	}
}
