import { NextResponse } from "next/server";

const allProducts = Array.from(
  { length: 200 },
  (_, index) => ({
    id: index + 1,
    productName: `Product ${index + 1}`,
    sku: `SKU-${1000 + index}`,
    category:
      ["Electronics", "Furniture", "Accessories"][
        index % 3
      ],
    price: 100 + index * 5,
    stock: 10 + (index % 40),
  })
);

export async function GET(request) {

  const { searchParams } =
    new URL(request.url);

  const page =
    Number(searchParams.get("page")) || 1;

  const limit =
    Number(searchParams.get("limit")) || 50;

  const search =
    searchParams.get("search") || "";

  const category =
    searchParams.get("category") || "All";

  const stockLimit =
    Number(searchParams.get("stock")) || 1000;

  const minPrice =
    Number(searchParams.get("minPrice")) || 0;

  const maxPrice =
    Number(searchParams.get("maxPrice")) || Infinity;

  const sort =
    searchParams.get("sort") || "";

  let filteredProducts = [...allProducts];

  // Search
  filteredProducts =
    filteredProducts.filter((product) =>
      product.productName
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  // Category
  if (category !== "All") {

    filteredProducts =
      filteredProducts.filter(
        (product) =>
          product.category === category
      );
  }

  // Stock
  filteredProducts =
    filteredProducts.filter(
      (product) =>
        product.stock <= stockLimit
    );

  // Min Price
  filteredProducts =
    filteredProducts.filter(
      (product) =>
        product.price >= minPrice
    );

  // Max Price
  filteredProducts =
    filteredProducts.filter(
      (product) =>
        product.price <= maxPrice
    );

  // Sorting
  if (sort === "lowToHigh") {

    filteredProducts.sort(
      (a, b) => a.price - b.price
    );
  }

  if (sort === "highToLow") {

    filteredProducts.sort(
      (a, b) => b.price - a.price
    );
  }

  // Pagination
  const startIndex =
    (page - 1) * limit;

  const endIndex =
    startIndex + limit;

  const paginatedProducts =
    filteredProducts.slice(
      startIndex,
      endIndex
    );

  return NextResponse.json({
    products: paginatedProducts,
    totalProducts:
      filteredProducts.length,
    totalPages: Math.ceil(
      filteredProducts.length / limit
    ),
    currentPage: page,
  });
}