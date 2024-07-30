import axiosInstance from "./apiClient";

class Carts {
   addToCart(cart) {
    const response = axiosInstance.post(`/carts/addTocart`,cart);
    return response;
  }

  getCartItems() {
    const response = axiosInstance.get(`/carts/getCartItems`);
    return response;
  }

  updateCart(data) {
    const response = axiosInstance.put(`/carts/updateCart`,data);
    return response;
  }

  deleteCart(id) {
    const response = axiosInstance.delete(`/carts/deleteCart/${id}`);
    return response;
  }
}

export default new Carts();
