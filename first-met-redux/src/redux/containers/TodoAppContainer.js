import{ connect } from "react-redux";
// import { addTodoActionCreator, removeAllActionCreator, removeTodoActionCreator } from "../actions";
// import { addTodoActionCreator, removeAllActionCreator, removeTodoActionCreator } from "../../components/TodoApp";
import { addTodo as addTodoActionCreator, removeTodo as removeAllActionCreator, removeAll as removeTodoActionCreator } from "../actions/todoAction";
import TodoApp from "../../components/TodoApp";

function mapStateProps(state, ownProps) {
    return {
        todoItems: state.todo
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        addTodo: (text) => {
            dispatch(addTodoActionCreator(text));
        },
        removeTodo: () => {
            dispatch(removeTodoActionCreator());
        },
        removeAll: () => {
            dispatch(removeAllActionCreator());
        },
    }
}

const TodoAppContainer = connect(
    mapStateProps,
    mapDispatchToProps
)(TodoApp);


export default TodoAppContainer;