// Fecha objetivo para la cuenta regresiva
const targetDate = new Date("Oct 23, 2024 21:00:00").getTime();

// Función para actualizar la cuenta regresiva
function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Cálculo de días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Actualizar los elementos HTML
    document.getElementById("days").innerText = days === 0 ? "00" : days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours === 0 ? "00" : hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes === 0 ? "00" : minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds === 0 ? "00" : seconds < 10 ? "0" + seconds : seconds;

    // Si la cuenta regresiva ha terminado
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00" ;
    }
}

// Actualizar la cuenta regresiva cada segundo
const interval = setInterval(updateCountdown, 1000);
