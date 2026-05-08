import turmeric from "@/assets/p-turmeric.jpg";
import kulambu from "@/assets/p-kulambu.jpg";
import curryMasala from "@/assets/p-curry-masala.jpg";
import coriander from "@/assets/p-coriander.jpg";
import moringa from "@/assets/p-moringa.jpg";
import currylf from "@/assets/p-curry-leaf.jpg";
import pirandai from "@/assets/p-pirandai.jpg";
import paruppu from "@/assets/p-paruppu.jpg";
import kollu from "@/assets/p-kollu.jpg";
import idly from "@/assets/p-idly.jpg";
import bananaLeaf from "@/assets/p-banana-leaf.jpg";
import bananaPeel from "@/assets/p-banana-peel.jpg";
import bambooSalt from "@/assets/p-bamboo-salt.jpg";
import nithya from "@/assets/p-nithya.jpg";
import spirulina from "@/assets/p-spirulina.jpg";
import granite from "@/assets/p-granite.jpg";
import herbals from "@/assets/p-herbals.jpg";

export type Product = {
  slug: string;
  name: string;
  category: "Spices" | "Herbal" | "Agro" | "Industrial";
  image: string;
  short: string;
  description: string;
  features: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "turmeric-powder",
    name: "Turmeric Powder",
    category: "Spices",
    image: turmeric,
    short: "Pure golden curcumin-rich turmeric.",
    description:
      "Sourced from high-quality turmeric roots and processed under hygienic conditions to retain its natural colour, aroma, and purity. Known for its vibrant golden hue and rich curcumin content.",
    features: ["100% pure and natural", "Rich color and strong aroma", "Finely ground", "No additives or preservatives"],
  },
  {
    slug: "kulambu-podi",
    name: "Kulambu Podi",
    category: "Spices",
    image: kulambu,
    short: "Traditional South Indian gravy blend.",
    description: "A traditional South Indian spice blend used to prepare flavorful and aromatic gravies, made from carefully selected spices.",
    features: ["Authentic homemade-style blend", "Balanced mix of spices", "Rich aroma and taste", "Suits a variety of curries"],
  },
  {
    slug: "curry-masala-podi",
    name: "Curry Masala Podi",
    category: "Spices",
    image: curryMasala,
    short: "Versatile multi-curry masala mix.",
    description: "A versatile spice mix designed to add depth and richness to curries, prepared from premium ingredients with consistent flavor.",
    features: ["Multi-purpose spice blend", "Strong flavor and aroma", "Hygienically processed", "Veg & non-veg friendly"],
  },
  {
    slug: "coriander-podi",
    name: "Coriander Podi",
    category: "Spices",
    image: coriander,
    short: "Fresh-ground premium coriander.",
    description: "Made from carefully selected coriander seeds, finely ground to preserve its natural flavor and freshness.",
    features: ["Fresh and aromatic", "Natural flavor enhancer", "Fine uniform texture", "No artificial additives"],
  },
  {
    slug: "moringa-powder",
    name: "Murungai Ilai (Moringa) Powder",
    category: "Herbal",
    image: moringa,
    short: "Nutrient-dense moringa leaf powder.",
    description: "Made from dried moringa leaves known for their nutritional richness. Widely used as a natural supplement and traditional food ingredient.",
    features: ["High-quality moringa leaves", "Rich in natural nutrients", "Finely processed", "Food & wellness ready"],
  },
  {
    slug: "curry-leaf-powder",
    name: "Karuvepilai (Curry Leaf) Powder",
    category: "Herbal",
    image: currylf,
    short: "Traditional curry leaf herbal powder.",
    description: "A traditional herbal powder made from dried curry leaves blended with spices, valued for its distinctive taste.",
    features: ["Authentic preparation", "Rich flavor and aroma", "Hygienically processed", "Daily-use friendly"],
  },
  {
    slug: "pirandai-powder",
    name: "Pirandai Powder",
    category: "Herbal",
    image: pirandai,
    short: "Time-tested pirandai herbal blend.",
    description: "A traditional herbal blend made from the pirandai plant, prepared using time-tested methods to retain its natural properties.",
    features: ["Traditional formulation", "Carefully processed", "Unique taste & texture", "Pairs with rice & sides"],
  },
  {
    slug: "paruppu-podi",
    name: "Paruppu Podi",
    category: "Spices",
    image: paruppu,
    short: "Protein-rich roasted lentil podi.",
    description: "A classic South Indian protein-rich powder made from roasted lentils and spices. Mixed with rice and ghee for a quick, nutritious meal.",
    features: ["Rich in protein", "Authentic homemade taste", "Ready-to-eat", "Balanced lentil-spice blend"],
  },
  {
    slug: "kollu-podi",
    name: "Kollu Podi",
    category: "Spices",
    image: kollu,
    short: "Horse gram nutritional powder.",
    description: "Made from horse gram and spices, offering a unique taste and traditional value with strong flavor and nutritional benefits.",
    features: ["Premium horse gram", "Rich taste and aroma", "Traditional method", "Healthy diet friendly"],
  },
  {
    slug: "idly-podi",
    name: "Idly Podi",
    category: "Spices",
    image: idly,
    short: "Iconic 'gunpowder' condiment.",
    description: "Also known as 'Gunpowder', a popular South Indian condiment served with idly and dosa, made from roasted lentils and spices.",
    features: ["Authentic recipe", "Coarse rich texture", "Ready-to-use", "Long shelf life"],
  },
  {
    slug: "banana-leaf",
    name: "Banana Leaf",
    category: "Agro",
    image: bananaLeaf,
    short: "Fresh & processed export-grade banana leaf.",
    description: "Fresh and processed banana leaves, sustainably sourced and prepared to international export standards for food service and packaging.",
    features: ["Eco-friendly natural", "Export-grade processing", "Cold-chain ready", "Bulk supply available"],
  },
  {
    slug: "banana-peel-powder",
    name: "Banana Peel Powder",
    category: "Agro",
    image: bananaPeel,
    short: "Sustainable banana peel powder.",
    description: "A sustainable, nutrient-rich powder made from carefully dried banana peels — used in food, supplements, and natural formulations.",
    features: ["Sustainable sourcing", "Hygienic processing", "Rich in fibre & potassium", "Custom packing"],
  },
  {
    slug: "bamboo-salt",
    name: "Bamboo Salt",
    category: "Agro",
    image: bambooSalt,
    short: "Traditional roasted bamboo salt.",
    description: "Premium bamboo salt prepared with traditional methods — sea salt roasted in bamboo to deliver a mineral-rich, distinctive product.",
    features: ["Mineral-rich", "Traditional process", "Distinctive flavor", "Food & wellness use"],
  },
  {
    slug: "nithya-kalyani-powder",
    name: "Nithya Kalyani Powder",
    category: "Herbal",
    image: nithya,
    short: "Periwinkle herbal powder.",
    description: "Carefully dried Nithya Kalyani (Madagascar periwinkle) processed into a fine herbal powder used in traditional formulations.",
    features: ["Naturally sun-dried", "Fine texture", "No additives", "Bulk export packing"],
  },
  {
    slug: "spirulina",
    name: "Spirulina Algae",
    category: "Herbal",
    image: spirulina,
    short: "Premium-grade spirulina powder.",
    description: "High-quality spirulina algae cultivated under controlled conditions, rich in protein and natural micronutrients.",
    features: ["High protein content", "Lab-tested purity", "Food-grade processing", "Custom OEM packs"],
  },
  {
    slug: "herbals",
    name: "Herbals Collection",
    category: "Herbal",
    image: herbals,
    short: "Curated herbal product range.",
    description: "A curated collection of carefully selected herbal powders and ingredients, sourced from trusted growers across India.",
    features: ["Wide herbal portfolio", "Custom blends on request", "Quality-controlled", "Export-ready"],
  },
  {
    slug: "granite",
    name: "Premium Granite",
    category: "Industrial",
    image: granite,
    short: "Export-quality granite slabs & blocks.",
    description: "Premium quality granite blocks, slabs, and tiles in a range of finishes — sourced from reputed Indian quarries for global construction projects.",
    features: ["Multiple colors & finishes", "Export-grade quality", "Block / slab / tile formats", "Custom dimensions"],
  },
];
