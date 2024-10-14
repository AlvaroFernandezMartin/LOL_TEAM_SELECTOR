export class Card {
    constructor(championModel) {
        this.championModel = championModel;
        this.container = document.getElementById('Container');
    }

    showContainer = async () => {
        if (!this.container) {
            console.error('No se encontró el contenedor con ID "Container"');
            return;
        }

        this.container.innerHTML = '';

        for (let i = 0; i < this.championModel.champions.length; i++) {
            const champion = this.championModel.champions[i];
    

            const img = await fetch(`${this.championModel.champions[i].image}`);

            const championCard = document.createElement("div");
            championCard.classList.add("card");

            championCard.innerHTML = `
                <p id="name_champion">${champion.name}</p>
                <img class="champion_image" src=${champion.image} >
            `;

            this.container.appendChild(championCard);
        }

        const cards = document.querySelectorAll(".card");
        cards.forEach(element => {
            element.addEventListener("click", () => this.moveChampion(element));
        });
    }

    moveChampion = (element) => {
        const championName = element.querySelector("#name_champion").textContent;
        console.log("Se hizo click en el campeón:", championName);
        
        const sidebar_left = document.getElementById("team1_selected");
        const sidebar_right = document.getElementById("team2_selected");
        const originalContainer = document.getElementById("Container"); 
    
        const team1Count = sidebar_left.children.length;
        const team2Count = sidebar_right.children.length;
    
        let isInLeftSidebar = sidebar_left.contains(element);
        let isInRightSidebar = sidebar_right.contains(element);
    
        if (!isInLeftSidebar && !isInRightSidebar) {
            if (team1Count < 5) {
                sidebar_left.appendChild(element);
            } else if (team2Count < 5) {
                sidebar_right.appendChild(element);
            } else {
                console.log("Ambos equipos están completos. No se puede agregar más campeones.");
            }
        } else {
            originalContainer.appendChild(element);
        }
    };
    
    
}
