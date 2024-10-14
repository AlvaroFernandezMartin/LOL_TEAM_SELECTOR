import championsData from '../../dates/DateChampios.json';
import { Champion } from '../models/champion';


export class ChampionModel {
    constructor() {
        this.champions = [];
    }

    loadChampions() { 
        const championsJson = championsData.data;

        for (const champKey of Object.keys(championsJson)) {
            const champData = championsJson[champKey];
            const champion = new Champion(champData);
            
            this.champions.push(champion);
        }
    }

    loadImage = async () => {
        for (let i = 0; i < this.champions.length; i++) {
            const champion = this.champions[i]; 
            try {
                const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/${champion.id}.png`);
                
                if (response.ok) {
                    const sprite = response.url; 
                    champion.setImage(sprite);  
                } else {
                    console.error(`Error al cargar la imagen del campeón: ${champion.name}`);
                }
            } catch (error) {
                console.error(`Error en la petición de imagen para el campeón ${champion.name}:`, error);
            }
        }
    };
    

    showChampions() {
        this.champions.forEach(champion => {
            console.log(champion.getDescription());
        }); 
    }


   
}