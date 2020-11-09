import { IModelBase } from './../models/modelBase';

class ListFactory {

    public GetList<T extends IModelBase>(list: Array<T>, category: string): Array<T> {
        return this.CreateList(list, category);
    }

    public GetItem<T extends IModelBase>(item: T, category: string): IModelBase {
        return this.CreateItem(item, category);
    }

    private CreateList<T extends IModelBase>(list: Array<T>, category: string) : Array<T> {

        let entries: Array<T> = [];

        list.forEach(x => {
            let key: string = category + x.id + x.name;
            entries.push({...x, localId: key, category: category});
        });

        return entries;
    }

    private CreateItem<T extends IModelBase>(item: T, category: string): IModelBase {
        const key = category + item.id + item.name;
        const add = {localId: key, category: category};

        const newItem = Object.assign(item, add);
        console.log(newItem);
        
        return newItem;
    }

}

export default new ListFactory();