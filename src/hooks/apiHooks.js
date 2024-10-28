import axios from "axios";
import { useEffect, useState } from "react";




export const useApiHooks = (url, params) => {
  const [data, setData] = useState();
  const getData = async () => {
    try {
      const response = await axios.get(url, { params: params });
      setData(response.data);
    } catch (err) {

    }

  }

  useEffect(() => {
    getData();

  }, []);


  return data;


}




