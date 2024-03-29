import axios from "axios";

export const userRegister = (data) => {
  return async (dispatch) => {
    const config = {
      headers: {
        Accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "Content-Type": `multipart/form-data`,
      },
    };
    try {
      const response = await axios.post(
        "/api/Temp/user-register",
        data,
        config
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
};
