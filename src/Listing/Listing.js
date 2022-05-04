import Item from "../Item/Item";
import PropTypes from "prop-types";

import "./Listing.scss";

function Listing(props) {
  let { items } = props;
  if (items.length) {
    items = items.filter((item) => item.state === "active");

    return (
      <div className="item-list">
        {items.map((item) => (
          <Item item={item} key={item.listing_id} />
        ))}
      </div>
    );
  }
  console.log("База данных пуста");
}

Listing.defaultProps = {
  items: [],
};

Listing.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Listing;
