import React from "react";
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Carousel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            items: this.props.items,
            active: this.props.active,
            direction: ''
        }

        //onsole.log(count);
        this.rightClick = this.moveRight.bind(this)
        this.leftClick = this.moveLeft.bind(this)
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
           13000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        var count  = this.props.items.length - 1;
        if(this.state.active < count){
            var newActive = this.state.active + 1;
        }else{
            var newActive = 0;
        }

        this.setState({
            active:newActive
        });
    }

    generateItems() {
        var items = []
        var index = this.state.active;
        var item = this.state.items[index];
        var id = item.nid;
        items.push(<Item key={id} item={item} />)
        return items
    }

    moveLeft() {
        var newActive = this.state.active
        newActive--
        this.setState({
            active: newActive < 0 ? this.state.items.length - 1 : newActive,
            direction: 'left'
        })
    }

    moveRight() {
        var newActive = this.state.active
        this.setState({
            active: (newActive + 1) % this.state.items.length,
            direction: 'right'
        })
    }

    clickHandler(index, event) {
        console.log(index);
        this.setState({
            active: index,
            direction: 'left'
        })
    }



    render() {


        const thumbItems = this.props.items.map((value, index) =>
           <Thumb key={ index } index={ index } active={ this.state.active } clickHandler={this.clickHandler.bind(this, index)} />
        );

        return(
            <div className="carousel_wrapper">
                <div id="carousel" className="noselect">
                    <CSSTransitionGroup
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}
                        transitionName={this.state.direction}>
                        {this.generateItems()}
                    </CSSTransitionGroup>
                </div>
                <div className="thumbnails_wrapper">
                    <ul className="thumbnails">{ thumbItems }</ul>
                </div>
            </div>
        )
    }
}

class Thumb extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { index } = this.props;
        let thumbClass = (this.props.active === index ? 'active' : 'not-active');
        return(
            <li className={ thumbClass } onClick={this.props.clickHandler.bind(this, index)}>
                <span></span>
            </li>
        )
    }
}

class Item extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="slide_item">
                <div className="slide_title"> {this.props.item.title} </div>
                <div className="slide_body"> {this.props.item.body} </div>
                <div className="slide_more">
                    <a>Learn More</a> 
                </div>
            </div>
        )
    }
}



export default Carousel;



