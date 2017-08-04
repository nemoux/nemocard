import { connect } from 'react-redux';
import Background from '../components/Background';
import { showBgNextOne } from '../actions'

const mapStateToProps = state => {
  return {
    metadata: state.backgrounds[state.currentBackgroundId],
    items: state.backgrounds,
    option: state.backgroundOption
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (total) => {
      console.log('background clicked');
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
)(Background);

export default CardsBackground;