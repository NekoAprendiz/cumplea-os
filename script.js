const countdown = () => {
    const countDate = new Date('september 5, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (gap <= 0) {
        clearInterval(interval);
        document.getElementById('timer').innerText = "¡Tiempo cumplido!";
        document.getElementById('startButton').style.display = 'block';
    }
};

const interval = setInterval(countdown, 1000);




document.addEventListener('DOMContentLoaded', () => {
    const contador = document.getElementById('contador');
    const lluvia = document.getElementById('lluvia');
    const capa1 = document.getElementById('capa1');
    const capa2 = document.getElementById('capa2');
    const capa3 = document.getElementById('capa3');
    const moneda = document.getElementById('moneda');

    lluvia.addEventListener('click', () => {
        let puntos = parseInt(contador.textContent);
        puntos++;
        contador.textContent = puntos;
        moneda.play();

        if (puntos === 3) {
            capa1.style.display = 'none';
            level.play();

        }
        if (puntos === 5) {
            capa2.style.display = 'none';
            level.play();

        }
        if (puntos === 7) {
            capa3.style.display = 'none';
            level.play();

        }
    });
});





