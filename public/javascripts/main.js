const submitBtn = document.getElementById('submitBtn');
const cityname = document.getElementById('cityname');
const city_name = document.getElementById('city_name');
const description = document.getElementById('description');
const Alert = document.getElementById('alert');
const temp_real_value = document.getElementById('temp_real_value');
const temp_status = document.getElementById('temp_status');


const main_layer = document.querySelector('.main_layer');
const middle_layer = document.querySelector('.middle_layer');
const lower_layer = document.querySelector('.status');
const top_layer = document.querySelector('.top_layer');

const today_day = document.getElementById('day');
const today_date = document.getElementById('today_date');

const today = new Date();
const day = today.getDay();
const weekday = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thr",
    "Fri",
    "Sat"
]
const month = today.getMonth();
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
]
const date = today.getDate();


submitBtn.addEventListener('click', async(event) => {
    console.log(api_key);
    let cityVal = cityname.value;
    if (cityVal === "") {
        Alert.innerHTML = "Please Enter any City Name before search"
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=f8cf5085af2b67783d1c72b275df1dd4&units=metric`
            const response = await fetch(url);
            const data = await response.json();
            const objdata = [data];
            temp_real_value.innerText = objdata[0].main.temp;
            city_name.innerHTML = `${objdata[0].name},${objdata[0].sys.country}`;
            temp_status.innerText = objdata[0].weather[0].main;
            // Temperature status....
            const tempmood = temp_status.innerText;
            // const tempmood = 'clear';
            if (tempmood === 'Clouds') {
                temp_status.innerHTML = `<i class="fa-solid fa-cloud fa-2x" style = "color:skyblue"></i>`
            } else if (tempmood === 'Sunny' || tempmood === 'Clear') {
                temp_status.innerHTML = `<i class="fa-solid fa-sun fa-2x" style="color:yellow"></i>`
            } else if (tempmood === 'Snow') {
                temp_status.innerHTML = `<i class="fa-solid fa-snowflake fa-2x" style="color:white"></i>`
            } else if (tempmood === 'Rain') {
                temp_status.innerHTML = `<i class="fa-solid fa-cloud-hail fa-2x" style="color:grey"></i>`
            } else if (tempmood === 'Haze') {
                temp_status.innerHTML = `<i class="fa-solid fa-rainbow fa-2x" style="color:#FF0000"></i>`
            } else if (tempmood === "Thunderstorm") {
                temp_status.innerHTML = `<i class="fa-solid fa-cloud-bolt fa-2x" style="color:skyblue"></i>`
            }
            middle_layer.classList.add('data_hide');
            // main_layer.classList.remove('data_hide')
            today_day.innerText = weekday[day];
            today_date.innerText = date + " " + months[month]

        } catch {
            Alert.innerHTML = "Please Enter City Name Properly"
            middle_layer.classList.remove('data_hide')
            temp_real_value.innerText = '0';
            city_name.innerHTML = "City Name"
                // main_layer.classList.add('data_hide')

        }

    }
})