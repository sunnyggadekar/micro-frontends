import React from "react";

export default class SafeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasEror: false};
    }

    static getDerivedStateFromError(error) {
        return {hasEror: true};
    }

    componentDidCatch(){      
    }

    render() {
        if (this.state.hasEror) {
            return <div className="alert alert-danger">Something went wrong</div>;
        }
        return this.props.children;
    }
}