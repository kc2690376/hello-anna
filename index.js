console.log(1);
const giftBtn = document.getElementById('gift-btn');
const gift = document.getElementById('gift');
const button = document.querySelector('button');
const output = document.querySelector('.output')
const wowBtn = document.getElementById('wow-btn');
const laughBtn = document.getElementById('laugh-btn');
const sadBtn = document.getElementById('sad-btn');
const soundWow = document.getElementById('sound-wow');
const soundLaugh = document.getElementById('sound-laugh');
const soundSad = document.getElementById('sound-sad');

button.addEventListener('click', function() {
if (output.innerHTML === '') {
   output.innerHTML =  'ТЫ рял Крутая!';
} else {
    output.innerHTML = ''; 
}
}); 

// Приколюхи со звуками
wowBtn.addEventListener('click', () => {
    soundWow.currentTime = 0; // Сбрасываем на начало, чтобы звук играл заново при быстрых кликах
    soundWow.play();
});

laughBtn.addEventListener('click', () => {
    soundLaugh.currentTime = 0;
    soundLaugh.play();
});

sadBtn.addEventListener('click', () => {
    soundSad.currentTime = 0;
    soundSad.play();
});

// Функция для анимированного открытия подарка
giftBtn.addEventListener('click', () => {
    gift.classList.toggle('active');
    if (gift.classList.contains('active')) {
        giftBtn.textContent = '🎁 Закрыть Подарок';
    } else {
        giftBtn.textContent = '🎁 Развернуть Подарок';
    }
});
