function makeBuffer (){
    let text = '';
    function buffer (add_text){
    if (add_text === undefined){
        return text;
    }
    text += add_text;
};

buffer.clear = function () {
    text = "";
}
return buffer;
}

let buffer = makeBuffer ();
buffer('Тест ');
buffer('тебе не зїсть');
alert ( buffer() );

buffer.clear ();

alert ( buffer() );
