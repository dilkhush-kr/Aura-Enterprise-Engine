"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";



export default function StockChart({
  products,
}) {
  const data = [...products]
    .sort((a, b) => a.stock - b.stock)
    .slice(0, 10)
    .map((product) => ({
      name: product.productName,
      stock: product.stock,
    }));

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">

      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">
          Restock Priority
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Lowest stock products
        </p>
      </div>

      <div className="h-80 min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />

            <Tooltip />

            <Bar
              dataKey="stock"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}