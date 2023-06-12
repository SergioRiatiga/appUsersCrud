import './styles/userCard.css'

const UserCard = ({user, deleteUserById, setUpdateInfo, setIsCloseForm}) => {

  const handleDelete = () => {
    deleteUserById('/users', user.id)
  }

  const handleEdit = () => {
    setUpdateInfo(user)
    setIsCloseForm(false)
  }

  return (
    <article className="card">
      <h2 className="card__title"> {user.first_name} {user.last_name} </h2>
      <hr className="card__hr"/>
      <ul className="card__list">
        <li className="card__item"><span className="card__label">Email</span><span className="card__value"> {user.email} </span></li>
        <li className="card__item"><span className="card__label">Birthday</span><span className="card__value"> <i className='bx bx-gift'></i> {user.birthday} </span></li>
      </ul>
      <hr className="card__hr"/>
      <div className='card__btns'>
        <button className="card__btn-delete" onClick={handleDelete}><i className='bx bx-trash'></i></button>
        <button className="card__btn-edit" onClick={handleEdit}><i className='bx bx-pencil'></i></button>
      </div>
    </article>
  )
}

export default UserCard