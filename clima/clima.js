const axios = require('axios');

const getClima = async (lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=cd4a28cc0de6618c72104d8951913c33`)
    
    if( resp.data.cod === '400') {
        throw new Error(`No hay resultado para latitud:${lat}, longitud:${lng}`);
    }
    
    return resp.data.main.temp;
}

module.exports = {
    getClima
}