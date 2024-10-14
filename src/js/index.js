import {ChampionModel} from './championModels';
import { Card } from '../js/cardsFuntions';


const championModel = new ChampionModel();

championModel.loadChampions();
championModel.loadImage();


const card = new Card(championModel);


document.addEventListener('DOMContentLoaded', () => {
     
    card.showContainer();
});
