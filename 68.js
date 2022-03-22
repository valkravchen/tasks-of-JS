const isStrongPassword = (password) => {
    const length = password.length;
    return length > 8 && length < 20;
};