// /script.js
async function loadData() {
  const [settings, productsData] = await Promise.all([
    fetch('/data/settings.json').then(r => r.json()),
    fetch('/data/products.json').then(r => r.json())
  ]);
  // Handle both old (array) and new (object with 'products' key) formats
  const products = Array.isArray(productsData) ? productsData : productsData.products;
  renderCatalog(products, settings);
}

function heading(text) {
  return `<h2 class='text-3xl md:text-4xl font-extrabold text-center brand-blue mb-10'>${text}</h2>`;
}

function productCard(p) {
  const bullets = (p.features || []).map(li => `<li class='list-disc ml-6'>${li}</li>`).join('');
  return `
    <div class='text-center'>
      <h3 class='font-extrabold text-lg mb-3'>${p.title}</h3>
      ${p.image ? `<div class='w-full aspect-square p-8 mb-3 flex items-center justify-center'><img src='${p.image}' alt='${p.title}' class='w-full h-full object-contain'></div>` : ''}
      ${p.price ? `<div class='font-semibold mb-3'>${p.price}</div>` : ''}
      ${bullets ? `<ul class='text-left text-sm leading-6 inline-block'>${bullets}</ul>` : ''}
    </div>
  `;
}

function renderCatalog(allProducts, settings) {
  const root = document.getElementById('catalog');
  const order = settings.categoryOrder || [];
  const perRow = settings.itemsPerRow || 4;

  root.innerHTML = order.map(cat => {
    const items = allProducts.filter(p => p.category === cat);
    if (!items.length) return '';
    const gridClass =
      perRow === 5 ? 'lg:grid-cols-5' :
      perRow === 4 ? 'lg:grid-cols-4' :
      perRow === 3 ? 'lg:grid-cols-3' :
      perRow === 2 ? 'lg:grid-cols-2' :
      'lg:grid-cols-4';
    return `
      <section class='mb-16'>
        ${heading(cat)}
        <div class='grid gap-8 grid-cols-1 sm:grid-cols-2 lg:${gridClass}'>
          ${items.map(productCard).join('')}
        </div>
      </section>
    `;
  }).join('');
}

loadData();
