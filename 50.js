const isGoodApartment = (area, street) => {
    const result = area >= 100 || (area >= 80 && street === 'Main Street');
    return result;
};