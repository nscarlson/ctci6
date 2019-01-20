function Node(data) {
    this.data = data
    this.next = null   
}

function SinglyList() {
    this.head = null
}

SinglyList.prototype.add = function(data) {
    let end = new Node(data)

    if (this.head === null) {
        this.head = end
        
        return this
    }

    let node = this.head

    while (node.next !== null) {
        node = node.next
    }

    node.next = end
       
    return this
}

SinglyList.prototype.delete = function(head, data) {
    const node = head

    // head deleted, move head
    if (node.data === data) {
        return head.next;
    }

    while (node.next !== null) {
        if (node.next.data === d) {
            node.next = node.next.next

            return head
        }
    }

    return head
}


module.exports = SinglyList
