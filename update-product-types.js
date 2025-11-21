const fs = require('fs');

// Type IDs from the database
const TYPES = {
  T_SHIRT: 'jd7718zwed4t62yh2n5zw91tj57vs0sp',
  SWEATSHIRT: 'jd7avb75f3vjc4d39ytw8vwjc57vs7cm'
};

// Category IDs from the database
const CATEGORIES = {
  T_SHIRTS: 'j5762hww1skqvmp3str5ekxs9s7vsr0p',
  HOODIES_SWEATSHIRTS: 'j572qrtpyqwpd4yjwa718pkn057vrprd'
};

// Keywords that indicate a sweatshirt/hoodie product
const SWEATSHIRT_KEYWORDS = [
  'sweatshirt',
  'crewneck',
  'pullover',
  'jumper',
  'hoodie'
];

/**
 * Determines if a product is a sweatshirt based on its title
 */
function isSweatshirt(title) {
  const lowerTitle = title.toLowerCase();
  return SWEATSHIRT_KEYWORDS.some(keyword => lowerTitle.includes(keyword));
}

/**
 * Update product type and category based on title
 */
function updateProductMetadata(product) {
  const title = product.title;

  if (isSweatshirt(title)) {
    return {
      ...product,
      type: TYPES.SWEATSHIRT,
      category: CATEGORIES.HOODIES_SWEATSHIRTS
    };
  }

  // Default to T-Shirt
  return {
    ...product,
    type: TYPES.T_SHIRT,
    category: CATEGORIES.T_SHIRTS
  };
}

// Main execution
console.log('📦 Loading products from products-formatted.json...');

const products = JSON.parse(
  fs.readFileSync('products-formatted.json', 'utf-8')
);

console.log(`✓ Loaded ${products.length} products`);

// Update products
let tShirtCount = 0;
let sweatshirtCount = 0;
let updatedCount = 0;

const updatedProducts = products.map(product => {
  const originalType = product.type;
  const updatedProduct = updateProductMetadata(product);

  if (updatedProduct.type !== originalType) {
    updatedCount++;
    console.log(`  → Updated: "${product.title.substring(0, 60)}..."`);
  }

  if (updatedProduct.type === TYPES.SWEATSHIRT) {
    sweatshirtCount++;
  } else {
    tShirtCount++;
  }

  return updatedProduct;
});

// Save updated products
console.log('\n💾 Saving updated products...');
fs.writeFileSync(
  'products-formatted.json',
  JSON.stringify(updatedProducts, null, 2)
);

// Create a backup
fs.writeFileSync(
  'products-formatted.backup.json',
  JSON.stringify(products, null, 2)
);

console.log('✓ Products updated successfully!');
console.log('\n📊 Summary:');
console.log(`  • Total products: ${products.length}`);
console.log(`  • T-Shirts: ${tShirtCount}`);
console.log(`  • Sweatshirts: ${sweatshirtCount}`);
console.log(`  • Updated: ${updatedCount} products`);
console.log(`\n💡 Original file backed up to: products-formatted.backup.json`);
