import axios from 'axios';
export function bookListRequest(categoryId, pageNumber, userId) {
  return axios.get(`/pustaka/book/getbooklist/${categoryId}/${pageNumber}/${userId}`).then(res => {
    if (res.data.response) {
      console.log("response is ", res);
    }
  });
}