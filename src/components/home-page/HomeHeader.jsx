import {Link} from "react-router-dom";
import {LoginOutlined} from "@mui/icons-material";
import React from "react";
import {Container} from "react-bootstrap";
import PropTypes from "prop-types";
import { useAuth } from "../../context/auth";

const HomeHeader = ({commonClassName}) => {
    const {user} = useAuth()

    console.log(user)
    return (
        <Container className={commonClassName + ' home-header'}>
            <header data-bs-theme="dark" className={'d-flex justify-content-between align-items-center'}>
                <h2 style={{color: 'var(--bs-body-color)'}}>VieTicket</h2>
                <div>
                    {user ? <div className="text-white">{user.email}</div> : <Link to="/login" className="btn btn-primary"><LoginOutlined/> Login</Link>}
                </div>
            </header>
        </Container>
    );
}

HomeHeader.propTypes = {
    commonClassName: PropTypes.string.isRequired,
};

export default HomeHeader;