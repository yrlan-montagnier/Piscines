package piscine

func SortWordArr(array []string) {
	len := 0

	var s string
	for range array {
		len++
	}
	for i := 0; i < len-1; i++ {
		for j := 0; j < len-i-1; j++ {

			if array[j] >= array[j+1] {
				s = array[j]
				array[j] = array[j+1]
				array[j+1] = s
			}
		}
	}
}
