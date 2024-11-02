"use client";
import Aggregator from "@/components/SIgnupPage/Aggregator";
import Consumer from "@/components/SIgnupPage/Consumer";
import Farmer from "@/components/SIgnupPage/Farmer";
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
