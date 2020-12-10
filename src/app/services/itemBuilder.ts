import { IModelBase } from '../models/modelBase';

class ItemBuilder {

    public GetList<T>(list: Array<T>, category: string): Array<T> {
        return this.CreateList(list, category);
    }

    public GetItem<T>(item: T, category: string): IModelBase {
        return this.CreateItem(item, category);
    }

    private CreateList<T extends IModelBase>(list: Array<T>, category: string) : Array<T> {

        let entries: Array<T> = [];

        list.forEach((item: T) => {
            const name = item.name?.replace(' ', '');
            const key: string = category + item.id + name;
            entries.push({...item, localId: key, category: category});
        });

        return entries;
    }

    private CreateItem<T extends IModelBase>(item: T, category: string): T {
        const key = category + item.id + item.name?.replace(' ', '');
        const add = {localId: key, category: category};

        const newItem = Object.assign(item, add);

        return newItem;
    }

}

export default new ItemBuilder();