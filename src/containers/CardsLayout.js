import { connect } from 'react-redux';
import Layout from '../components/Layout';
// import some actions if Layout component should be changed by some events

const mapStateToProps = state => {
  return {
    items: state.cards
  }
}

const CardsLayout = connect(
  mapStateToProps
)(Layout);

export default CardsLayout;