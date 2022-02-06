import { api } from "./";

export const getTransports = async () => {
  const { data } = await api.get("/transports/get-transports");
  return data;
};

export const createTransport = async (payload) => {
  const { data, status } = await api.post("/transports/new-transport", payload);
  return { data, status };
};
