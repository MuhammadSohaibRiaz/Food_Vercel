export async function getProductsByCategoryId(categoryId) {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_KEY}/products?filters[category][id][$eq]=${categoryId}&populate=image`);
  return res.data.data;
}