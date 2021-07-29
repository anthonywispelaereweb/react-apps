import config from "../constants/index";
// import { useState } from 'react';
const apiFetch = async (requestConfig) => {
  try {
    const response = await fetch(config.url + requestConfig.path, {
      method: requestConfig.method ? requestConfig.method : "GET",
      headers: requestConfig.headers ? requestConfig.headers : {},
      body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
    });
    if (!response.ok) {
      throw new Error("Aucunes informations trouvés");
    }
    const data = await response.json();
    // console.log("requestConfig data", data);
    return data;
  } catch (error) {
    // console.log("erreur", error);
    return { apiError: error.message };
  }
};

export default apiFetch;
