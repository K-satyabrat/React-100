import axios, { AxiosError, isAxiosError } from "axios";

export const Get = async (url) => {
  try {
    const res = await axios.get(url);
    console.log(res);

    const data = res.data;

    return {
      status: res.status,
      data,
      error: null,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error);
      return {
        error: error.status,
        message: error.message,
      };
    }
    return {
      status: 500,
      error: error.message || "something is not right",
    };
  }
};
export const Post = async (url, payload = {}) => {
  try {
    const res = await axios.post(url, payload);
    console.log(res);

    const data = res.data;

    return {
      status: res.status,
      data,
      error: null,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error);
      return {
        error: error.status,
        message: error.message,
      };
    }
    return {
      status: 500,
      error: error.message || "something is not right",
    };
  }
};
