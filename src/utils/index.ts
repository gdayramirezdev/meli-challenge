import { Item } from "@/types";

export function addProductJsonLd(item: Item) {
  return {
    __html: `{
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "${item.title}",
    "image": [
      "${item.picture}",
     ],
    "description": "${item.description}",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "${item.price?.currency}",
      "price": "${item.price?.amount}",
      "itemCondition": "${item.condition}",
      "availability": "In stock"
    }
  }
`,
  };
}
