import React, {Component} from 'react';
class Errorborder extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }
    render() {
        if(this.state.hasError){
            return <h1>Opssz I don't think It's good for your taste.</h1>
        }
        return this.props.children;
    }
}
export default Errorborder;