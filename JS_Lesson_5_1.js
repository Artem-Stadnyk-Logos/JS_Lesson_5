function makeBuffer() {
   let text = '';

    return function (add_text) {
        if (add_text === undefined){
            return text
        } 
        text += add_text;
    }
}
let buffer = makeBuffer();
buffer('JavaScrip');
buffer('Вчити');
buffer('Потрібно!');
alert (buffer());

let buffer2 = makeBuffer();
buffer2(0);
buffer2(1);
buffer2(0);

alert(buffer2());