/* Подставляй текст нового предсказания в .current-forecast h1 */
/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */
/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */
/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */
/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */
/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

const button = document.querySelector('.forecast-btn');
const newForecast = document.querySelector('h1');
const probabilityPercentage = document.querySelector('p');
const container = document.querySelector('.forecasts');
const forecastItem = document.querySelector('#forecast-item');

/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

function getRandomInt(min, max) {
    let number = Math.random() * (max - min) + min;
    return +number.toFixed(0);
}
button.addEventListener('click', function() {

    const forecastNumber = getRandomInt(1, 4);
    const percentage = getRandomInt(0, 100);
    let prediction = ''
    switch (forecastNumber) {
        case 1:
            prediction = "Ваши таланты будут признаны и вознаграждены по достоинству!";
            break;
        case 2:
            prediction = "Прислушайтесь к интуиции— она говорит верно!";
            break;
        case 3:
            prediction = "Все плохое будет обходить вас стороной!";
            break;
        case 4:
            prediction = "Ты сегодня везунчик!Воспользуйся этим!";
            break;
    }

    newForecast.textContent = prediction;
    probabilityPercentage.textContent = 'Вероятность, с которой предсказание сбудется: ' + percentage + '%';

    function listTemplate(title, probability) {

        const listOfPredictions = forecastItem.content.cloneNode(true);
        listOfPredictions.querySelector('h3').textContent = title;
        listOfPredictions.querySelector('p').textContent = probability;
        return listOfPredictions;
    }

    const list = listTemplate(prediction, 'Вероятность, с которой предсказание сбудется: ' + percentage + '%');
    container.prepend(list);

});