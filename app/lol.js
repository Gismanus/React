let symbol = '#';
function piramid(a){
    for (let i = 0; i < a; i++) {
        console.log(symbol);
        symbol += '#';
    }
}

piramid(10);