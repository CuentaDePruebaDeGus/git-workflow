function division(divisor, dividendo) {
    if(divisor > 0) {
        return dividendo / divisor
    } else {
        throw new Error('no se puede dividir por 0')
    }
}