// assets/js/admin.js

document.getElementById('productForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    // 1. Recolectar datos del formulario
    const newProduct = {
        id: Date.now(), // Generamos un ID único basado en el tiempo
        nombre: document.getElementById('prodName').value,
        precio: parseFloat(document.getElementById('prodPrice').value),
        stock: parseInt(document.getElementById('prodStock').value),
        disponibilidad: document.getElementById('prodType').value,
        img: document.getElementById('prodImg').value || 'https://via.placeholder.com/300x400',
        syncWpp: document.getElementById('syncWpp').checked
    };

    // 2. Obtener productos existentes de LocalStorage o crear un array vacío
    const productosGuardados = JSON.parse(localStorage.getItem('productos_tienda')) || [];

    // 3. Agregar el nuevo y guardar
    productosGuardados.push(newProduct);
    localStorage.setItem('productos_tienda', JSON.stringify(productosGuardados));

    // 4. Simular la sincronización (lo que ya tenías)
    if (newProduct.syncWpp) {
        console.log(`Sincronizando ${newProduct.nombre} con Catálogo Meta...`);
    }

    alert("¡Producto publicado y guardado en memoria local!");
    
    // Opcional: Volver a la tienda para ver el resultado
    window.location.href = 'index.html';
});