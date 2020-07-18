import React from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types'
import Library from './library'


// // Form App
// class FavoriteColorForm extends React.Component{
//   state = {value: ''} // To pass value from the DOM
//   newColor = e =>
//       this.setState({value: e.target.value})

//   submit = e => {
//     console.log(`New Color: ${this.state.value}`)
//     e.preventDefault()
//   }
//   render(){
//     return (
//       <form onSubmit={this.submit}>
//         <label> Favorite Color:
//             <input type="color"
//              onChange={this.newColor}/>
//         </label>
//         <button>Submit</button>
//       </form>
//     )
//   }
// }

// render(
//   <FavoriteColorForm />,
//   document.getElementById('react-container')
// )


// Array of data
// Could data coming from some sort of database or external file.
let bookList = [
  {"title": "Solo Management", "author": "Jacob Zuma", "pages": 260},
  {"title": "Micro Management", "author": "Lanko David", "pages": 450},
  {"title": "Economy in Distress", "author": "Anthony Joshua", "pages": 860},
  {"title": "Melon and Onion", "author": "Rack Jay", "pages": 160},
  {"title": "Solo Management in Stoneage", "author": "Jacob Zuma", "pages": 450},
]

render (
  <Library books={bookList}/>,
  document.getElementById('library')
)
