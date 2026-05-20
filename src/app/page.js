"use client";

import { useEffect, useState } from "react";

import axios from "axios";
import DashboardLayout from "@/components/layout/DashboardLayout";

import DashboardStats from "@/components/dashboard/DashboardStats";

import StockChart from "@/components/dashboard/StockChart";

import CategoryChart from "@/components/dashboard/CategoryChart";

import InventoryTable from "@/components/table/InventoryTable";

export default function Home() {
  const [products, setProducts] =
  useState([]);

const [loading, setLoading] =
  useState(true);

  useEffect(() => {

  const fetchProducts = async () => {

    try {

      const response =
        await axios.get(
          "/api/products?page=1&limit=200"
        );

      setProducts(
        response.data.products
      );

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  fetchProducts();

}, []);

const totalSKUs = products.length;

const inventoryValue =
  products.reduce(
    (total, product) =>
      total +
      product.price * product.stock,
    0
  );

const outOfStock =
  products.filter(
    (product) => product.stock === 0
  ).length;

  return (
    <DashboardLayout>

      <div className="space-y-8">

        {/* Heading */}
        <div>
          <h1 className="text-4xl font-bold text-slate-800">
            Aura Enterprise Engine
          </h1>

          <p className="text-slate-500 mt-2">
            Inventory Management Dashboard
          </p>
        </div>

        {/* Stats */}
        <DashboardStats
  totalSKUs={totalSKUs}
  inventoryValue={inventoryValue}
  outOfStock={outOfStock}
/>

        {/* Charts */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

         <StockChart products={products} />

        <CategoryChart products={products} />

        </div>
        
        {/* Inventory Table */}
        <InventoryTable
  products={products}
/>

      </div>

    </DashboardLayout>
  );
}