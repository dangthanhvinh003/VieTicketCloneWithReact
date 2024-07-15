import {Link} from "react-router-dom";
import {LoginOutlined} from "@mui/icons-material";
import React from "react";
import {Container} from "react-bootstrap";
import PropTypes from "prop-types";

const HomeHeader = ({commonClassName}) => {

    return (
        <Container className={commonClassName + ' home-header'}>
            <header data-bs-theme="dark" className={'d-flex justify-content-between align-items-center'}>
                <h2 style={{color: 'var(--bs-body-color)'}}>VieTicket</h2>
                <div>
                    <Link to={'/login'} className={'btn btn-primary'}>
                        <LoginOutlined className={'me-2'}/>
                        Login
                    </Link>
                </div>
            </header>
        </Container>
    );
}

HomeHeader.propTypes = {
    commonClassName: PropTypes.string.isRequired,
};

export default HomeHeader;