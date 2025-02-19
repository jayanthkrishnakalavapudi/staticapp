document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelector(".project-list");
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Search projects...";
    searchInput.classList.add("search-box");
    projects.prepend(searchInput);
    
    searchInput.addEventListener("input", () => {
        const searchText = searchInput.value.toLowerCase();
        document.querySelectorAll(".project").forEach(project => {
            const title = project.querySelector("h3").textContent.toLowerCase();
            project.style.display = title.includes(searchText) ? "block" : "none";
        });
    });
});
