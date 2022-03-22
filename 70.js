const isGoodApartment = (area, street) => {
    // Через переменную, чтобы функция была не слишком длинной
    const result = area >= 100 || (area >= 80 && street === 'Main Street');
    return result;
};