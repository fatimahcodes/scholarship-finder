const scholarships = [
    {
        name: "Turkey Government Scholarship",
        country: "Turkey",
        deadline: "January",
        link: "#"
    },
    {
        name: "Commonwealth Scholarship",
        country: "UK",
        deadline: "December",
        link: "#"
    }
];

const container = document.getElementById("scholarships");
const searchInput = document.getElementById("search");

function displayScholarships(list) {
    container.innerHTML = "";

    list.forEach(sch => {
        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
            <h2>${sch.name}</h2>
            <p>Country: ${sch.country}</p>
            <p>Deadline: ${sch.deadline}</p>
            <a href="${sch.link}">Apply</a>
        `;

        container.appendChild(div);
    });
}

// Initial display
displayScholarships(scholarships);

// Search feature
searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    const filtered = scholarships.filter(sch =>
        sch.name.toLowerCase().includes(value) ||
        sch.country.toLowerCase().includes(value)
    );

    displayScholarships(filtered);
});
