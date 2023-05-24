import React, { useState, useEffect } from 'react';

//example GitHub repo data
const EXAMPLE_DATA = [
  { full_name: "(example) react", html_url: "https://github.com/facebook/react" },
  { full_name: "(example) react-bootstrap", html_url: "https://github.com/react-bootstrap/react-bootstrap" },
  { full_name: "(example) react-router", html_url: "https://github.com/remix-run/react-router" }
];


function App(props) {

  const [stateData, setStateData] = useState(EXAMPLE_DATA);
  //control form
  const [queryInput, setQueryInput] = useState('');

  const handleChange = (event) => {
    setQueryInput(event.target.value);
  }


  useEffect(() => {
    const first_url = "https://api.github.com/search/repositories?q=" + "start" + "&sort=stars";
    const results = fetch(first_url)
      .then( (response) => {
        return response.json();
      })
      .then((data) => {
        setStateData(data.items)
      })
    // console.log("effect function");

    function cleanup(){
      console.log("cleanup function executed!");
    }

    return cleanup;
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(event)
    //do something with form input!

    const url = "https://api.github.com/search/repositories?q=" + queryInput + "&sort=stars";
    // const file_url = "./data.json"

    const response = await fetch(url);
    const data = await response.json();
    setStateData(data.items);

    // const results = fetch(url)
    //   .then( (response) => {
    //     // console.log(response);
    //     const jsonresults = response.json();
    //     return jsonresults;
    //   })
    //   .then((data) => {
    //       // console.log(data);
    //       // console.log(data.items[0])
    //       setStateData(data.items)
    //       // setStateData(data)
    //   })
    //   .catch((error) => {
    //     console.error("This is an error: " + error);
    //   })
    //   .then(() => {
    //     console.log("I will be executed anyway...")
    //   })
    
  }


  //render the data
  const dataElemArray = stateData.map((repo) => {
    if (!repo.owner){
      return <li key={repo.html_url}><a href={repo.html_url}>{repo.full_name}</a></li>
    } else {
    return <li key={repo.html_url}><a href={repo.html_url}>{repo.full_name}</a> (<a href={repo.owner.html_url}>Owner</a>) </li>
    }
  })

  return (
    <div className="container">
      <header><h1>AJAX Demo</h1></header>

      {/* <form method="GET" action="https://api.github.com/search/repositories"> */}
      <form method="GET">
        <input type="text" className="form-control mb-2"
          name="q"
          placeholder="Search Github for..."
          value={queryInput} onChange={handleChange}
        />
        <input type="hidden" name="sort" value="stars" />
        <button onClick={handleSubmit} type="submit" className="btn btn-primary">Search!</button>
      </form>

      <div className="mt-4">
        <h2>Results</h2>
        {/* results go here */}
        {dataElemArray}
      </div>
    </div>
  )
}

export default App;