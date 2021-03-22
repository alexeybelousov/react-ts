import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActons';
import { useTypedSelector } from '../hooks/useTypedSelector';

const TodosList: React.FC = () => {
    const { todos, error, loading, page, limit } = useTypedSelector(state => state.todo);
    const { fetchTodos, setTodosPage } = useActions();
    const pages = [1, 2, 3, 4, 5];

    useEffect(() => {
        fetchTodos(page, limit);
    }, [page]);

    if (loading) {
        return <h1>loading...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
        <div>
            {todos.map(todo => 
                <div key={todo.id}>{todo.id} - {todo.title}</div>
            )}
        </div>
        <div style={{ display: 'flex' }}>
            {pages.map((p, i) =>
                <div
                    key={i}
                    onClick={() => setTodosPage(p)}
                    style={{ 
                        border: p === page
                            ? '2px solid green'
                            : '1px solid gray',
                        padding: 10
                    }}
                >
                    {p}
                </div>    
            )}
        </div>
        </div>
    );
};

export default TodosList;