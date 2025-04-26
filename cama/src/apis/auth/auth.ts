import { publicInstance } from "../axios";
import { TAuthResponse } from "./type";

export const adminLogin = async (
  id: string,
  password: string
): Promise<TAuthResponse> => {
  const response = await publicInstance.post("/users/login", {
    email: id,
    password,
  });

  return response.data.data;
};
