import React, {Component} from "react";
import styles from './search_bar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }
  render() {
    return (
      <div className={styles.input_value}>
      <input
        className={styles.input_class}
        value={this.state.term} type="text"
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
      );
  }
  onInputChange(term) {
      this.setState({term});
      this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
