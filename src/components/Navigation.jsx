import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
    return (
        <div className="navigation">
            <nav class="navbar navbar-expand navbar-dark bg-dark">
            <div class="container">
                <Link class="navbar-brand" to="/">
                    John Stuby Beer Tracker
                </Link>
                <div>
                    <ul class="navbar-nav ml-auto">
                        <li
                            class={`nav-item ${
                            props.location.pathname === "/" ? "active" : ""}`}
                        >
                            <Link class="nav-link" to="/">
                                Home
                                <span class="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li
                            class={`nav-item ${
                            props.location.pathname === "/map" ? "active" : ""}`}
                        >
                            <Link class="nav-link" to="/map">
                                Map
                            </Link>
                        </li>
                        <li
                            class={`nav-item ${
                            props.location.pathname === "/beer" ? "active" : ""}`}
                        >
                            <Link class="nav-link" to="/beer">
                                Beer
                            </Link>
                        </li>
                        <li
                            class={`nav-item ${
                            props.location.pathname === "/pub" ? "active" : ""}`}
                        >
                            <Link class="nav-link" to="/pub">
                                Pub
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    );
}
export default withRouter(Navigation);
