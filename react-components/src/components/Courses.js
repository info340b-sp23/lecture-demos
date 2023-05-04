import CourseDataArray2 from "../course-data.json"

function CourseCard(props) {
  const courseObj = props.courseObj;

  let classStr = "card col-12 col-md-6 col-lg-4";

  // if the class is being taught, change the background color
  if (props.courseObj.number === "INFO 340"){
    classStr += " bg-warning"
  }
  else if (props.courseObj.number === "INFO 448"){
    // classStr += " bg-primary"
    // return null;
  }
  else {
    classStr = classStr;
  }

  return (
    <div className={classStr}>
      <img src={"img/" + courseObj.img} alt="chrome browser logo" />
      <h3>{courseObj.number}: {courseObj.title}</h3>
    </div>
  )
}

export default function CourseCards(props) {

  // const CourseDataArray = [
  //   {"number": "INFO 340", "title": "Client Side Development", "img": "chrome-logo-150w.png"},
  //   {"number": "INFO 201", "title": "Foundational Skills for Data Science", "img": "rlogo-150w.png"},
  //   {"number": "INFO 443", "title": "Software Architecture", "img": "rockefeller-avatar-150w.png"},
  //   {"number": "INFO 448", "title": "Android Development", "img": "android-icon-150w.png"},
  //   {"number": "LIS 511", "title": "Introduction to Programming", "img": "python-logo-150w.png"}
  // ]

  const CourseCardArray = CourseDataArray2.map(
    (courseObject) => {
      return (
        <CourseCard courseObj={courseObject} key={courseObject.number}/>
      )
    }
  )

  return (
    <section>
      <h2>Courses I Teach</h2>
      <p>
        <button
          className="btn btn-outline-primary"
          data-bs-toggle="collapse"
          data-bs-target="#class-cards"
        >
          Hide All
        </button>
      </p>
      <div className="container">
        <div id="class-cards" className="collapse show row">
          {CourseCardArray}
        </div>
      </div>
    </section>
  )
}