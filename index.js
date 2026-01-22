function add(a, b){
    return a + b
}
function sub(a, b){
    if(!(a>b)) throw new Error('num shoukld be greater than b')
    return a - b
}

add(2, 4)
add(10, 23)
add(20, 5)
sub(3-1)