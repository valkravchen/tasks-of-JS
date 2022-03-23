const getTypeOfSentence = (sentence) => {
    const lastChar = sentence[sentence.length - 1];
    if (lastChar === '?') {
        return 'question';
    }

    return 'general';
};

getTypeOfSentence('Hodor');  // general
getTypeOfSentence('Hodor?'); // question