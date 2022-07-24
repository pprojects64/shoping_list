import StoreModule from "../module";
import { db } from "../../db";

class itemsStore extends StoreModule {
  /**
   * Начальное состояние
   */
  initState() {
    return { items: [], waiting: true };
  }

  delete(id) {
    const newItems = this.getState().items.filter((item) => item.id !== id);

    this.updateState({
      items: newItems,
      waiting: false,
    });

    db.deleteItem(id);
  }

  //тут должна быть еще функция удаления и с id нужно подумать тогда как сделать
  async load() {
    this.updateState({
      items: [],
      waiting: true,
    });
    try {
      const items = await db.loadItems();

      this.updateState({
        items: items,
        waiting: false,
      });
    } catch (err) {
      this.updateState({
        items: [],
        waiting: false,
      });
    }
  }

  modifyItem(id, data) {
    const newItems = this.getState().items.map((item) =>
      item.id === id ? data : item
    );

    this.updateState({
      items: newItems,
      waiting: false,
    });

    db.modifyItem(id, data);
  }

  addItem(product) {
    const items = this.getState().items;
    const newItem = db.addItem(product);

    items.push(newItem);
    // Установка состояние items
    this.updateState({
      items,
    });
  }
}
export default itemsStore;
