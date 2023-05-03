import React from 'react';

//a component representing the Header
export function HeaderBar(props){

  const title = "Joel Ross"

  //what does it look like?
  return (
    <header className="text-light py-3 mb-3">
      <div className="container">
        <h1>{title}</h1>
        <p>University of Washington iSchool</p>
        <p>
          <a className="btn btn-success d-none d-md-inline d-lg-none" href="http://getbootstrap.com/">Built with Bootstrap</a>
        </p>
      </div>
    </header>
  )
}
