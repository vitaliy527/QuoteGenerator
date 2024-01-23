

let images = [
            '1.png',
            '2.png',
            '3.png',
            '4.png',
            '5.png',
            '6.png',
        ]
let begining = [
            'Кто рано встает, ',
        'Не бойся ошибаться, ',
        'Когда меня рожали, ',
        'Каждый может кинуть камень в волка, ',
        'Нельзя стоять, когда другие работают, ',
        'Иногда, жизнь — это жизнь, ',
        ]
let ending = [
            'тот потом пожалеет о своем решении.',
        'собственно, тогда я и родился.',
        'но не каждый может кинуть волка в камень.',
        'надо лежать.',
        'а ты в ней — иногда.',
        'бойся не ошибаться.',
        ]
        
function randomQuote(){
    let image = document.getElementById("image1");
    let quote = document.getElementById("quote");
    let randomBegining = getRandomElement(begining);
    let randomEnding = getRandomElement(ending);
    let randomImg = getRandomElement(images);

    let randomQuote = randomBegining + randomEnding;
    
    hide()
    function getRandomElement(array){
        let index = Math.floor(Math.random() * array.length)
        return array[index]
    }
    function hide() {
        image.classList.remove('show');
        quote.classList.remove('show');
        // Показывает следующие цитату и изображение с задержкой в пол секунды, чтобы успел сработать transition
        setTimeout(show, 500);
    }
    
    // Показывает новые цитату и изображение 
    function show() {
        // Проверяет кол-во символов в тексте. Если их меньше 48, то меняет шрифт и выравнивает текст по центру, иначе - стандартные стили
        if (randomQuote.length <= 48) {
            quote.style.fontSize = '42px';
            quote.style.justifyContent = 'center';
        } else {
            quote.style.fontSize = '';
            quote.style.justifyContent = '';
        }
    
        image.src = 'images/' + randomImg;
        quote.textContent = randomQuote
    
        image.classList.add('show');
        quote.classList.add('show');
    }
}

