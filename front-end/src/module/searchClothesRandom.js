import axios from 'axios';

const url = `${process.env.REACT_APP_URL}/clothes/random_clothes`;

export function searchClothesRandom(setSearchState) {
  /*
    setSearchState(searchDataList)
  */
  axios.get(url)
  .then((res) => {
    let responseOK = res && res.status === 200 && res.statusText === 'OK';
    if (responseOK) {
      console.log(res.data);
      setSearchState(res.data);
    }
  });
}