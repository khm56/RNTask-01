import React, { Component } from "react";
import { ImageBackground, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

// NativeBase Components
import {
  List,
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Content
} from "native-base";

// Style
import styles from "./styles";

// List
import coffeeshops from "./list";

class CoffeeList extends Component {
  handlePress() {
    alert("Pressed");
  }
  renderItem(shop) {
    return (
      <TouchableOpacity key={shop.id} onPress={() => this.handlePress(shop)}>
        <ImageBackground
          source={{ uri: shop.background }}
          style={styles.background}
        >
          <View style={styles.overlay} />
          <ListItem style={styles.transparent}>
            <Card style={styles.transparent}>
              <CardItem style={styles.transparent}>
                <Left>
                  <Thumbnail
                    bordered
                    source={{ uri: shop.img }}
                    style={styles.thumbnail}
                  />
                  <Text style={styles.text}>{shop.name}</Text>
                  <Text note style={styles.text}>
                    {shop.distance}
                  </Text>
                </Left>
              </CardItem>
            </Card>
          </ListItem>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
  render() {
    if (!this.props.coffeeshops) {
      return <Content />;
    }
    let ListItems = this.props.coffeeshops.map(shop => this.renderItem(shop));
    return (
      <Content>
        <List>{ListItems}</List>
      </Content>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.list,
    coffeeshops: state.coffee.coffeeshops,
    loading: state.coffee.loading
  };
};

export default connect(mapStateToProps)(CoffeeList);
