import "./Dashboard.css";



const Dashboard = () => {

    const handleClick = () => {
      console.log('This is Clicked');
    }
  
    return(
      <div className="dashboard_container" onClick={handleClick}>
      <img className="dashboard_img" src="https://img.icons8.com/?size=512&id=22984&format=png" alt="dashbord_img" />
      <div className="dashboard_text">
        <h4>Dashboard</h4>
      </div>
      </div>
    );
    }

    export default Dashboard;