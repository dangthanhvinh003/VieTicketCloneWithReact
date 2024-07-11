import {Link} from "react-router-dom";
import {LoginOutlined} from "@mui/icons-material";
import React from "react";
import {Container} from "react-bootstrap";
import PropTypes from "prop-types";

const HomeHeader = ({commonClassName}) => {

    return (
        <Container className={commonClassName + ' home-header'}>
            <header className={'d-flex justify-content-between align-items-center'}>
                <h2>VieTicket</h2>
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