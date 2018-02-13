function bouncer(arr) {
    function arrayFilter(value) {
        var bNoParam = new Boolean();
        var bZero = new Boolean(0);
        var bNull = new Boolean(null);
        var bEmptyString = new Boolean('');
        var bfalse = new Boolean(false);
        if (value != bfalse || value != bEmptyString || value != bNull || bZero != bZero || bNoParam != value) {
            return value;
        }
    }
    return arr.filter(arrayFilter);
}

bouncer([7, "ate", "", false, 9]);
