import React from 'react';

function CourseCard(props) {
  console.log(props);
  console.log("title", props.courseObj.title);
  // const number = props.number;
  // const title = props.title;
  // const nowTeaching = props.nowTeaching;
  const {courseObj, nowTeaching} = props;
  const {number, title, img} = courseObj; //destructuring!


  let cssClass = "card col-12 col-md-6 col-lg-4"
  if(nowTeaching) {
    cssClass += " bg-warning bg-gradiant";
  }

  return (
    <div className={cssClass}>
      <img src={"img/"+img} alt="chrome browser logo"/>
      <h3>{number}: {title}</h3>
    </div>
  )
}

export function CourseCardDeck(props) {

  //what I have
  //an array of {}
  const COURSE_DATA = [
    {"number": "INFO 340", "title": "Client Side Development", "img": "chrome-logo-150w.png"},
    {"number": "INFO 201", "title": "Foundational Skills for Data Science", "img": "rlogo-150w.png"},
    {"number": "INFO 443", "title": "Software Architecture", "img": "rockefeller-avatar-150w.png"},
    {"number": "INFO 448", "title": "Android Development", "img": "android-icon-150w.png"},
    {"number": "LIS 511", "title": "Introduction to Programming", "img": "python-logo-150w.png"}
  ]

  const cardElemArray = COURSE_DATA.map((courseObj) => {
    //transform it
    const courseCard = <CourseCard courseObj={courseObj} key={courseObj.number} />

    //return the new version
    return courseCard;
  })
  //newArray is an [<>, <>]


  //what I want
  //an array <>
//   const cardElemArray = [
//     <CourseCard courseObj={COURSE_DATA[0]} nowTeaching={true} />,
//     <CourseCard courseObj={COURSE_DATA[1]} />,
//     <CourseCard courseObj={COURSE_DATA[2]} />,
//     <CourseCard courseObj={COURSE_DATA[3]} />,
// ]

  return (
    <div id="class-cards" className="row">
      {cardElemArray}
    </div>
  )
}

