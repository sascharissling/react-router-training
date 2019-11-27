import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

//STYLE Start

const RouterLink = styled(Link)`
  text-decoration: none;
`;

const ShopWindow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  * {
    color: black;
  }
`;

const Container = styled.div`
  background: #ffe;
  width: 120px;
  height: 200px;
  height: auto;
  border-radius: 30px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  box-shadow: 3px 6px 16px 0px rgba(102, 102, 102, 1);
  align-items: center;
`;

const ItemTitle = styled.h4`
  color: black;
  margin: 5px;
`;

const ItemDescription = styled.p`
  color: black;
  font-size: 0.8em;
  margin: 5px 10px 15px 10px;
`;

const ItemPrice = styled.h5`
  color: purple;
  font-size: 1em;
  margin: 5px 10px 15px 10px;
`;

const NoDescription = styled.p`
  color: black;
  font-style: italic;
  font-size: 0.8em;
  margin: 5px 10px 15px 10px;
  color: grey;
`;

const ItemImage = styled.img`
  width: 100%;
  margin: 0;
  border-radius: 30px 30px 0px 0px;
`;
//STYLE End

export default function Shop() {
  const [items, setItems] = React.useState([]);

  async function getFortniteItems() {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get"
    );
    const items = await data.json();
    console.log(items.data);
    setItems(items.data);
  }
  React.useEffect(() => {
    getFortniteItems();
  }, []);

  return (
    <>
      <h1>Shop</h1>
      <ShopWindow>
        {items.map(item => (
          <RouterLink
            to={`/shop/${item.itemId}`}
            key={item.itemId}
            style={{ textDecoration: "none" }}
          >
            <Container>
              <ItemImage src={item.item.images.information} alt="item image" />
              {item.item.description && (
                <ItemDescription>{item.item.description}</ItemDescription>
              )}
              {!item.item.description && (
                <NoDescription>No description available</NoDescription>
              )}
              <ItemPrice>☈{item.store.cost}</ItemPrice>
            </Container>
          </RouterLink>
        ))}
      </ShopWindow>
    </>
  );
}
