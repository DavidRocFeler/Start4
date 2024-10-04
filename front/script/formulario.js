document.addEventListener("DOMContentLoaded", function () {
    const dienstenSelect = document.getElementById("diensten-select");
    const subdienstenSelect = document.getElementById("subdiensten-select");

    const subdiensten = {
        webontwikkeling: [
            "Ontwikkeling van statische websites van 0-6000 px hoog",
            "Ontwikkeling van dynamische websites van 0-6000 px hoog",
            "Ontwikkeling van apps voor Android en iOS",
            "Andere soorten ontwikkeling"
        ],
        grafisch: [
            "Logo ontwerp",
            "Merkidentiteit ontwerp",
            "Advertentie ontwerp",
            "UX/UI ontwerp",
            "Print ontwerp",
            "Milieu ontwerp",
            "Andere soorten ontwerp"
        ],
        community: [
            "Beheer van sociale media",
            "Content strategie",
            "Monitoring en analyse",
            "Crisismanagement"
        ],
        seo: [
            "SEO (Zoekmachineoptimalisatie)",
            "SEM (Zoekmachine Marketing)",
            "Analyse en rapportage"
        ],
        database: [
            "Database beheer",
            "Data analyse"
        ]
    };

    dienstenSelect.addEventListener("change", function () {
        const selectedDiensten = dienstenSelect.value;
        updateSubdiensten(selectedDiensten);
    });

    function updateSubdiensten(selectedDiensten) {
        // Clear existing options
        subdienstenSelect.innerHTML = '<option value="" disabled selected>Kies een subdienst</option>';

        // Add new options based on the selected diensten
        if (subdiensten[selectedDiensten]) {
            subdiensten[selectedDiensten].forEach(subdienst => {
                const option = document.createElement("option");
                option.value = subdienst.toLowerCase().replace(/ /g, "_");
                option.textContent = subdienst;
                subdienstenSelect.appendChild(option);
            });
        }
    }
});
