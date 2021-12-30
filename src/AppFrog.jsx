import Tiendas from './components/Tiendas/Tiendas';
import {useState, useEffect} from 'react';
import { getUsers } from './services';

function AppFrog() {

  const [users, setUsers] = useState({});
  useEffect( () => {
    async function loadUsers () {
      const response = await getUsers();
      console.log(response.status, response.statusText, response.data.users);
      
      if (response === 200) {
        setUsers(response.data)
      }
    }
    loadUsers()
  }, [])

  return (
    <>
    <Tiendas usuarios={users} />
    </>
  );
}

export default AppFrog;
