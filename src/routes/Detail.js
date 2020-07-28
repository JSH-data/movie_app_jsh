import React from "react";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if(location.state === undefined) {
            // console.log(this.props) class로 변환된거라 this를 붙이는것인듯
            history.push("/");
        }
    }
    render () {
        const { location } = this.props;
        if (location.state) {
            return <span>{location.state.title}</span>;
        }
        else {
            return null;
        }
    }
}

export default Detail;