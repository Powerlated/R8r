let input = document.getElementById('textinput');
input.addEventListener('input', event => {
    if (input instanceof HTMLInputElement) {
        let val = input.value;

        // Allow range 0-100
        let pct = Math.abs(hashCode(val) % 101);

        setResult(
            `${val} is: 
            ${pct}% gay.`
        );
    }
});

let result = document.getElementById('result');
/**
 * @param {string} s 
 */
function setResult(s) {
    result.innerText = s;
}

/**
 * @param {string} s 
 */
function hashCode(s) {
    let h = 0;
    if (s.length > 0) {
        for (let i = 0; i < s.length; i++) {
            h = 31 * h + s.charCodeAt(i);
            h &= 0xFFFFFFFF;
        }
    }
    return h;
}