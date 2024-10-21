function other() {
    return 'другое';
}


function check(a = function other() { return 'other'}()) {
    console.log(a);
}

console.log(check('')); 