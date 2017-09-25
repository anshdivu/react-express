import axios from 'axios';

export default { getItems, createItem };

function getItems() {
  return axios
    .get('/list')
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      return [];
    });
}

function createItem(item) {
  return axios
    .post('/list', { item: item })
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      return [];
    });
}
