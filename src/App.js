//import { Route } from "react-router-dom";

//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//Pages
import HomePage from "./Pages/Home.page";
import Movie from "./Pages/Movie.page";
/*function Name() {
  return <h1>Welcome to Home Page!!!</h1>
}

function Name2() {
  return <h1>Welcome to Movie Page!!!</h1>
}*/
function App() {
  return (
    <>
    <DefaultHOC path="/" exact component={HomePage} />
    <MovieHOC path="/movie/:id" exact component={Movie} />

    </>
    
    /*<>
    <Route path="/" exact component={Name} />
    <Route path="/movie" exact component={Name2} />
    </>*/
  );
}
// /, /movie
export default App;
/*
const shashank = {
  name:"shashank",
  dob: 2002
};

const student = shashank;
student.goodStudent = true;

The above two lines is same as :
const student = {
  name:"shashank",
  dob: 2002,
  goodStudent: true
};


//***********SPREAD Operator****************
const shashank = {
  name:"shashank",
  dob: 2002
};

const student = {...shashank, goodStudent:true};//Spread Operator

The above line is same as:
const student = {
  name:"shashank",
  dob: 2002,
  goodStudent: true
};
*/