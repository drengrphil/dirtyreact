import React from 'react'
import ReactDOM from 'react-dom'

let skiData = {
  total : 50,
  powder: 20,
  backcountry: 10,
  goal: 100
}

// React uses component-based structure
// creating nested collections of components.
class Message extends React.Component{
  // Method to render elements
  render()
  {
    console.log(this.props)
    return (
      <div>
        <h1>Hello welcome to our home</h1>
        <h1 style={{color: this.props.color}}>
            {this.props.msg}
        </h1>
        <p>Check back soon in {this.props.minutes} minutes </p>
      </div>
    )
  }
}

ReactDOM.render(
  <Message color="blue" msg="how are you?" minutes={50}/>,
  // where to render this
  document.getElementById('react-container')
)

const getPercent = decimal =>{ // Argument is decimal
  return decimal * 100 + '%'
}

const calcGoalProgress = (total, goal) => {
  return getPercent(total/goal)
}

// Function Components
// Destructure: const SkiDayCounter = (total, props, backcountry, goal)=>{
const SkiDayCounter = (props)=>{
  return(
    <section>
      <div>
          <p>Total Days: {props.total}</p>
      </div>
      <div>
          <p>Powder Days: {props.powder}</p>
      </div>
      <div>
          <p>Backcountry Days: {props.backcountry}</p>
      </div>
      <div>
          <p>Goal Progress: {calcGoalProgress(props.total, props.goal)}</p>
      </div>
    </section>
  )
}

/* class SkiDayCounter extends React.Component{
  getPercent = decimal =>{ // Argument is decimal
    return decimal * 100 + '%'
  }

  calcGoalProgress = (total, goal) => {
    return this.getPercent(total/goal)
  }

  render(){
    // Destructuring example
    const {total, powder, backcountry, goal} = this.props
    // this.props.total
    return(
      <section>
        <div>
            <p>Total Days: {total}</p>
        </div>
        <div>
            <p>Powder Days: {powder}</p>
        </div>
        <div>
            <p>Backcountry Days: {backcountry}</p>
        </div>
        <div>
            <p>Goal Progress: {this.calcGoalProgress(total, goal)}</p>
        </div>
      </section>
    )
  }
} */

ReactDOM.render(
  <SkiDayCounter 
       total = {skiData.total}
       powder = {skiData.powder}
       backcountry = {skiData.backcountry}
       goal = {skiData.goal}
  />,
  document.getElementById('skiday-container')
)

/*var style = {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'Arial'
}

const title = React.createElement(
  'h1', // Element type
  {id: 'title', className: 'header', style:style}, // Attribute of the element
  'Hello World' // Display child element
)*/

/*const titlelist = React.createElement(
  'ul',
  {id: 'titlelist', className: 'header', style: style},
  React.createElement(
    'li',
    {},
    'item on our list'
  )
)*/

/*ReactDOM.render(
  titlelist,
  document.getElementById('shoplist')
)

// Using tag-base syntax
ReactDOM.render(
  <div style={style}>
  <h1> Welcome here </h1>
  <p>Glab you stop here </p>
</div>,
  document.getElementById('greeting')
  // Another way to render without creating element
)*/

// Array of data
// Could data coming from some sort of database or external file.
let bookList = [
  {"title": "Solo Management", "author": "Jacob Zuma", "pages": 260},
  {"title": "Micro Management", "author": "Lanko David", "pages": 450},
  {"title": "Economy in Distress", "author": "Anthony Joshua", "pages": 860},
  {"title": "Melon and Onion", "author": "Rack Jay", "pages": 160},
  {"title": "Solo Management in Stoneage", "author": "Jacob Zuma", "pages": 450},
]

/*const Library = ({books}) => {
  // Child component Book
  return (
    <div>
         {books.map(
           (book, ukey) =>
               <Book
               key={ukey}
                   title={book.title}
                   author={book.author}
                   pages={book.pages}
               />
         )}
    </div>
  )
}*/

// Function component without return statement.
const Hiring = () => 
    <div>
      <p>The library is hiring. Go to www.library.com/jobs for more</p>
    </div>

const NotHiring = () =>
    <div>
      <p>The Library is not hiring. Check back later for more.</p>
    </div>

const Book = ({title, author, pages, freeBookMark}) =>{
  return (
    <section>
        <h2>{title}</h2>
        <p>by: {author}</p>
        <p>Pages: {pages} pages</p>
        <p>Free Bookmark Today: {freeBookMark ? 'yes!' : 'no!'}</p>
    </section>
  )
}

// ES6 Class Component option
class Library extends React.Component{

  state = {
    open: true,
    freeBookMark: true,
    hiring: false,
    data: [],
    loading: false
  }

  // constructor
  constructor(props){
    super(props)
    this.state = {
      open: true,
      hiring: false
    }
    // Bind - to make it accessible
    this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
  }

  // Component lifecycle
  componentDidMount(){
    this.setState({loading: true})
    // Fetch data from a rest API
    fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
        .then(data => data.json())
        .then(data => this.setState({data, loading: false}))
    // console.log("Component is mounted")
  }

  componentDidUpdate(){
    console.log("Component just updated")
  }

  // State change
  toggleOpenClosed(){
    this.setState({
      open: !this.state.open
    })
  }

  // Child component Book
  render(){
    console.log(this.state)
    // const books = this.props.books
    const {books} = this.props
    return (
      <div>
      {this.state.hiring ? <Hiring /> : <NotHiring />}
      {this.state.loading
          ? "loading..."
          : <div>
                {this.state.data.map(product =>{
                  return (
                    <div>
                      <h3>Library product of the week!</h3>
                      <h4>{product.name}</h4>
                      <img src={product.image} height={100} />
                    </div>
                  )
                })}
            </div>
      }
      <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
           {books.map(
             (book, ukey) =>
                 <Book
                 key={ukey}
                     title={book.title}
                     author={book.author}
                     pages={book.pages}
                     freeBookMark={this.state.freeBookMark}
                 />
           )}
           <button onClick={this.toggleOpenClosed}>Add to Cart</button>
      </div>
    )
  }
}


ReactDOM.render (
  <Library books={bookList}/>,
  document.getElementById('library')
)

/*const Library = ({books}) => {
  // Child component Book
  return (
    <div>
      <Book title="Sailor on Hill ed 1" author="Phil Oni" pages={250} />
      <Book title="Sailor on Hill ed 2" author="Phil Oni" pages={250} />
      <Book title="Sailor on Hill ed 3" author="Phil Oni" pages={250} />
    </div>
  )
}*/