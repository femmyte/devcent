import { useQuery } from "@tanstack/react-query";
import httpService from "services/httpService";

const endPoint = "/api";

export function useFetch(api, key, query = {}) {
  const fetchData = async () => {
    const { data } = await httpService.get(endPoint + api, {
      params: { ...query },
    });

    return data;
  };
  return useQuery([key, query], () => fetchData());
}
