class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        if (this.head == null) {
            this.prepend(value);
        } else {
            let temp = this.head;
            while (temp.nextNode != null) temp = temp.nextNode;
            temp.nextNode = new Node(value);
        }
    }

    prepend(value) {
        let temp = null;
        if (this.head != null) {
            temp = this.head;
        }
        this.head = new Node(value);
        this.head.nextNode = temp;
    }

    size() {
        let count = 0;
        let temp = null;

        if (this.head === null) return count;

        temp = this.head;
        count++

        while (temp.nextNode != null) {
            count++
            temp = temp.nextNode;
        }

        return count;
    }

    head() {
        return this.head;
    }

    tail() {
        let temp = this.head;
        while (temp.nextNode != null) temp = temp.nextNode;;
        return temp;
    }

    at(index) {
        let temp = this.head;
        for (let i = 1; i < index; i++) {
            temp = temp.nextNode;
        }
        if (temp == null) return "No node found at this index";
        return temp;
    }

    pop() {
        // need previous node logic
        let temp = this.head.nextNode;
        let prev = this.head;
        while (temp.nextNode != null) {
            temp = temp.nextNode
            prev = prev.nextNode;
        }
        temp.value = null;
        prev.nextNode = null;
    }

    contains(value) {
        let temp = this.head;

        while (temp != null) {
            if (temp.value === value) return true;
            temp = temp.nextNode;
        }

        return false;
    }

    find(value) {
        let temp = this.head;
        let count = 0;

        while (temp != null) {
            count++
            if (temp.value === value) return count;
            temp = temp.nextNode;
        }

        return null;
    }

    toString() {
        let temp = this.head;
        let string = "";

        if (temp != null) string = `( ${temp.value} ) -> `;
        if (temp.nextNode === null) return string;

        while (temp != null) {
            temp = temp.nextNode;
            string = string.concat(`( ${temp.value} ) -> `);
            if (temp.nextNode === null) temp = null;
        }

        return string;
    }

}

class Node {
    constructor(value) {
        this.value = value || null;
        this.nextNode = null;
    }
}

const List = new LinkedList;