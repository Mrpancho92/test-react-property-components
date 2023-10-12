import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'; 
import Container from 'react-bootstrap/Container';
import WeatherService from './services/WeatherService';
import './App.css';

class Form extends Component {
    // myRef = React.createRef();
  /*   constructor(props) {
        super(props);
        this.myRef = React.createRef();
    } */

    state = {
        lat: null/* 55.7504461 */,
        lon: null/* 37.6174943 */,
        temp: '1111232'
    }


  /*   componentDidMount() {
        this.myRef.current.focus();
    } */

    setInputRef = (elem) => {
        this.myRef = elem;
    }

    focusFirstTI = () => {
        if (this.myRef) {
            this.myRef.focus();
        }
        // this.myRef.current.focus(); - current не будет в колбэк рефа
    }

    weatherservice = new WeatherService();

        componentDidMount() {
        this.onRequest();
    }  

  /*   onRequestButton = () => {
        this.onRequest();
        this.onRequest();
    } */ 

    onRequest = () => {        
    this.weatherservice.getCitylocation()
                .then(this.onCharListLoaded)
                .catch('this.onError');  
    }
 
    onCharListLoaded = (cityLocation) => {
        this.setState({
             lat: cityLocation.lat,
             lon: cityLocation.lon
        });
       /*  if (this.state.lat === null || this.state.lon === null ) return
        this.weatherservice.getCityWeater(this.state.lat, this.state.lon)
                .then(this.onCharListLoaded2)
                .catch('this.onError2'); */
    }

    /*  onCharListLoaded2 = (cityWeater) => {
        this.setState({
            temp: cityWeater.main.temp.toFixed(1)
       });  
        }  */
    
    render() {
        return (
            <Container className="position-relative">
                <div className="w-50 border mt-5 p-3 m-auto">В Москве {this.state.lat} °С</div>
                <button type="button" className="border mt-4 position-absolute top-30 start-50 translate-middle"
                    // className="button button__main button__long"
                    // disabled={newItemLoading}
                    // style={{ 'display': charEnded ? 'none' : 'block' }}
                    onClick={this.onRequestButton}>
                    <div>load weather</div>
                </button>
                <form className="w-50 border mt-5 p-3 m-auto">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input ref={this.setInputRef} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea onClick={this.focusFirstTI} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
            </Container>
        )
    }
}

function App() {
    return (
        <Form/>
    );
}

export default App;



// const arrr = [6,5,3,1,8,7,4,2,12,10,11,13,28,21,22,18,15,14];

// 5,6,3,1,8,7,4,2   j=0  i=0
// 5,3,6,1,8,7,4,2   j=1
// 5,3,1,6,8,7,4,2   j=2
// 5,3,1,6,8,7,4,2   j=3
// 5,3,1,6,7,8,4,2   j=4
// 5,3,1,6,7,4,8,2   j=5
// 5,3,1,6,7,4,2,8   j=6

// 3,5,1,6,7,4,2,8   j=0  i=1
// 3,1,5,6,7,4,2,8   j=1
// 3,1,5,6,7,4,2,8   j=2
// 3,1,5,6,7,4,2,8   j=3
// 3,1,5,6,4,7,2,8   j=4
// 3,1,5,6,4,2,7,8   j=5
// 3,1,5,6,4,2,7,8   j=6

// 1,3,5,6,4,2,7,8   j=0  i=2
// 1,3,5,6,4,2,7,8   j=1
// 1,3,5,6,4,2,7,8   j=2
// 1,3,5,4,6,2,7,8   j=3
// 1,3,5,4,2,6,7,8   j=4
// 1,3,5,4,2,6,7,8   j=5
// 1,3,5,4,2,6,7,8   j=6

// 1,3,5,4,2,6,7,8   j=0  i=3
// 1,3,5,4,2,6,7,8   j=1
// 1,3,4,5,2,6,7,8   j=2
// 1,3,4,2,5,6,7,8   j=3
// 1,3,4,2,5,6,7,8   j=4
// 1,3,4,2,5,6,7,8   j=5
// 1,3,4,2,5,6,7,8   j=6

// 1,3,4,2,5,6,7,8   j=0  i=4
// 1,3,4,2,5,6,7,8   j=1
// 1,3,2,4,5,6,7,8   j=2
// 1,3,2,4,5,6,7,8   j=3
// 1,3,2,4,5,6,7,8   j=4
// 1,3,2,4,5,6,7,8   j=5
// 1,3,2,4,5,6,7,8   j=6

// 1,3,2,4,5,6,7,8   j=0  i=5
// 1,2,3,4,5,6,7,8   j=1
// 1,2,3,4,5,6,7,8   j=2
// 1,2,3,4,5,6,7,8   j=3
// 1,2,3,4,5,6,7,8   j=4
// 1,2,3,4,5,6,7,8   j=5
// 1,2,3,4,5,6,7,8   j=6

/*  for (let i = 0; i < arrr.length-1; i++) {
    for (let j = 0; j < arrr.length; j++){
        let box;
        if (arrr[j] > arrr[j + 1]) {
            box = arrr[j + 1];
            arrr[j + 1] = arrr[j];
            arrr[j] = box;
        }
    }
 }
console.log(arrr);

const arr = [6,5,3,1];

function bubbleSortConcept2(arr) {
    let swapped;
    do {
      swapped = false;
      console.log(arr);
      arr.forEach((item, index) => {
        if (item > arr[index + 1]) {
          // Save the value to a variable so we don't lose it
          let temp = item;
          arr[index] = arr[index + 1];
          arr[index + 1] = temp;
          swapped = true;
        }
      })
      console.log(swapped);
    } while (swapped);
  }
  bubbleSortConcept2(arr); */

//   "homepage": "https://Mrpancho92.github.io/test-react-property-components",
    // "predeploy": "npm run build",
    // "deploy": "gh-pages -d build",