import PropTypes from 'prop-types';

Menu.propTypes = {
    children: PropTypes.node.isRequired,
};

function Menu({ children }) {
    return <nav>{children}</nav>;
}

export default Menu;
