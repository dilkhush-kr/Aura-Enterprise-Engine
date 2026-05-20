"use client";

import { Search, Download } from "lucide-react";

export default function TableToolbar({
  search,
  setSearch,
  category,
  setCategory,
  stockLimit,
  setStockLimit,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  exportCSV,
}) {
  return (
    <div className="space-y-6 mb-6">

      {/* Top Row */}
      <div className="flex flex-col xl:flex-row gap-4 xl:items-center xl:justify-between">

        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Inventory Products
          </h2>

          <p className="text-slate-500 text-sm mt-1">
            Manage and monitor inventory
          </p>
        </div>

        <button
          onClick={exportCSV}
          className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 rounded-2xl transition"
        >
          <Download size={18} />

          Export CSV
        </button>

      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">

        {/* Search */}
        <div className="flex items-center bg-slate-100 rounded-2xl px-4 py-3">
          <Search size={18} className="text-slate-500" />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="bg-transparent outline-none ml-2 w-full text-sm"
          />
        </div>

        {/* Category */}
        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          className="bg-slate-100 rounded-2xl px-4 py-3 outline-none"
        >
          <option value="All">
            All Categories
          </option>

          <option value="Electronics">
            Electronics
          </option>

          <option value="Furniture">
            Furniture
          </option>

          <option value="Accessories">
            Accessories
          </option>
        </select>

        {/* Min Price */}
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) =>
            setMinPrice(e.target.value)
          }
          className="bg-slate-100 rounded-2xl px-4 py-3 outline-none"
        />

        {/* Max Price */}
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(e.target.value)
          }
          className="bg-slate-100 rounded-2xl px-4 py-3 outline-none"
        />

        {/* Stock Slider */}
        <div className="bg-slate-100 rounded-2xl px-4 py-3">

          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-slate-600">
              Stock Less Than
            </span>

            <span className="font-semibold text-slate-800">
              {stockLimit}
            </span>
          </div>

          <input
            type="range"
            min="1"
            max="1000"
            value={stockLimit}
            onChange={(e) =>
              setStockLimit(e.target.value)
            }
            className="w-full"
          />

        </div>

      </div>
    </div>
  );
}