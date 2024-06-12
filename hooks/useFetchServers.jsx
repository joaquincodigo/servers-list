"use client";
import { useState, useEffect } from "react";

const useFetchServers = () => {
  const [serversData, setServersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServersData = async () => {
      try {
        // Simulated fetch request, replace with actual API call
        const response = await import("../devfiles/dummy_server_list.json"); // Replace with actual fetch API call

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
