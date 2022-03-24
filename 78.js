const getTypeOfSentence = (sentence) => {
    let sentenceType;
    // Добавилось отрицание
    // Содержимое else переехало в if и наоборот
    if (!sentence.endsWith('?')) {
        sentenceType = 'General';
    } else {
        sentenceType = 'Question';
    }

    return `${sentenceType} sentence`;
};