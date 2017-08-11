import { connect } from 'react-redux';
import Layout from '../components/Layout';
import * as nemobusMethods from 'libs/nemobus-methods';

// import some actions if Layout component should be changed by some events

const mapStateToProps = state => {
  return {
    items: state.cards,
    option: state.cardOption
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    listeners: {
      onClick: function() {
        // 'this' property consists 'item', 'option'.
        // 'item' has a flake specific properties
        // 'option' has commonely used properties for all flakes 
        console.log('onClick item: ', this.item);
        console.log('onClick option: ', this.option);

				if (process.env.ELECTRON) {
          nemobusMethods.execute(this.item.action, 0, 0, 0);
				}
      }

      // add other react event listeners
    }
  }
}

const CardsLayout = connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);

export default CardsLayout;
