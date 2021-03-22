import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActons';
import { useTypedSelector } from '../hooks/useTypedSelector';

const UsersList: React.FC = () => {
    const { users, error, loading } = useTypedSelector(state => state.user);
    const { fetchUsers } = useActions();

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return <h1>loading...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(user => 
                <div key={user.id}>{user.name}</div>
            )}
        </div>
    );
};

export default UsersList;