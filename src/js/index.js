import {ChampionModel} from 'src/js/championModels.js';
import { Card } from 'src/js/cardsFuntions.js';


const championModel = new ChampionModel();

championModel.loadChampions();
championModel.loadImage();


const card = new Card(championModel);


document.addEventListener('DOMContentLoaded', () => {
     
    card.showContainer();
});
