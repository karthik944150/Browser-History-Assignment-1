import './index.css'

const SearchHistory = props => {
  const {historyDetails, onDeleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails
  const onDelete = () => {
    onDeleteHistory(id)
  }
  return (
    <li className="history-card-container">
      <p className="">{timeAccessed}</p>
      <div className="domain-container">
        <img src={logoUrl} alt={title} className="logo-img" />
        <div className="title-domain-section">
          <p className="title">{title}</p>
          <p className="domain-name">{domainUrl}</p>
        </div>

        <button
          className="delete-button"
          type="button"
          onClick={onDelete}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default SearchHistory
