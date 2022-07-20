import AddBuyingForm  from "../../components/item-form/AddBuyingForm";
import useStore from "../../utils/use-context";
import React, { useCallback, useState } from "react";
import ShopingList from "../../components/list/ShopingList";
import Layout from "../../components/layout/layout";
import Header from "../../components/header/Header";
import useSelector from "../../utils/use-selector";
import useInit from '../../utils/use-init'
import {Link} from "react-router-dom";
import AddItemButton from '../../components/addItemButton/index'

function MainPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const store = useStore();

  useInit(async () => {
    await store.items.load()
  }, []);

  const callbacks = {
    addToItemList: useCallback((props) => {
      store.items.addItem(props);
      store.items.save();
    }, [store]),
  };

  const select = useSelector((state) => ({
    items: state.items.items,
    waiting: state.items.waiting
  }));
  
  return (
    <Layout 
      head={
        <Link to={'/'}>
          <h1>My Card - main</h1>
        </Link>
      }>
        
      <Header />
      <AddItemButton fn={setModalIsOpen} />
      { 
        modalIsOpen && 
        <AddBuyingForm 
          addToItemList={callbacks.addToItemList} 
          setModalIsOpen={setModalIsOpen} />
      }
      {select.items && <ShopingList items={select.items} />}
    </Layout>
  );
}

export default MainPage;
