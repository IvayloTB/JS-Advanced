function encodeAndDecodeMessages() {
    const [encodeArea, decodeArea] = document.querySelectorAll("textarea");
    const [encodeBtn, decodeBtn] = document.querySelectorAll('button');

    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);

    function encode() {
        let encodedText = "";
        const text = encodeArea.value;

        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            encodedText += String.fromCharCode(char.charCodeAt(0) + 1);
        }
        decodeArea.value = encodedText;
        encodeArea.value = "";
    }

    function decode() {
        let decodeText = '';
        const text = decodeArea.value;

        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            decodeText += String.fromCharCode(char.charCodeAt(0) - 1);
        }

        decodeArea.value = decodeText;
        
    }

}