
class Strings {
    //Strings
    public readonly civilizations: string = 'civilizations';
    public readonly units: string = 'units';
    public readonly technologies: string = 'technologies';
    public readonly structures: string = 'structures';
    public readonly home: string = 'home';
    public readonly details: string = 'Details';
    public readonly civilization: string = 'civilization';
    public readonly unit: string = 'unit';
    public readonly technology: string = 'technology';
    public readonly structure: string = 'structure';
    public readonly goTo: string = 'Go To';
    public readonly title: string = 'Age of Empires 2 info';
    public readonly subTitle: string = 'Your complete Age of Empires 2 resource!';

    public getMenuItems(): Array<string> {
        let menuItems: Array<string> = [];
        menuItems.push(this.home, this.civilizations, this.units, this.technologies, this.structures);
        
        return menuItems;
    }

    public getCategories(): Array<string> {
        let categories: Array<string> = [];
        categories.push(this.civilizations, this.units, this.technologies, this.structures);
        return categories;
    }
}

export default new Strings();