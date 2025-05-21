export async function getProductsByCategoryId(categoryId) {
  const res = await axios.get(`${API_URL}/products?filters[category][id][$eq]=${categoryId}&populate=image`);
  return res.data.data;
}