import React, { Component } from "react";
import "../styles/ErrorTest.css"

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <div className="Err">

                        <p>An error has occurred. Please try again.</p>
                        <a href="/">
                            <button>Go Back....</button>
                        </a>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;