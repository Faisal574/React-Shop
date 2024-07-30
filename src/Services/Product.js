import axiosInstance from "./apiClient";

class Product {
  async getAllProducts({pageParam}) {
    try {
      const response = await axiosInstance.get(`/products/getAllProducts?cursor=${pageParam}`);
      return response.data.data;
    } catch (error) {
      return error.message;
    }
  }

  async getAllFeaturedProducts() {
    try {
      const response = await axiosInstance.get("/products/getAllFeaturedProducts");
      return response.data.data;
    } catch (error) {
      return error.message;
    }
  }
}

export default new Product();
