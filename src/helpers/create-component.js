import React, { PureComponent } from 'react';

function createComponent(config = {}) {
    const state = config.state || {};
    const selector = typeof config.selector === 'function' ? config.selector : () => {};
    const render = typeof config.render === 'function' ? config.render : () => null;
    const methods = config.methods || {};

    return props => (
        <CreatedComponent
            state={state}
            selector={selector}
            methods={methods}
            render={render}
            renderProps={props}
        />
    );
}

class CreatedComponent extends PureComponent {
    componentWillMount() {
        this.methods = {};

        Object
            .keys(this.props.methods)
            .forEach(methodName => {
                this.methods[methodName] = (...args) => {
                    const stateMutations = this.props.methods[methodName].apply({
                        ...this,
                        props: this.props.renderProps,
                        ...this.methods,
                    }, args);
                    this.setState(stateMutations);
                }
            });

        this.setState(this.props.state);
    }
    
    render() {
        const Component = this.props.render;

        return (
            <Component
                {...this.props.renderProps}
                {...this.state}
                {...this.props.selector()}
                {...this.methods}
            />
        );
    }
}

export default createComponent;
