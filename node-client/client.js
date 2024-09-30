// client.js
const axios = require('axios');

const hitApi = async () => {
    try {
        const response = await axios.get('http://api-container:3000/hello');
        console.log('Response from API:', response.data);
    } catch (error) {
        console.error('Error hitting API:', error);
    }
};

hitApi();
