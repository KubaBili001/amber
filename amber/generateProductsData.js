// generateProductsData.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Setup __dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define folders and file paths
const folders = ["body", "face", "hair", "spa", "health_improvement"];
const baseDir = path.join(__dirname, "src/assets/images");
const outputFile = path.join(__dirname, "src/data/productsData.ts");

// Helper function to load existing data if available
function loadExistingData() {
  if (fs.existsSync(outputFile)) {
    const fileContents = fs.readFileSync(outputFile, "utf8");
    const existingData = {};
    folders.forEach(folder => {
      const regex = new RegExp(`export const ${folder}Data = (\\[.*?\\]);`, 's');
      const match = fileContents.match(regex);
      if (match) {
        existingData[folder] = JSON.parse(match[1]);
      }
    });
    return existingData;
  }
  return {};
}

function generateDataForFolder(folder, existingData) {
  const folderPath = path.join(baseDir, folder);
  const files = fs.readdirSync(folderPath);
  const data = existingData[folder] || [];
  
  const existingCount = data.length;
  const newProducts = [];

  files.forEach((file) => {
    const match = file.match(/^(\d+)(_2)?\.(jpg|jpeg|png)$/);
    if (match) {
      const [ , baseName, isSecondary ] = match;
      const imagePath = `/src/assets/images/${folder}/${file}`;
      const productIndex = parseInt(baseName, 10) - 1;
      
      if (productIndex >= existingCount) {
        let product = newProducts.find((item) => item.baseName === baseName);
        if (!product) {
          product = {
            primaryImage: imagePath,
            secondaryImage: undefined,
            name: "",        
            content: "",           
            price: 0,              
            baseName,
          };
          newProducts.push(product);
        }
        
        if (isSecondary) {
          product.secondaryImage = imagePath;
        }
      }
    }
  });

  return [...data, ...newProducts];
}

function generateAllProductsData() {
  const existingData = loadExistingData();
  const allData = {};

  folders.forEach((folder) => {
    allData[folder] = generateDataForFolder(folder, existingData);
  });

  const output = `// Auto-generated product data\n` + 
                 Object.keys(allData).map(folder => 
                   `export const ${folder}Data = ${JSON.stringify(allData[folder], null, 2)};`
                 ).join("\n\n") +
                 `\n\nexport default { ${folders.map(folder => `${folder}Data`).join(", ")} };`;

  fs.writeFileSync(outputFile, output, "utf8");
  console.log(`Product data successfully generated or updated in ${outputFile}`);
}

// Run the function
generateAllProductsData();
