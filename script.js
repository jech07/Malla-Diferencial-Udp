/* Estilos generales */
body {
    font-family: 'Poppins', sans-serif;
    background-color: #fdf6f9;
    color: #333;
    margin: 0;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

header {
    text-align: center;
    margin-bottom: 30px;
}

h1 {
    color: #d63384;
}

/* Contenedor principal de la malla */
.malla-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 15px;
    width: 100%;
    max-width: 1400px;
}

/* Columna de cada semestre */
.semestre {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.semestre h2 {
    font-size: 1.1em;
    text-align: center;
    color: #333;
    border-bottom: 2px solid #f2a6c8;
    padding-bottom: 8px;
    margin-bottom: 5px;
}

/* Estilos de los ramos */
.ramo {
    padding: 15px;
    border-radius: 8px;
    font-size: 0.9em;
    text-align: center;
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

/* Estado por defecto (No aprobado) -> Rosado */
.ramo {
    background-color: #fce4ec; /* Rosado pastel */
    color: #880e4f;
}

.ramo:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Estado Aprobado -> Morado y tachado */
.ramo.aprobado {
    background-color: #ab47bc; /* Morado */
    color: white;
    text-decoration: line-through;
    text-decoration-thickness: 2px;
    font-weight: 600;
}

/* Estado Bloqueado -> Gris */
.ramo.bloqueado {
    background-color: #e0e0e0; /* Gris */
    color: #757575;
    cursor: not-allowed;
    pointer-events: none; /* Deshabilita clics */
}

.ramo.bloqueado:hover {
    transform: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}
