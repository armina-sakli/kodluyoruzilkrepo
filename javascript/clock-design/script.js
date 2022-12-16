const days = [ "Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
const kullanici = prompt('Lutfen adinizi giriniz:');
const clock = document.querySelector('.clock');
const a = document.querySelector('.kullanici');
a.innerHTML = kullanici;

const tick = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const day = days[now.getDay()];
    const html = `
    <span>${hours}</span> : 
    <span>${minutes}</span> :
    <span>${seconds}</span> :
    <span>${day}</span>`;
    clock.innerHTML = html;
};

setInterval(tick, 1000);

