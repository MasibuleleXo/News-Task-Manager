// TodoAppHeader.js
const TodoAppHeader = () => {
    return (
      <div className="header-container">
        <div className="header-options">
          <button className="options-button">Options</button>
          <button className="settings-button">Settings</button>
        </div>

        <div className="user-info">
          <div className="user-details">
            <span className="user-name">John Doe</span>
            <span className="welcome-text">Welcome</span>
          </div>

          <div className="profile-picture">
            {/* Assuming you have a profile picture URL */}
            <img src="profile-picture.jpg" alt="Profile" />
          </div>
        </div>

        <div className="tasks-info">
          <p className="tasks-pending">5 tasks pending</p>
        </div>
        
        <div className="search-section">
          <input type="text" placeholder="Search tasks..." />
        </div>
        
      </div>
    );
  };
  
  export default TodoAppHeader;
  