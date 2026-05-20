"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Cell,
} from "recharts";

const COLORS = [
  "#0f172a",
  "#334155",
  "#64748b",
  "#94a3b8",
  "#cbd5e1",
];

const categoryMap = {};




export default function CategoryChart({
  products,
}) {

  products.forEach((product) => {

  const value =
    product.price * product.stock;

  if (categoryMap[product.category]) {

    categoryMap[product.category] += value;

  } else {

    categoryMap[product.category] = value;
  }
});

const totalValue = Object.values(
  categoryMap
).reduce(
  (total, value) => total + value,
  0
);

const data = Object.entries(categoryMap)
  .map(([name, value]) => ({

    name,

    value: Number(
      (
        (value / totalValue) * 100
      ).toFixed(1)
    ),
  }));

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">

      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-800">
          Inventory Categories
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Inventory distribution
        </p>
      </div>

      <div className="h-80 min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
           <Pie
       data={data}
       dataKey="value"
       nameKey="name"
       cx="50%"
       cy="50%"
       outerRadius={90}
       label={({ name, value }) =>
          `${name} ${value}%`
       }
>
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}