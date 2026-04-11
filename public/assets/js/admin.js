document.getElementById('productForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    // 1. Recolectar datos
    const productData = {
        name: document.getElementById('prodName').value,
        price: document.getElementById('prodPrice').value,
        stock: document.getElementById('prodStock').value,
        type: document.getElementById('prodType').value,
        img: document.getElementById('prodImg').value,
        sync: document.getElementById('syncWpp').checked
    };

    console.log("Guardando en Base de Datos Interna...", productData);

    // 2. Lógica de Sincronización con WhatsApp
    if (productData.sync) {
        await sincronizarConWhatsApp(productData);
    }

    alert("¡Producto publicado con éxito!");
    // document.getElementById('productForm').reset();
});

async function sincronizarConWhatsApp(data) {
    console.log(`Disparando API de Meta para: ${data.name}`);
    
    /* Aquí es donde tu Backend (Python/FastAPI) entraría en juego:
       fetch('https://tu-api.com/sync-catalog', {
           method: 'POST',
           body: JSON.stringify(data)
       });
    */
    
    return new Promise(resolve => setTimeout(resolve, 1000)); // Simulación de latencia
}