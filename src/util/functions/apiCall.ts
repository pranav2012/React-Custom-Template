import { API_TIMEOUT } from "@data/constants";
import axios from "axios";
import https from "https";

interface apiProps {
  endPoint: string;
  type?: string;
  body?: object;
  mainApi?: boolean;
}

axios.defaults.httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

export const makeRequest = async (props: apiProps) => {
  const { endPoint, type = "GET", body, mainApi = true } = props;

  const baseUrl = mainApi
    ? process.env.NEXT_PUBLIC_MAIN_API
    : process.env.NEXT_PUBLIC_SECONDARY_API;

  const config = {
    method: type,
    url: `${baseUrl}${endPoint}`,
    data: body,
    timeout: API_TIMEOUT,
  };

  try {
    const response: any = await axios(config);
    if (response.status !== 200)
      return {
        success: false,
        message: {
          code: response.message.code,
          text: response.response.statusText,
        },
      };
    return await response.data;
  } catch (err: any) {
    return {
      success: false,
      message: err,
    };
  }
};
