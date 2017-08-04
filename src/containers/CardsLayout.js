import { connect } from 'react-redux';
import Layout from '../components/Layout';
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
      onClick: () => {
        console.log('card clicked');
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