export default function HeaderBar(props) {
    const name = "Orson Xu"
  
    return (
      <header className="text-primary py-5">
        <div className="container">
          <h1>{name}</h1>
          <p>University of Washington iSchool</p>
          <p>
            <a className="btn btn-success" href="http://getbootstrap.com/"
            >Built with Bootstrap</a>
          </p>
        </div>
      </header>
    )
  }
  