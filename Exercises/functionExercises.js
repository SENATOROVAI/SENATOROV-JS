function areArraysSame(a, b) {
    for(let i = 0; i < a.length; i++){
        if (a.length != b.length) {
            alert("array false");
            break;
        }
        if (a[i] != b[i]) {
            alert("Array False");
            return;
        }
        if (a[i] === b[i]) {
            alert("array true");
        }
    }
}
areArraysSame([1,2,2],[1,2,2]);
