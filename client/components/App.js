import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Main from './Main';
function mapStateToPros(state){
  return{
    posts: state.posts,
    comments: state.comments
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators(actions,dispatch);
}
const App = connect(mapStateToPros,mapDispatchToProps)(Main);

export default App;
