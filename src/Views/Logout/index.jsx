
import { Component } from 'react';
import cache from "../../Helpers/cache";

export default class Logout extends Component {

    componentWillMount() {
        cache.removeItem('user');
        window.location.href = "/";
    }

    render() {
        return null;
    }
}