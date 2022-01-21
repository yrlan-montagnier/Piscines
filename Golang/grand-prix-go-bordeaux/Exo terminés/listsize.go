package piscine

type NodeL struct {
	Data interface{}
	Next *NodeL
}

type List struct {
	Head *NodeL
	Tail *NodeL
}

func ListSize(l *List) int {
	listSize := 0
	for l.Head != nil {
		listSize++
		l.Head = l.Head.Next
	}
	return listSize
}
