import { ConvexHttpClient } from "convex/browser";
import fs from 'fs';

const client = new ConvexHttpClient("https://sleek-bobcat-236.convex.cloud");

const updates = JSON.parse(fs.readFileSync('/tmp/update_commands.json', 'utf8'));
const products = JSON.parse(fs.readFileSync('/tmp/all_products.json', 'utf8'));

console.log(`Starting bulk update of ${updates.length} products...\n`);

let successCount = 0;
let failCount = 0;
const failedProducts = [];

for (let i = 0; i < updates.length; i++) {
  try {
    const update = updates[i];
    const args = update.args;

    await client.mutation("products.js:update", args);

    successCount++;
    if ((i + 1) % 10 === 0) {
      console.log(`Progress: ${i + 1}/${updates.length} products updated...`);
    }
  } catch (error) {
    console.error(`Error updating product ${updates[i].productId}: ${error.message}`);
    failCount++;
    failedProducts.push({
      id: updates[i].productId,
      title: updates[i].title,
      error: error.message
    });
  }
}

console.log('\n=== BULK UPDATE COMPLETE ===');
console.log(`Successfully updated: ${successCount} products`);
console.log(`Failed: ${failCount} products`);
console.log(`Total processed: ${updates.length} products`);

if (failedProducts.length > 0) {
  console.log('\nFailed products:');
  failedProducts.forEach(fp => {
    console.log(`  - ${fp.title} (${fp.id})`);
    console.log(`    Error: ${fp.error}`);
  });
}

// Save results
fs.writeFileSync('/tmp/bulk_update_results.json', JSON.stringify({
  successCount,
  failCount,
  failedProducts,
  totalProcessed: updates.length
}, null, 2));

console.log('\nResults saved to /tmp/bulk_update_results.json');

// Close the client
await client.close();
