import {
  Boxes,
  DollarSign,
  AlertTriangle,
  ShoppingCart,
} from "lucide-react";

import StatCard from "./StatCard";

export default function DashboardStats({
  totalSKUs,
  inventoryValue,
  outOfStock,
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

      <StatCard
        title="Total Products"
        value={`${totalSKUs}`}
        growth="+12%"
        icon={Boxes}
      />

      <StatCard
        title="Inventory Value"
        value={`${inventoryValue.toLocaleString()}`}
        growth="+8%"
        icon={DollarSign}
      />

      <StatCard
        title="Out of Stock"
        value={outOfStock}
        growth="-3%"
        icon={AlertTriangle}
      />

      <StatCard
        title="Total Orders"
        value="12,480"
        growth="+18%"
        icon={ShoppingCart}
      />
    </div>
  );
}