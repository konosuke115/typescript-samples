import axios from 'axios';

export {};

let url: string =
  'http://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(response => {
  //let data: any[] = response.data;
  interface Articles {
    id: number;
    title: string;
    description: string;
  }
  let data: Articles[] = response.data;
  console.log(data);
});
