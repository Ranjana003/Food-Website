import axios from "axios";



export const getCartByUserId = async (userId) => {
  const { data } = await axios.get(`/api/cart/${userId}`);
  return data;
};
