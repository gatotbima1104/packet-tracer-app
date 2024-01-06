import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class TrackerService {
  async getPacketInformation(courier: string, id: number) {
    try {
      //initiate variable
      const url = process.env.URL;
      const api = process.env.API_KEY;
      //request api
      const res = await axios.get(
        `${url}api_key=${api}&courier=${courier}&awb=${id}`,
      );
      //return
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  }
}
