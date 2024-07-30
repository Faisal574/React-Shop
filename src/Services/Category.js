import axiosInstance from "./apiClient";

class Category {
  async getAllCateories() {
    try {
      const response = await axiosInstance.get("categories/getAllCategories");
      return response.data.data;
    } catch (error) {
      return error.message;
    }
  }

  async getAllCategoryProducts({pageParam},catId, catSubId, price) {
    try {
      const response = await axiosInstance.get(
        `/categories/getAllCategoryProducts/${catId}/${catSubId}/${price}?cursor=${pageParam}`);

      return response.data.data;
    } catch (error) {
      return error.message;
    }
  }

  async singleProduct(productId,catId,catSubId) {
    try {
      const response = await axiosInstance.get(
        `/categories/singleProduct/${productId}/${catId}/${catSubId}`);

      return response.data.data;
    } catch (error) {
      return error.message;
    }
  }
}

export default new Category();
