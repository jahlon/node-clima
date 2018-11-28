const axios = require('axios');

const getLugarLatLng = async (direccion) => {
    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`);

    if( resp.data.status === 'ZERO_RESULTS' ) {
        throw new Error(`No hay resultado para la dirección ${direccion}`);
    }

    let addr = resp.data.results[0].formatted_address;
    let lat = resp.data.results[0].geometry.location.lat;
    let lng = resp.data.results[0].geometry.location.lng;

    return {
        direccion: addr,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}
