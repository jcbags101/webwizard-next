"use client";
import { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      // Simulate a fetch call
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
      <p className="text-gray-600 mt-4">
        Welcome to the Web Wizard Admin Dashboard.
      </p>
    </>
  );
}
