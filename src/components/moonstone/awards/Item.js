import { Component } from "react";
import Button from "../Button";

class Item extends Component {
  isOutOfStockOrLimit() {
    return this.props.stock === 0 || this.props.limit === 0;
  }

  render() {
    return (
      <div className="awardItem" disabled={this.isOutOfStockOrLimit()}>
        <img src={this.props.img} alt="Award 1" />
        <Button
          style={{ margin: "20px 0 10px 0" }}
          width="208px"
          inner={this.props.price + " tokens 💰"}
        >
          REDEEM
        </Button>
        {this.props.stock !== undefined ? (
          <p className="stock">{this.props.stock} available</p>
        ) : (
          ""
        )}
        {this.props.limit !== undefined ? (
          <p className="limit">You can redeem {this.props.limit} more</p>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Item;
