document.addEventListener("DOMContentLoaded", () => {
    const scholarships = [
        { name: "UNIFEMGA Scholarship", country: "Nigeria", deadline: "2026-04-10", link: "https://www.scholarshipregion.com/unifemga-scholarship" },
        { name: "Shanghai Government Scholarship", country: "China", deadline: "2026-04-15", link: "https://www.scholarshipregion.com/shanghai-government-scholarship" },
        { name: "Texas Tech University Presidential Scholarship", country: "USA", deadline: "2026-04-01", link: "https://www.scholarshipregion.com/texas-tech-university-presidential-scholarship" },
        { name: "Türkiye Scholarships", country: "Turkey", deadline: "2026-05-30", link: "https://www.turkiyescholarships.gov.tr/" },
        { name: "Australia Awards Scholarships", country: "Australia", deadline: "2026-05-31", link: "https://www.dfat.gov.au/people-to-people/australia-awards" },
        { name: "Eiffel Excellence Scholarship", country: "France", deadline: "2026-06-15", link: "https://www.campusfrance.org/" },
        { name: "DAAD Scholarships", country: "Germany", deadline: "2026-07-15", link: "https://www.daad.de/" },
        { name: "Erasmus+ Master’s Scholarships", country: "European Union", deadline: "2026-09-30", link: "https://erasmus-plus.ec.europa.eu/" },
        { name: "Vanier Canada Graduate Scholarships", country: "Canada", deadline: "2026-11-01", link: "https://vanier.gc.ca/" },
        { name: "Chevening Scholarships", country: "United Kingdom", deadline: "2026-11-01", link: "https://www.chevening.org/" }
    ];

    const container = document.getElementById("scholarships");
    const searchInput = document.getElementById("search");

    function displayScholarships(list) {
        const today = new Date();
        const openScholarships = list.filter(sch => new Date(sch.deadline) >= today);
        const searchValue = searchInput.value.toLowerCase();
        const filtered = openScholarships.filter(sch =>
            sch.name.toLowerCase().includes(searchValue) ||
            sch.country.toLowerCase().includes(searchValue)
        );

        container.innerHTML = "";

        if (filtered.length === 0) {
            container.innerHTML = "<p>No scholarships found.</p>";
            return;
        }

        filtered.forEach(sch => {
            const div = document.createElement("div");
            div.classList.add("card");
            div.innerHTML = `
                <h2>${sch.name}</h2>
                <p>Country: ${sch.country}</p>
                <p>Deadline: ${sch.deadline}</p>
                <a href="${sch.link}" target="_blank">Apply</a>
            `;
            container.appendChild(div);
        });
    }

    displayScholarships(scholarships);

    searchInput.addEventListener("input", () => displayScholarships(scholarships));
});
