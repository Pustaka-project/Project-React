import React from 'react';
import Book from '../components/Book';

class BookList extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.books.map(book => (
            <Book
              key={book.id}
              data={book} />
          ))
        }
      </div>
    );
  }
}

BookList.propTypes = {
  books: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

BookList.defaultProps = {
  books: []
};

export default BookList;