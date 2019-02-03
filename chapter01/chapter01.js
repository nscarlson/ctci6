/**
 * Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */
const isUniqueChars = (str) => {
    const characters = []

    // O(n) = n, where n is the length of str
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        const charCode = char.charCodeAt(0)

        if (characters[charCode]) {
            return false
        } else {
            characters[charCode] = true
        }
    }
    return true
}

/**
 * There are three types of edits that can be performed on strings: insert a character,
 * remove a character, or replace a character. Given two strings, write a function to check if they are
 * one edit (or zero edits) away.
 * 
 * EXAMPLES:
 * 
 * pale, ple -> true
 * pales, pale -> true
 * pale, bale -> true
 * pale, bae -> false
 */
const oneEditAway = () => {

}

/**
 * Given a string, write a function to check if it is a permutation of a
 * palindrome. A palindrome is a word or phrase that is the same forwards and
 * backwards. A permutation is a rearrangement of letters. The palindrome does
 * not need to be limited to just dictionary words. 
 * 
 * EXAMPLE: 
 * Input: Tact coa 
 * Output: True (permutation: "taco cat", "atco cta", etc . )
 */
const palindromePermutation = () => {
    
}

/**
 * Given two strings, write a method to decide if one is a permutation of the other.
 */
const permutation = (str1, str2) => {
    const charCounts = []

    if (str1.length !== str2.length) {
        return false
    }

    for (let char of [...str1]) {
        const charCode = char.codePointAt(0)

        if (!charCounts[charCode]) {
            charCounts[charCode] = 1
        } else {
            charCounts[charCode]++
        }
    }

    for (let char of [...str2]) {
        const charCode = char.codePointAt(0)

        if (!charCounts[charCode]) {
            return false
        } else {
            charCounts[charCode]--
        } 
        
    }

    return true

}

/**
 * Given an image represented by an NxN matrix, where each pixel in the image is 4
 * bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
 */
const rotateMatrix = () => {

}

/**
 * Implement a method to perform basic string compression using the counts
 * of repeated characters.
 * 
 * If the "compressed"string would not become smaller than the original string, your method should return
 * the original string. You can assume the string has only uppercase and lowercase letters (a - z).
 * 
 * EXAMPLE: 
 * 'aabcccccaaa' -> a2blc5a3
 */
const stringCompression = () => {
    
}

/**
 * Assume you have a method i5Substring which checks if one word is a substring of another.
 * Given two strings, 51 and 52, write code to check if 52 is a rotation of 51 using only one call to isSubstring.
 * 
 * EXAMPLE:
 * "Uwaterbottleu" is a rotation of "uerbottlewatU"
 */
const stringRotation = () => {

}

/**
 * Write a method to replace all spaces in a string with'%20'. You may assume that
 * the string has sufficient space at the end of the string to hold the additional
 * characters, and that you are given the "true" length of the string. 
 * (Note: if implementing in Java, please use a character array so that you can perform this operation in place.)
 * 
 * EXAMPLE:
 * "Mr John Smith    " -> "Mr%20John%20Smith"
 */
const urlify = (str, length) => {
    // Since we assume the string has sufficient space at the end
    // we can slice to the length parameter
    let result = str.slice(0, length)

    for (let i = 0; i < result.length; i++) {
        result = result.replace(/\ /g, '%20')
    }

    return result
}

/**
 * Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.
 */
const zeroMatrix = () => {

}

module.exports = {
    isUniqueChars,
    oneEditAway,
    palindromePermutation,
    permutation,
    rotateMatrix,
    stringCompression,
    stringRotation,
    urlify,
    zeroMatrix
}
