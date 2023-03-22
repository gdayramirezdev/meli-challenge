import axios from 'axios';

export default class ApiService {
  async getItems(q: string){
    try {
      const response = await axios(`${process.env.api}/items?q=${q}`);
      const data = response.data;
      return data;
    } catch (error) {
      console.warn(error);
      return {
        showError: true
      }
    }
  }

  async getItem(id: string){
    try {
      const response = await axios(`${process.env.api}/items/${id}`);
      const data = response.data;
      return data;
    } catch (error) {
      console.warn(error);
      return {
        showError: true
      }
    }
  }
}