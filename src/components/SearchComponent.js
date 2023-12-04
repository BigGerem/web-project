import React from 'react';
import styles from '../styles/style.module.css'; 
class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    };

    handleSearch = () => {
        // Тут буде пізніше додана логіка для обробки пошуку
    };

    render() {
        return (
            <div className={styles.searchComponent}>
                <input className={styles.searchInput}
                    type="text"
                    placeholder="Знайти книгу"
                    value={this.state.searchTerm}
                    onChange={this.handleInputChange}
                />
                <button className={styles.searchButton} onClick={this.handleSearch}>Пошук</button>
            </div>
        );
    }
}

export default SearchComponent;
