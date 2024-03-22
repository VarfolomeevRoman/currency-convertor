import axios, { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

function useAxios<A, B = null>(url: string) {
  const [data, setData] = useState<A[]>([]);
  const [error, setError] = useState<B>();
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoaded(true);
        const response: AxiosResponse<A[]> = await axios(url);
        setData(response.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          const axiosError = err as AxiosError;
          console.error('Axios Error:', axiosError);
        } else {
          setError(error);
        }
      } finally {
        setLoaded(false);
      }
    };
    fetchData();
  }, [url, error]);

  return [data, error, loaded] as const;
}

export default useAxios;
