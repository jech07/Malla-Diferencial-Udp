document.addEventListener('DOMContentLoaded', () => {
    const malla = document.getElementById('malla-curricular');
    const ramos = document.querySelectorAll('.ramo');
    const KEY_PROGRESO = 'progresoMalla';

    // Función para cargar el progreso guardado
    function cargarProgreso() {
        const progresoGuardado = localStorage.getItem(KEY_PROGRESO);
        if (progresoGuardado) {
            const ramosAprobados = JSON.parse(progresoGuardado);
            ramosAprobados.forEach(idRamo => {
                const ramo = document.getElementById(idRamo);
                if (ramo) {
                    ramo.classList.add('aprobado');
                }
            });
        }
    }

    // Función para guardar el progreso actual
    function guardarProgreso() {
        const ramosAprobados = [];
        document.querySelectorAll('.ramo.aprobado').forEach(ramo => {
            ramosAprobados.push(ramo.id);
        });
        localStorage.setItem(KEY_PROGRESO, JSON.stringify(ramosAprobados));
    }
    
    // Función para actualizar el estado de los ramos (bloqueado/desbloqueado)
    function actualizarEstadoRamos() {
        ramos.forEach(ramo => {
            const prerrequisitosAttr = ramo.dataset.prerrequisitos;
            if (!prerrequisitosAttr) {
                // Si no tiene prerrequisitos, nunca está bloqueado
                ramo.classList.remove('bloqueado');
                return;
            }

            const prerrequisitos = JSON.parse(prerrequisitosAttr);
            let todosAprobados = true;

            prerrequisitos.forEach(idPrerrequisito => {
                const prerrequisito = document.getElementById(idPrerrequisito);
                if (prerrequisito && !prerrequisito.classList.contains('aprobado')) {
                    todosAprobados = false;
                }
            });

            if (todosAprobados) {
                ramo.classList.remove('bloqueado');
            } else {
                // Solo se bloquea si no está ya aprobado
                if (!ramo.classList.contains('aprobado')) {
                    ramo.classList.add('bloqueado');
                }
            }
        });
    }

    // Event listener para manejar los clics en los ramos
    malla.addEventListener('click', (e) => {
        if (e.target.classList.contains('ramo') && !e.target.classList.contains('bloqueado')) {
            e.target.classList.toggle('aprobado');
            actualizarEstadoRamos();
            guardarProgreso();
        }
    });

    // Carga inicial y actualización al cargar la página
    cargarProgreso();
    actualizarEstadoRamos();
});
