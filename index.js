// Базовый URL для API OpenWeatherMap
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('weather-form'); // Проверьте, что это правильный ID формы
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращение стандартной отправки формы
    const city = document.getElementById('city-input').value; // Проверьте, что это правильный ID ввода
    console.log(city); // Вывод города в консоль для тестирования
    // Используйте обратные кавычки для интерполяции переменной city
    document.getElementById('city-name').textContent = city;
    const queryParams = `?q=${city}&appid=50a2813579c0f0272db53ec9c2709981&units=metric`;

    // Соединение базового URL и параметров запроса
    const url = baseUrl + queryParams;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById('temperature').textContent = data.main.temp + '°C';
        // Получение и отображение описания погоды
        const weatherDescription = data.weather[0].description;
        document.getElementById('precipitation').textContent = weatherDescription;
        console.log(data); // Вывод данных о погоде в консоль для проверки
        const imageElement = document.getElementById('image');
        if (data.main.temp < 10) {
          imageElement.src = './img/cloud.png';
        }
        else if (data.main.temp > 10){
          imageElement.src = './img/clear.png';
        }
      });
    // Продолжение работы с переменной 'city'
  });
});
