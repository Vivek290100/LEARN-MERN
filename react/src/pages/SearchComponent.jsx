import React, { useState } from 'react';
import useDebounce from './UseDebounce.jsx'; // import the custom hook

const SearchComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 300); // Debounce with a 300ms delay

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Simulate an API call or other action with the debounced search term
    React.useEffect(() => {
        if (debouncedSearchTerm) {
            console.log(`Searching for: ${debouncedSearchTerm}`);
            // Here you can make an API call using the debounced value
        }
    }, [debouncedSearchTerm]); // Only call this effect when the debounced value changes

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Search..."
            />
        </div>
    );
};

export default SearchComponent;
