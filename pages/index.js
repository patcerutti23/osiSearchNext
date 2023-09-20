"use client";

import { useEffect, useState } from "react";

export default function App() {
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/myApi", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ terms: "shoulder" }),
    })
      .then((response) => response.json())
      .then((result) => {
        setResult(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1>3rd-Party API Data</h1>
      {result ? (
        <pre>{JSON.stringify(result, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
