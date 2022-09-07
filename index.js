const Notification = props => {
  //  Write your code here.
  const {notificationIcon,notificationText}=props;
  return <div>
      <img src={notificationIcon}/>
      <p className={className}>{notificationText}</p>
  </div>

  </div>
}

const element = (
  //  Write your code here.  
  <div className="bg-container">
      <h1 className='heading'>Notifications</h1>
          <Notification notificationIcon='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png' notificationText='Information Message'/>
          <Notification notificationIcon='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png' notificationText='Information Message'/>
          <Notification notificationIcon='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png' notificationText='Information Message'/>
          <Notification notificationIcon='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png' notificationText='Information Message'/>
          
      
  </div> 
)

ReactDOM.render(element, document.getElementById('root'))
