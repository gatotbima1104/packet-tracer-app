import axios from "axios";

const API_KEY = process.env.NEXT_API_KEY_PACKET;
const API_BASE_URL = "https://api.binderbyte.com/v1";

const client = axios.create({
  baseURL: API_BASE_URL,
  params: { api_key: API_KEY },
});

export const seacrhPacket = async (query: string) => {
  try {
    const response = await client.get("/tracker", {
      params: { query },
    });
    if (response.data && response.data.results) {
      return response.data.results;
    } else {
      console.error("data tidak ada");
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};
