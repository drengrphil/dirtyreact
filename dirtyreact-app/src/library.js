import React from 'react'
import PropTypes from 'prop-types'
import {Book} from './book'
import {Hiring} from './hiring'
import {NotHiring} from './nothiring'

// ES6 Class Component option
class Library extends React.Component{
    static defaultProps = {
      books: [
        {"title": "Solo Management in Poor World", "author": "Jacob Zuma", "pages": 260}
      ]
    }
  
    state = {
      open: true,
      freeBookMark: true,
      hiring: false,
      data: [],
      loading: false
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
      this.setState(prevState => ({
        open: !prevState.open
      }))
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
                          {this.state.data.map(product => {
                              return (
                                  <div key={product.id}>
                                      <h3>Library Product of the Week!</h3>
                                      <h4>{product.name}</h4>
                                      <img alt={product.name} src={product.image} height={100}/>
                                  </div>
                              )
                          })}
                          
                      </div>
        }
        <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
        <button onClick={this.toggleOpenClosed}>Add to Cart</button>
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
        </div>
      )
    }
  }
  
  // Make sure right types are proivded
  Library.propTypes = {
    books: PropTypes.array
  }
  
  Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pages: PropTypes.number,
    freeBookMark: PropTypes.bool
  }

  export default Library