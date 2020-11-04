import { IModelBase } from './../models/modelBase';

class ListFactory {

    public GetList<T extends IModelBase>(list: Array<T>, category: string): Array<T> {
        return this.CreateList(list, category);
    }

    private CreateList<T extends IModelBase>(list: Array<T>, category: string) : Array<T> {

        let entries: Array<T> = [];

        list.forEach(x => {
            let key: string = category + x.id + x.name;
            entries.push({...x, localId: key, category: category});
        });

        return entries;
    }

}

export default new ListFactory();