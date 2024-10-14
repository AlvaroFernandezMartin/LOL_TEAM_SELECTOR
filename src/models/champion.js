export class Champion {
    constructor(data) {
        this.version = data.version; // Versión del campeón
        this.id = data.id; // ID del campeón
        this.key = data.key; // Clave única del campeón
        this.name = data.name; // Nombre del campeón
        this.title = data.title; // Título del campeón
        this.blurb = data.blurb; // Descripción breve del campeón
        this.info = {
            attack: data.info.attack, // Estadística de ataque
            defense: data.info.defense, // Estadística de defensa
            magic: data.info.magic, // Estadística de magia
            difficulty: data.info.difficulty // Dificultad de uso
        };
        this.tags = data.tags; // Etiquetas del campeón
        this.partype = data.partype; // Tipo de recurso (por ejemplo, Maná, Energía)
        this.stats = {
            hp: data.stats.hp, // Salud base
            mp: data.stats.mp, // Maná base
        };

        this.image = null; 
    }

    setImage(sprite) {
       
        this.image = sprite
    }

    getDescription() {
        return `${this.name}, ${this.title}: ${this.blurb}`;
    }

    getStats() {
        return {
            hp: this.stats.hp,
            mp: this.stats.mp,
            attack: this.info.attack,
            defense: this.info.defense,
            magic: this.info.magic,
            difficulty: this.info.difficulty
        };
    }
}
