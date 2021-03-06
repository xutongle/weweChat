
import React, { Component } from 'react';
import { Link } from 'react-router';

import classes from './style.css';
import Home from './Home';
import Contacts from './Contacts';
import Settings from './Settings';

export default class Footer extends Component {
    render() {
        var pathname = this.props.location.pathname;
        var component = {
            '/': Home,
            '/contacts': Contacts,
            '/settings': Settings,
        }[pathname];

        return (
            <footer className={classes.footer}>
                <nav>
                    <Link className="Link" to="/">
                        <span className={pathname === '/' && classes.active}>
                            <i className="icon-ion-android-chat" />
                        </span>
                    </Link>

                    <Link className="Link" to="/contacts">
                        <span className={pathname === '/contacts' && classes.active}>
                            <i className="icon-ion-ios-book-outline" />
                        </span>
                    </Link>

                    <Link className="Link" to="/settings">
                        <span className={pathname === '/settings' && classes.active}>
                            <i className="icon-ion-android-more-vertical" />
                        </span>
                    </Link>
                </nav>

                <div className={classes.right}>
                    {
                        React.createElement(component)
                    }
                </div>
            </footer>
        );
    }
}
