package main

import (
	"os"

	"github.com/01-edu/z01"
)

func printStr(str string) {
	arrayStr := []rune(str)
	arrayStrLength := 0
	for range str {
		arrayStrLength++
	}

	for i := 0; i < arrayStrLength; i++ {
		z01.PrintRune(arrayStr[i])
	}
	z01.PrintRune('\n')
}

func isEven(nbr int) bool {
	if nbr%2 == 0 {
		return true
	} else {
		return false
	}
}

func main() {
	lengthOfArg := 0
	EvenMsg := "I have an even number of arguments"
	OddMsg := "I have an odd number of arguments"

	for range os.Args[1:] {
		lengthOfArg++
	}

	if isEven(lengthOfArg) {
		printStr(EvenMsg)
	} else {
		printStr(OddMsg)
	}
}
