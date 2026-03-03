// Efecto de revelación simple al hacer clic
function revealProject(element) {
    element.style.borderColor = "#00cec9";
    console.log("Visualizando detalles del proyecto...");
    // Aquí podrías añadir un modal o expandir información
}

// Efecto de entrada suave al cargar
window.onload = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transition = 'all 0.5s ease';
        setTimeout(() => {
            card.style.opacity = '1';
        }, index * 200);
    });
};