/**
 * 
 * Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necessarily the exact middle) 
 * of a singly linked list, given only access to that node.
 * 
 * EXAMPLE:
 * Input: the node c from the linked list a -> b-> c -> d -> e -> f
 * Result: nothing is returned, but the new linked list looks like a -> b -> d -> e -> f
 */
const deleteMiddleNode = (node) => {

    if (node === null || node.next === null) {
        return false
    }
    
    node.data = node.next.data
    node.next = node.next.next
    return true
}

/**
 * Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node. 
 * Note that the intersection is defined based on reference, not value. 
 * That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, 
 * then they are intersecting.
 */
const intersection = () => {

}

/**
 * Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.
 * Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so as to make a loop in the linked list.
 * 
 * EXAMPLE:
 * Input: A -> B -> C -> D -> E -> C [the same C as earlier]
 * Output:C
 */

const loopDetection = () => {

}

/**
 * Implement a function to check if a linked list is a palindrome.
 */
const palindrome = () => {

}

/**
 * Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x.
 * If x is contained within the list, the values of x only need to be after the elements less than x (see below).
 * The partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions.
 * 
 * EXAMPLE:
 * Input: 3 -> 5 -> 8 -> 5 -> 113 -> 2 -> 1 [partition = 5]
 * Output: 3 -> 1 -> 2 -> 113 -> 5 -> 5 -> 8
 */
const partition = () => {

}

/**
 * Write code to remove duplicates from an unsorted linked list.
 * 
 * How would you solve this problem if a temporary buffer is not allowed?
 */
const removeDups = () => {

}

/**
 * Implement an algorithm to find the kth to last element of a singly linked list.
 */
const returnKthToLast = (list, k) => {
    let p1 = list.head
    let p2 = list.head
    
    // put p1 k nodes ahead of p2
    for (let i = 0; i < k; i++) {
        // out of bounds!
        if (p1 === null) {
            return null
        }

        p1 = p1.next
    }

    
    while (p1 !== null) {
        p2 = p2.next
        p1 = p1.next
    }

    return p2
}

/**
 * You have two numbers represented by a linked list, where each node contains a
 * single digit. The digits are stored in reverse order, such that the 1's digit
 * is at the head of the list. Write a function that adds the two numbers and
 * returns the sum as a linked list.
 * 
 * EXAMPLE:
 * Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). That is, 617 + 295
 * Output: 2 - > 1 - > 9. That is, 912
 * 
 * FOLLOW UP:
 * Suppose the digits are stored in forward order. Repeat the above problem.
 * Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).That is,617 + 295
 * Output: 9 - > 1 - > 2.That is, 912
 */
const sumLists = () => {
    
}

module.exports = {
    deleteMiddleNode,
    intersection,
    loopDetection,
    palindrome,
    partition,
    removeDups,
    returnKthToLast,
    sumLists
}
