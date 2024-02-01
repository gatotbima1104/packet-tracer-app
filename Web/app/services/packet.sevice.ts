import axios from "axios";
import { IPackage } from "../constant/api";

const API_BASE_URL = "https://packet-tracker-api-production.up.railway.app";

const client = axios.create({
  baseURL: API_BASE_URL,
});

export const seacrhPacket = async (params?: IPackage) => {
  try {
    let query = "";

    if (params) {
      const queryParams: string[] = [];

      let key: keyof typeof params;
      for (key in params) {
        queryParams.push(`${key}=${params[key]}`);
      }

      query = queryParams.join("&");
    }

    const url = query ? `/tracker/id?${query}` : "/tracker/id";

    const response = await client.get(url);

    return response.data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
