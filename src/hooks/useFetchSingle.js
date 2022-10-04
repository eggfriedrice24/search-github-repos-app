import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const useFetchSingle = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        const { data } = await axios.get(
          `https://api.github.com/repositories/${id}`
        );
        setData(data);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    setTimeout(() => {
      fetchRepo();
    }, 2000);
  }, [id]);

  return {
    data,
    loading,
    id,
    error,
  };
};
