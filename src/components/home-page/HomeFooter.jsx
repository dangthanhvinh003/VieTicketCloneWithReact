import React from "react";
import PropTypes from "prop-types";

const HomeFooter = ({ commonClassName }) => {
    return (
        <footer className={commonClassName + ' home-footer'}>
            <div className={'d-flex justify-content-center align-items-center'}>
            </div>
        </footer>
    );
}

HomeFooter.propTypes = {
    commonClassName: PropTypes.string.isRequired,
};

export default HomeFooter;