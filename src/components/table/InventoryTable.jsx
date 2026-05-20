"use client";

import { useMemo, useState, useEffect } from "react";

// import { products } from "@/data/products";
import axios from "axios";

import TableToolbar from "./TableToolbar";

import Pagination from "./Pagination";

import { saveAs } from "file-saver";
import TableSkeleton from "./TableSkeleton";

export default function InventoryTable() {
  const [search, setSearch] = useState("");

  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [category, setCategory] = useState("All");

  const [stockLimit, setStockLimit] = useState(1000);

  const [minPrice, setMinPrice] = useState("");

  const [maxPrice, setMaxPrice] = useState("");

  const [sortOrder, setSortOrder] = useState("asc");

  const [currentPage, setCurrentPage] = useState(1);

  const [products, setProducts] =
  useState([]);

const [loading, setLoading] =
  useState(true);

  const [totalPages, setTotalPages] =
  useState(1);

const [totalProducts, setTotalProducts] =
  useState(0);

  
  
  // Debounce
   useEffect(() => {

  const timer = setTimeout(() => {
    setDebouncedSearch(search);
  }, 500);

  return () => clearTimeout(timer);

}, [search]);

useEffect(() => {

  const fetchProducts = async () => {

    try {

      setLoading(true);

      const response =
        await axios.get(
          `/api/products?page=${currentPage}&limit=50&search=${debouncedSearch}&category=${category}&stock=${stockLimit}&minPrice=${minPrice}&maxPrice=${maxPrice}&sort=${sortOrder}`
        );

 setProducts(response.data.products);

setTotalPages(
  response.data.totalPages
);

setTotalProducts(
  response.data.totalProducts
);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  fetchProducts();

}, [
  currentPage,
  debouncedSearch,
  category,
  stockLimit,
  minPrice,
  maxPrice,
  sortOrder,
]);


useEffect(() => {

  setCurrentPage(1);

}, [
  debouncedSearch,
  category,
  stockLimit,
  minPrice,
  maxPrice,
  sortOrder,
]);

  
  

  // CSV Export
  const exportCSV = () => {
    const csvRows = [["Product", "SKU", "Category", "Price", "Stock"]];

    products.forEach((product) => {
      csvRows.push([
        product.productName,
        product.sku,
        product.category,
        product.price,
        product.stock,
      ]);
    });

    const csvContent = csvRows.map((row) => row.join(",")).join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    saveAs(blob, "inventory.csv");
  };

 
if (loading) {

  return <TableSkeleton />;
}
  

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
      <TableToolbar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        stockLimit={stockLimit}
        setStockLimit={setStockLimit}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        exportCSV={exportCSV}
      />

      {/* Sort Button */}
      <div className="mb-4">
        <button
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          className="bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-xl text-sm font-medium transition"
        >
          Sort Price: {sortOrder === "asc" ? "Low to High" : "High to Low"}
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead className="sticky top-0 bg-slate-100">
            <tr className="text-left">
              <th className="p-4 font-semibold text-slate-700">Product</th>

              <th className="p-4 font-semibold text-slate-700">SKU</th>

              <th className="p-4 font-semibold text-slate-700">Category</th>

              <th className="p-4 font-semibold text-slate-700">Price</th>

              <th className="p-4 font-semibold text-slate-700">Stock</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b hover:bg-slate-50 transition"
              >
                <td className="p-4 font-medium text-slate-800">
                  {product.productName}
                </td>

                <td className="p-4 text-slate-500">{product.sku}</td>

                <td className="p-4">
                  <span className="bg-slate-100 px-3 py-1 rounded-full text-sm">
                    {product.category}
                  </span>
                </td>

                <td className="p-4 font-medium">${product.price}</td>

                <td className="p-4">
                  <span
                    className={`
                        px-3 py-1 rounded-full text-sm font-medium
                        ${
                          product.stock < 10
                            ? "bg-red-100 text-red-600"
                            : "bg-green-100 text-green-600"
                        }
                      `}
                  >
                    {product.stock}
                  </span>
                </td>
              </tr>
            ))}

            {products.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-10 text-slate-500">
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  setCurrentPage={setCurrentPage}
  totalProducts={totalProducts}
  startIndex={(currentPage - 1) * 50}
  endIndex={Math.min(
    currentPage * 50,
    totalProducts
  )}
/>
    </div>
  );
}
