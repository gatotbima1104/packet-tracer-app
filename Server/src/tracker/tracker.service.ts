import { Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class TrackerService {
  //initiate variable
  private url: string;
  private api: string;

  constructor(){
    //assign variable
    this.api = process.env.API_KEY;
    this.url = process.env.URL
  }

  async getPacketInformation(courier: string, id: number) {
    try {
      //request api
        const res = await axios.get(
          `${this.url}api_key=${this.api}&courier=${courier}&awb=${id}`,
        );
        //return
        return res.data.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getPakcetById(id: number) {
    const couriers = [
      'jne',
      'jnt',
      'jnt_cargo',
      'sicepat',
      'anteraja',
      'tiki',
      'ninja',
      'pos',
    ];

    try {
      // Checking every courier
      for (const item of couriers) {
        try {
          const res = await axios.get(
            `${this.url}api_key=${this.api}&courier=${item}&awb=${id}`,
          );
          
          // If data is found, return it
          if (res.data.data) {
            return res.data.data;
          }
        } catch (error) {
          console.log(`${item} doesn't exist currently`, error);
        }
      }
      throw new NotFoundException('Data not found for the provided ID in any courier.');
    } catch (error) {
      console.log(error)
      return {
        id,
        message: `${id} is not found !!`
      };
    }
  }

}
