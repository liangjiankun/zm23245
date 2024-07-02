document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelector('#myButton');
    button.addEventListener('click', () => {
        alert('ボタンがクリックされました！');

        // 計算を行う
        const sqrt2 = Math.sqrt(2);
        const sqrt3 = Math.sqrt(3);
        const sumSqrt = sqrt2 + sqrt3;

        let divideByZero1, divideByZero2;
        try {
            divideByZero1 = 1 / 0;
        } catch (e) {
            divideByZero1 = e.message;
        }

        try {
            divideByZero2 = 0 / 0;
        } catch (e) {
            divideByZero2 = e.message;
        }

        // 結果を表示する
        const resultsDiv = document.querySelector('#results');
        resultsDiv.innerHTML = `
            <p>2の平方根と3の平方根の和: ${sumSqrt}</p>
            <p>1を0で割るとどうなるか: ${divideByZero1}</p>
            <p>0を0で割るとどうなるか: ${divideByZero2}</p>
        `;
    });
});
