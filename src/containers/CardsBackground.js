import { connect } from 'react-redux';
import Flake from '../components/Flake';
import { showBgNextOne } from '../actions'

const mapStateToProps = state => {
  return {
    metadata: state.backgrounds[state.currentBackgroundId],
    items: state.backgrounds
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (total) => {
      dispatch(showBgNextOne(total));
    }
  }
}

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  return {
    ...propsFromState,
    onClick: () => propsFromDispatch.onClick(propsFromState.items.length)
  }
}

const CardsBackground = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Flake);

export default CardsBackground;