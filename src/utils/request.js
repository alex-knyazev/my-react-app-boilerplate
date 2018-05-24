async function get(url, headersOptions = {}) {
  const requestResult = [
    'Витька Подберезкин',
    'Сашка Свистоплясов',
    'Максимка Пулеметов',
    'Санька Водавхаткин',
  ];
  return {
    data: requestResult,
  };
}

const request = {
  get,
};

export default request;
