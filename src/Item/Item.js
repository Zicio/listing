import classNames from "classnames";
import PropTypes from "prop-types";
import "./Item.scss";

function Item(props) {
  const { item } = props;

  const currencyPrice = () => {
    switch (item.currency_code) {
      case "USD":
        return <p className="item-price">${item.price}</p>;
      case "EUR":
        return <p className="item-price">€{item.price}</p>;
      default:
        return (
          <p className="item-price">
            {item.currency_code} {item.price}
          </p>
        );
    }
  };

  const level = () => {
    if (item.quantity < 10) {
      return (
        <p className={classNames("item-quantity", "level-low")}>
          {item.quantity} left
        </p>
      );
    }
    if (item.quantity > 20) {
      return (
        <p className={classNames("item-quantity", "level-high")}>
          {item.quantity} left
        </p>
      );
    }
    return (
      <p className={classNames("item-quantity", "level-medium")}>
        {item.quantity} left
      </p>
    );
  };

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} alt="Изображение товара" />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">
          {item.title.length > 50
            ? item.title.slice(0, 50).concat("...")
            : item.title}
        </p>
        {currencyPrice()}
        {level()}
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Item;
