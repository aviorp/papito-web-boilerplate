import { api } from "./";

export const getVehicles = async () => {
  const { data } = await api.get("/vehicles/get-vehicles");
  return data;
};

export const createTransport = async (payload) => {
  const { data, status } = await api.post("/vehicles/new-vehicle", payload);
  return { data, status };
};
