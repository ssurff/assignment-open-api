import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CoffeeService {
  private apiUrl = 'https://api.sampleapis.com/coffee';

  async getHotCoffee() {
    try {
      const response = await axios.get(`${this.apiUrl}/hot`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch hot coffee data');
    }
  }

  async getIcedCoffee() {
    try {
      const response = await axios.get(`${this.apiUrl}/iced`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch iced coffee data');
    }
  }
}
