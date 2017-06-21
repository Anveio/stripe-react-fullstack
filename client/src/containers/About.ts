import About from '../components/About';
import * as actions from '../actions/enthusiasm';
import { connect, Dispatch } from 'react-redux';

export const mapStateToProps = (rootState: RootState) => {
  return {
    level: rootState.enthusiasm.level,
    languageName: rootState.enthusiasm.languageName
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<actions.EnthusiasmAction>) => {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);