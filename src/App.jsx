import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'

function App() {

  const [isCloseForm, setIsCloseForm] = useState(true)

  const [updateInfo, setUpdateInfo] = useState()

  // const baseUrl = 'https://users-crud.academlo.tech'
  const baseUrl = 'https://user-crud-z94m.onrender.com/api/v1'

  const [ users, getAlluser, createUser, deleteUserById, updateUserById ] = useFetch(baseUrl)

  useEffect(() => {
    getAlluser('/users')
  }, [])

  const handleOpenForm = () => {
    setIsCloseForm(false)
  }

  return (
    <div className='app'>
      <div className='app__header'>
        <h1 className='app__title'>Users</h1>
        <button className='app__btn' onClick={handleOpenForm}><i className='bx bx-plus'></i> Create new user</button>
      </div>
      
      <div className={`form__container ${isCloseForm? 'form__container-close':''}`}>
        <FormUsers
          createUser={createUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setUpdateInfo={setUpdateInfo}
          setIsCloseForm={setIsCloseForm}
        />
      </div>
      <div className='app__card'>
        {
          users?.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              setIsCloseForm={setIsCloseForm}
            />
          ))
        }
      </div>
      <footer className="personal__info">
        <p>Sergio Andrés Riatiga Ibáñez, sergioriatiga@gmail.com, <a href="https://github.com/SergioRiatiga" target="_blank">github</a>.</p>
      </footer>
    </div>
  )
}

export default App
