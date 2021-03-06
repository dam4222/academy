import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as viewsActions      from '../../redux/modules/views';
import { Time }              from '../../views';


const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      enterTime: viewsActions.enterTime,
    },
    dispatch
  );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Time);
