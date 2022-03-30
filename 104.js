function squareArea(A){
    let circum = 4 * A;
    let radius = circum / (2 * Math.PI);
    let area = Math.pow(radius, 2);
    return Math.round(area*100)/100
}