"use client";
import { useEffect, useState } from "react";

type InstructorInterface = {
  id: number;
  name: string;
  email: string;
};

export default function Instructors() {
  const [instructors, setInstructors] = useState<InstructorInterface[]>([]);

  useEffect(() => {
    const fetchInstructors = async () => {
      const res = await fetch("/api/instructors");
      const data = await res.json();
      setInstructors(data);
    };

    fetchInstructors();
  }, []);

  return (
    <div className=" p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Instructors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {instructors.map((instructor) => (
          <div
            key={instructor.id}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-gray-900">
              {instructor?.name}
            </h2>
            <p className="text-gray-700">{instructor?.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
