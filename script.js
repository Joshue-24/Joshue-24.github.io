document.addEventListener('DOMContentLoaded', function() {
    const projectsContainer = document.querySelector('.project-grid');

    // Función para cargar proyectos desde GitHub
    async function fetchGitHubProjects() {
        try {
            const response = await fetch('https://api.github.com/users/Joshue-24/repos');
            const repos = await response.json();

            repos.forEach(repo => {
                const projectItem = document.createElement('div');
                projectItem.classList.add('project-item');
                projectItem.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description || 'Sin descripción.'}</p>
                    <a href="${repo.html_url}" target="_blank">Ver en GitHub</a>
                `;
                projectsContainer.appendChild(projectItem);
            });
        } catch (error) {
            console.error('Error al cargar proyectos de GitHub:', error);
            projectsContainer.innerHTML = '<p>No se pudieron cargar los proyectos. Por favor, inténtalo de nuevo más tarde.</p>';
        }
    }

    fetchGitHubProjects();
});