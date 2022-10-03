import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    return {
      user: { id: 3, name: "Silas", email: "silas@silas.com" },
    };

    const response = await api.post("/validate", { token });
    return response.data;
    
  },
  singin: async (email: string, password: string) => {
    return {
      user: { id: 3, name: "Silas", email: "silas@silas.com" },
      token: "123456789",
    };

/*     const response = await api.post("/singn", { email, password });

    return response.data; */
  },
  logout: async () => {
    return { status: true}
    const response = await api.post("/logout");
    return response.data;
  },
});
