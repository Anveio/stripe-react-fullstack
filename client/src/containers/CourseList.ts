import CourseList from '../components/Catalogue/CourseList';
import { connect } from 'react-redux';

const mapStateToProps = (rootState: RootState) => ({
  list: rootState.courses.list
});

export default connect(mapStateToProps)(CourseList);
