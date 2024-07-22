"use client";
import { useState, useEffect } from "react";

const useFetchServers = () => {
  const [serversData, setServersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServersData = async () => {
      try {
        let response = await import("../devfiles/dummy_server_list.json"); // dummy fetch
        setServersData(response.default);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchServersData();
  }, []);

  return { serversData, isLoading, error };
};

export default useFetchServers;
