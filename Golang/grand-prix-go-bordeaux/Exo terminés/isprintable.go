package piscine

func IsPrintable(s string) bool {
	if len(s) > 0 {
		for _, letter := range s {
			if letter > 0 && letter < 32 {
				return false
			}
		}
		return true
	} else {
		return false
	}
}
