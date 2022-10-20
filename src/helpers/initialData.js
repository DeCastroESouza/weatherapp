const initialData = {
    location: {
        name: 'London',
        region: 'City of London, Greater London',
        country: 'United Kingdom',
        /*            "lat": 51.52,
                    "lon": -0.11,
                    "tz_id": "Europe/London",
                    "localtime_epoch": 1666155264,
                    "localtime": "2022-10-19 5:54" */
    },
    current: {
        /* "last_updated_epoch": 1666154700,
        "last_updated": "2022-10-19 05:45", */
        temp_c: 13.0,
        /* "temp_f": 55.4,
        "is_day": 0, */
        condition: {
            text: 'Clear',
            icon: '//cdn.weatherapi.com/weather/64x64/night/113.png',
            /* "code": 1000 */
        },
        /* "wind_mph": 10.5,
        "wind_kph": 16.9,
        "wind_degree": 80,
        "wind_dir": "E",
        "pressure_mb": 1023.0,
        "pressure_in": 30.21,
        "precip_mm": 0.0,
        "precip_in": 0.0,
        "humidity": 82,
        "cloud": 0,
        "feelslike_c": 11.2,
        "feelslike_f": 52.2,
        "vis_km": 10.0,
        "vis_miles": 6.0,
        "uv": 1.0,
        "gust_mph": 18.3,
        "gust_kph": 29.5 */
    },
};

export default initialData;
