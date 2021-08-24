import { useQuery } from 'react-query'

export const useGetEpisodes = () => {
  const { data, status } = useQuery("episodes", () =>
    fetch("https://finalspaceapi.com/api/v0/episode/").then((res) => res.json())
  );

  return { data, status }
}
