
class Strings {
    //Strings
    public readonly civilizations: string = 'civilizations';
    public readonly units: string = 'units';
    public readonly technologies: string = 'technologies';
    public readonly structures: string = 'structures';
    public readonly details: string = 'Details';

    public getMenuItems(): Array<string> {
        let menuItems: Array<string> = [];
        menuItems.push(this.civilizations, this.units, this.technologies, this.structures);
        
        return menuItems;
    }
}

export default new Strings();