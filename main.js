 // API Key iyo URL-kisa
        const apiKey = 'fdd5ed1a5b55a624d76036cf6df3b3b6';
        const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

        const searchBox = document.querySelector('#city');
        const searchBtn = document.querySelector('#search-btn');
        const weatherIcon = document.querySelector('#weather-icon');

        // Shaqada raadinta xogta cimilada
        async function checkWeather(city) {
            if (!city) {  // Haddii magaalada la gelin, muujin farriin
                alert("Please enter city-name!");
                return;
            }

            // Isku day in la helo xogta cimilada ee magaalada
            const response = await fetch(`${apiUrl}${city}&units=metric&appid=${apiKey}`);
            const data = await response.json();  // Iska bedel xogta JSON

            if (data.cod === 200) {
                // Soo bandhig xogta cimilada
                document.querySelector('#city-name').innerHTML = ` ${data.name}`;
                document.querySelector('#temp').innerHTML = ` ${Math.round(data.main.temp)}°C`;
                document.querySelector('#humidity').innerHTML = ` ${data.main.humidity}%`;
                document.querySelector('#wind').innerHTML = ` ${data.wind.speed} km/h`;

                
                if (data.weather[0].main === 'Clouds') {
                    weatherIcon.src = '/images/clouds.png';
                } else if (data.weather[0].main === 'Clear') {
                    weatherIcon.src = '/images/clear.png';
                } else if (data.weather[0].main === 'Rain') {
                    weatherIcon.src = '/images/rain.png';
                } else if (data.weather[0].main === 'Drizzle') {
                    weatherIcon.src = '/images/drizzle.png';
                } else if (data.weather[0].main === 'Mist') {
                    weatherIcon.src = '/images/mist.png';
                }
            } else {  // Haddii aan la helin magaalada
                alert("Magaalada lama helin, fadlan hubi magaca.");
            }
        }


        searchBtn.addEventListener("click", () => {
            checkWeather(searchBox.value);
        });