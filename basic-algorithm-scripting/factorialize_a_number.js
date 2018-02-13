function factorialize(num) {
    var result = 1;
    for (var i = 1; i < num + 1; i++) {
        result *= i;
    }
    return result;
}

factorialize(5);
