import { connect } from 'react-redux';
import Background from '../components/Background';
import { showBgNextOne } from '../actions'

const mapStateToProps = state => {
  return {
    currentItem: state.backgrounds[state.currentBackgroundId],
    items: state.backgrounds,
    option: state.backgroundOption
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    listeners: {
      onClick: (total) => {
        console.log('background clicked');
        dispatch(showBgNextOne(total));
      }
    }
  }
}

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  return {
    ...propsFromState,
    listeners: {
      onClick: () => propsFromDispatch.listeners.onClick(propsFromState.items.length)
    }
  }
}

const CardsBackground = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Background);

export default CardsBackground;