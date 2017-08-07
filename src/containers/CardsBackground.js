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
      onClick: function(total) {
        // 'this' property consists 'item', 'option'.
        // 'item' has a flake specific properties
        // 'option' has commonely used properties for all flakes
        console.log('onClick item: ', this.item);
        console.log('onClick option: ', this.option);

        dispatch(showBgNextOne(total));
      }
    }
  }
}

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  return {
    ...propsFromState,
    listeners: {
      onClick: function() {
        const listener = propsFromDispatch.listeners.onClick.bind(this);
        listener(propsFromState.items.length);
      }
    }
  }
}

const CardsBackground = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Background);

export default CardsBackground;
