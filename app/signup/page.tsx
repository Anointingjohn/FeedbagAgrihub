"use client";

import Aggregator from "@/components/SignupPage/Aggregator";
import Consumer from "@/components/SignupPage/Consumer";
import Farmer from "@/components/SignupPage/Farmer";
import React, { useEffect, useState } from "react";

export default function Signup() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    const selectedCategory = localStorage.getItem("selectedCategory");
    if (selectedCategory) {
      setSelectedCategory(selectedCategory);
    }
  }, []);
  return (
    <div>
      {selectedCategory === "Farmer" ? (
        <Farmer selectedCategory={selectedCategory} />
      ) : selectedCategory === "Aggregator" ? (
        <Aggregator selectedCategory={selectedCategory} />
      ) : selectedCategory === "Consumer" ? (
        <Consumer selectedCategory={selectedCategory} />
      ) : null}
    </div>
  );
}
