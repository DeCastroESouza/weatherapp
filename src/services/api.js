const KEY = '3b0d886d4caa4e09b5c213230221810';
const fetchData = async (city) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;
    const fetchResponse = await fetch(url);
    const data = fetchResponse.json();
    return data;
};

export default fetchData;