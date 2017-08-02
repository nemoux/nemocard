import { connect } from 'react-redux';
import Flake from '../components/Flake';
// import some actions if Flake component should be changed by some events

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)
  return {
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      console.log('card clicked');
    }
  }
}

const CardsOne = connect(
  mapStateToProps,
  mapDispatchToProps
)(Flake);

export default CardsOne;