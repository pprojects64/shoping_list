import AddBuyingForm from "../../components/add-item-form/AddBuyingForm";
import useStore from "../../utils/use-context";
import React, { useCallback, useState } from "react";
import ShopingList from "../../components/list/ShopingList";
import Layout from "../../components/layout/layout";
import Header from "../../components/header/Header";
import useSelector from "../../utils/use-selector";
import useInit from "../../utils/use-init";
import { Link } from "react-router-dom";
import AddItemButton from "../../components/addItemButton/index";
import AmountCounter from "../../components/AmountCounter/AmountCounter";

function MainPage() {
  const store = useStore();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useInit(async () => {
    await store.items.load();
  }, []);

  const select = useSelector((state) => ({
    items: state.items.items,
    waiting: state.items.waiting,
  }));

  return (
    <Layout
      head={
        <Link to={"/"}>
          <h1 className="title">My Card - main</h1>
        </Link>
      }
    >
      <Header />
      <AddItemButton fn={setModalIsOpen} />
      {modalIsOpen && <AddBuyingForm setModalIsOpen={setModalIsOpen} />}
      {select.items && <ShopingList items={select.items} />}
    </Layout>
  );
}

export default MainPage;
