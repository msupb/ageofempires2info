import { IModelBase } from '../models/modelBase';

class ListFactory {

    public GetDictionary<T extends IModelBase>(list: Array<T>, category: string): Array<T> {
        return this.CreateDictionary(list, category);
    }

    private CreateDictionary<T extends IModelBase>(list: Array<T>, category: string) : Array<T> {

        let entries: Array<T> = [];

        list.forEach(x => {
            let key: string = category + x.id + x.name;
            entries.push({...x, localId: key, category: category});
            

        });

        console.log('From factory', entries);

        return entries;
    }

}

export default new ListFactory();