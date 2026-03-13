function drawPolygons() {
    svgContainer.innerHTML = '';
    polygonsData.forEach(polygonData => {
        const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        polygon.setAttribute('points', polygonData.coordinates.map(p => `${p.x},${p.y}`).join(' '));
        polygon.setAttribute('fill', polygonData.fill || 'rgba(0,213,255,0.3)');
        polygon.setAttribute('stroke', polygonData.stroke || 'white');
        polygon.setAttribute('stroke-width', '0.5');
        polygon.style.cursor = 'pointer'; // optional, shows hand on hover

        polygon.addEventListener('mouseover', () => {
            polygon.setAttribute('fill', 'rgba(255,0,0,0.5)');
        });
        polygon.addEventListener('mouseout', () => {
            polygon.setAttribute('fill', polygonData.fill);
        });

        polygon.addEventListener('click', () => {
            if (polygonData.link) {
                window.location.href = polygonData.link;
            }
        });

        svgContainer.appendChild(polygon);
    });
}

drawPolygons();