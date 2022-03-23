const isPalindrome = (word) => {
    const lowerWord = word.toLowerCase();
    return lowerWord === reverse(lowerWord);
};

const isNotPalindrome = (word) => !isPalindrome(word);