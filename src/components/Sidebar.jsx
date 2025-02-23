import { Link, NavLink } from "react-router-dom";

function Sidebar({selectedTab,onSelectTab}) {
    const handleOnClick = (menuItem) => {
        onSelectTab(menuItem);
    }
    
    return <>
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: '280px'}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li onClick={() => handleOnClick('Home')}>
        <NavLink to="/" className={`nav-link link-dark`}>
          <svg className="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
          <span >Post</span>
        </NavLink>
      </li>
      <li onClick={() => handleOnClick('Post')}>
        <NavLink to="/create-post" className={`nav-link link-dark`}>
          <svg className="bi me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
          <span >Create Post</span>
        </NavLink>
      </li>
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>Sunit</strong>
      </a>
      <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
  </>
}

export default Sidebar;