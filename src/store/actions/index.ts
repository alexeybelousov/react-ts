import * as UserActions from './users';
import * as TodosActions from './todos';

export default {
    ...UserActions,
    ...TodosActions,
}