import { useDispatch } from 'react-redux/es/exports';
import { Input } from './SearchStyle';

import { contactFilter } from '../../redux/contact/filterSlice';

export const Search = ({search}) => {
  const dispatch = useDispatch();

  return (
    <>
      <h3>Search Contacts</h3>
      <Input onChange={e => dispatch(contactFilter(e.target.value))} />
    </>
  );
};
