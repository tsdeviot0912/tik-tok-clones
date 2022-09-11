import AccountItem from '../../../.././components/AccountItem';

function Renderresult({ searchResults = [] }) {
    return searchResults.map((result) => <AccountItem key={result.id} data={result} />);
}

export default Renderresult;
