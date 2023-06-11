import { useEffect, useState } from "react";
import httpService from "services/httpService";

const useCustomFetch = (api) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await httpService.get(api);
        setData(response.data);
      } catch (error) {
        setError(error);
      }

      setLoading(false);
    };

    fetchData();
  }, [api]);

  return { data, isLoading, error };
};

export default useCustomFetch;
