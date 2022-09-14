import PropTypes from 'prop-types';

import AccountItem from '../../../.././components/AccountItem';

Renderresult.propTypes = {
    searchResults: PropTypes.array.isRequired,
};

function Renderresult({ searchResults = [] }) {
    return searchResults.map((result) => <AccountItem key={result.id} data={result} />);
}

export default Renderresult;
