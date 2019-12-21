import React, { Component } from 'react';
import {apis, baseUrl} from '../configRoutes';
class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        };
        this.renderCards = this.renderCards.bind(this);
    }
    componentDidMount() {
        this.setState({
            cards: this.props.cards
        })
    }
    componentWillReceiveProps(props) {
        this.setState({
            cards: props.cards
        })
    }
    renderCards = (data) => {
        console.log(data);
        return data.map((node,index) => (

            <article className="card animated bounceInUp" style={{animationDelay : `${index / 3}s` }} key={`${node.id}_card`}>
                <header className="card__thumb">
                    <a href="#"><img src={baseUrl+node.img} /></a>
                </header>
                <date className="card__date">
                    <span className="card__date__day">21</span>
                    <br />
                    <span className="card__date__month">Sep</span>
                </date>
                <div className="card__body">
                    <div className="card__category"><a href="#">{node.cat}</a></div>
                    <h2 className="card__title"><a href="#">{node.title}</a></h2>
                    <div className="card__subtitle">{node.subtitle}</div>
                    <p className="card__description">{node.description}</p>
                </div>
                <footer className="card__footer">
                    10 mins ago
                        </footer>
            </article>

        ))
    }

    render() {
        return (
            <>
                <div className='post_containers'>
                    {this.renderCards(this.state.cards)}
                </div>
            </>
        );
    }
}

export default Cards;