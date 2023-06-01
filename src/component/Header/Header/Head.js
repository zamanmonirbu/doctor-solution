import React from 'react';

const Head = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <div class="d-flex justify-content-start">
                  
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto fs-4">
            <li class="nav-item active">
              {/* <Link class="nav-link"> Home</Link> */}
              <a class="nav-link" href="www.x.xom">Home </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="www.x.xom">Login </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="www.x.xom">Dashboard </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="www.x.xom">Admin </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="www.x.xom">Blogs </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="www.x.xom">Contract us </a>
            </li>
           
           
          </ul>
          
        </div>
        </div>
      </div>

      </nav>
    );
};

export default Head;