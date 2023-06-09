import { useQuery } from "@tanstack/react-query";
import httpService from "services/httpService";

const endPoint = "/api";

export function useFetch(api, key, query = {}) {
  return useQuery([key, query], () =>
    httpService.get(endPoint + api, {
      params: { ...query },
    })
  );
}
