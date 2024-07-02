document.addEventListener('DOMContentLoaded', (event) => {
    const heading = document.querySelector('h1');
    heading.addEventListener('click', () => {
        alert('見出しがクリックされました！');
    });
});
