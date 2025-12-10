import baseUrl from "../Api/baseURL";

const useUpdateDataWithImage = async (endpoint, params) => {
  try {
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    const res = await baseUrl.put(endpoint, params, config);
    return res;
  } catch (err) {
    console.error("Error updating data:", err);
    throw err;
  }
};

const useUpdateData = async (endpoint, params) => {
  try {
    const res = await baseUrl.put(endpoint, params);
    return res;
  } catch (err) {
    console.error("Error updating data:", err);
    throw err;
  }
};

export { useUpdateDataWithImage, useUpdateData };
