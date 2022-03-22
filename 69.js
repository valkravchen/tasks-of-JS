const hasSpecialChars = (str) => /* проверяет содержание специальных символов в строке */;

const isStrongPassword = (password) => {
    const length = password.length;
    // Скобки задают приоритет. Понятно что к чему относится.
    return (length > 8 && length < 20) || hasSpecialChars(password);
};
