
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
    public readonly sideBarText: string = 'Age of Empires 2 info'

    public getMenuItems(): Array<string> {
        let menuItems: Array<string> = [];
        menuItems.push(this.home, this.civilizations, this.units, this.technologies, this.structures);
        
        return menuItems;
    }
}

export default new Strings();