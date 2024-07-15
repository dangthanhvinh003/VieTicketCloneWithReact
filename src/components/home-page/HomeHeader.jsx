import { Link } from "react-router-dom";
import { Add, LoginOutlined, Search } from "@mui/icons-material";
import React from "react";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import { useAuth } from "../../context/auth";

const HomeHeader = ({ commonClassName }) => {
    const { user } = useAuth()

    console.log(user)
    return (
        <Container className={commonClassName + ' home-header'}>
            <header data-bs-theme="dark" className={'d-flex justify-content-between align-items-center'}>
                <h2 className="fs-3" style={{ color: 'var(--bs-body-color)' }}>VieTicket</h2>
                <div>
                    <Link to={"/search"} className={'btn btn-primary'}>
                        <Search className="me-2" />
                        Search Events
                    </Link>
                </div>
                <div className="d-flex align-items-center">
                    {
                        user && user.role === 'o' &&
                        (
                            <Link to={"/createEvent"} className={'btn btn-primary me-2'}>
                                <Add className="me-2" />
                                Add event
                            </Link>
                        )
                    }
                    {user ?
                        <div className="text-white">
                            <Link to={`/users/${user.id}`}>
                                {user.email}
                            </Link>
                        </div>
                        : <Link to="/login" className="btn btn-primary"><LoginOutlined /> Login</Link>}
                </div>
            </header>
        </Container>
    );
}

HomeHeader.propTypes = {
    commonClassName: PropTypes.string.isRequired,
};

export default HomeHeader;