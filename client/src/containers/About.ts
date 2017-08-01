import About from '../components/About';
import * as actions from '../actions/enthusiasm';
import { connect, Dispatch } from 'react-redux';

const mapState = (rootState: RootState) => {
  return {
    level: rootState.enthusiasm.level,
    languageName: rootState.enthusiasm.languageName
  };
};

const mapDispatch = (dispatch: Dispatch<actions.EnthusiasmAction>) => ({
  onIncrement: () => dispatch(actions.incrementEnthusiasm()),
  onDecrement: () => dispatch(actions.decrementEnthusiasm())
});

export default connect(mapState, mapDispatch)(About);
