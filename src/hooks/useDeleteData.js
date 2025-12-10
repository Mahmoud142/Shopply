import baseURL from "./../Api/baseURL";



const useDeleteData = async (endpoint, params) => {
  try {
    const res = await baseURL.delete(endpoint, { data: params });
    return res;
  } catch (err) {
    console.error("Error deleting data:", err);
    throw err;
  }
};
export default useDeleteData;
