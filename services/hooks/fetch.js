import { useQuery } from "@tanstack/react-query";
import httpService from "services/httpService";

export function useFetch(
  url,
  key,
  query = {},
  options = { refetchOnWindowFocus: true }
) {
  const fetchData = async () => {
    const { data } = await httpService.get(url, {
      params: { ...query },
    });

    return data;
  };
  return useQuery([key, query], () => fetchData(), {
    ...options,
  });
}
