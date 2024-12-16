"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Product() {
  const router = useRouter();

  return (
    <div className="font-roboto">
      <h1>Product</h1>
      <button onClick={() => router.push("/")}>Go Home</button>
      <button onClick={() => router.push("/product/1")}>View Product 1</button>
    </div>
  );
}
