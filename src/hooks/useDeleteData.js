import baseURL from "./../Api/baseURL";

const useDeleteData = async (endpoint, params) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    }
    const res = await baseURL.delete(endpoint, config, params);

    return res.data;
    
  } catch (err) {
    console.error("Error deleting data:", err);
    throw err;
  }
};
export default useDeleteData;
