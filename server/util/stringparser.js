const dataParser = (data) => {
    return data.split(/ {2,9999}/);
};

const processDataParser = (dataBuffer) => {
    return dataBuffer.split('\n').map(data => {
        return dataParser(data)
    });
};

module.exports = processDataParser;


