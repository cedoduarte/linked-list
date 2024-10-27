class Node {
    next
    value

    constructor(next, value) {
        this.next = next;
        this.value = value;
    }
}

let node = new Node(null, 0);

function append(node, value) {
    let iNode = node;
    while (iNode.next != null) {
        iNode = iNode.next;
    }
    iNode.next = new Node(null, value);
}

for (let i = 1; i <= 10; i++) {
    append(node, i);
}

function print(node) {
    let iNode = node;
    while (iNode != null) {
        console.log(iNode.value);
        iNode = iNode.next;
    }
}

print(node);