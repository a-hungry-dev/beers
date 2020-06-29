import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Todo from '../components/Todo';
import { fetchTodos } from '../actions/todoActions';

function TodoContainer({ todoData, fetchTodos }) {

    useEffect(() => {
        fetchTodos();
    }, [fetchTodos]);

    return todoData.loading ? (
        <div>Loading</div>
    ) : todoData.error ? (
        <div>{todoData.error}</div>
    ) : (
                <div>
                    <h2>Todos</h2>
                    {
                        todoData && todoData.todos && todoData.todos.map(todo => <Todo title={todo.title} />)
                    }
                </div>

            );
};

const mapStateToProps = state => {
    return {
        todoData: state.todos
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTodos: () => dispatch(fetchTodos())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoContainer);
