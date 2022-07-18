import StoreModule from "../module";
import { initializeApp } from "firebase/app";
import { getDatabase, get, ref, child, set } from "firebase/database";

const firebaseConfig = {
  databaseURL: 'https://shoping-list-64375-default-rtdb.firebaseio.com/',
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

class itemsStore extends StoreModule {
  /**
   * Начальное состояние
   */
  
  initState() {
    return {items :[],
    waiting: true}
  }
  //тут должна быть еще функция удаления и с id нужно подумать тогда как сделать
  async load() {

    this.updateState({
      items: {},
      waiting: true,
    });
    
    const dbRef = ref(getDatabase());
    get(child(dbRef, `items`)).then((snapshot) => {
      if (snapshot.exists()) {
        const res = snapshot.val();
        this.updateState({
          items: res,
          waiting: false
        });
      } else {
        console.log("No data available");
      }
    }).catch(() => {
        this.updateState({
            items: {},
            waiting: false
        });
    });
    // try {
    //   const response = await fetch(`https://my-card-application-default-rtdb.europe-west1.firebasedatabase.app/items.json`);
    //   const json = await response.json() 
    //   if (json.error) throw new Error(json.error);
     
      
    //   this.updateState({
    //     items: json,
    //     waiting: false
    //   });

    // } catch (e){
    //   this.updateState({
    //     items: {},
    //     waiting: false
    //   });
    // }
  }

  save() {
    set(ref(database, 'items'), this.getState().items);
  }

  addItem(product) {
    const items = this.getState().items
    let newId = this.getState().items.length
      items.push({ _id: newId, ...product })
      // Установка состояние items
      this.updateState({
        items
      });
    }
  
}
export default itemsStore;
