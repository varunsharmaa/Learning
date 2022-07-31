class LinkedList {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

class MeargeLinkedList {

    static merge(firstList, secondList) {

        let sortedList = new LinkedList(-1);
        let head = sortedList;
        while (firstList || secondList) {
            console.log(firstList);
            if (firstList && secondList && (firstList.value < secondList.value)) {
                sortedList.next = firstList;
                sortedList = sortedList.next;
                firstList = firstList.next
            }
            else {
                if (firstList && secondList && (firstList.value > secondList.value)) {
                    sortedList.next = secondList;
                    sortedList = sortedList.next;
                    secondList = secondList.next
                }
                else {
                    if (firstList) {
                        sortedList.next = firstList;
                        sortedList = sortedList.next;
                        firstList = firstList.next
                    }
                    if (secondList) {
                        sortedList.next = secondList;
                        sortedList = sortedList.next;
                        secondList = secondList.next
                    }
                }
            }

        }

        return JSON.stringify(head.next);
    }


}

const list1 = {
    value: 2,
    next: {
        value: 8,
        next: {
            value: 14,
            next: {
                value: 22,
                next: null
            }
        }
    }
}

const list12 = {
    value: 2,
    next: {
        value: 2,
        next: {
            value: 10,
            next: {
                value: 11,
                next: {
                    value: 23,
                    next: {
                        value: 35,
                        next: null
                    }
                }
            }
        }
    }
}

console.log('Merged Linked List:', MeargeLinkedList.merge(list1, list12));