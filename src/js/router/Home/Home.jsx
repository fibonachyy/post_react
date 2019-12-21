import React from 'react';
import Specifections from '../../component/Specifictions';
import Cards from '../../component/Cards';
import { apis } from '../../configRoutes';
import MainFetch from '../../component/GlobalFetch';
import { node } from 'prop-types';
export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.callCards = this.callCards.bind(this);
        this.handleChnage = this.handleChnage.bind(this);
        this.createNewPost = this.createNewPost.bind(this);
        this.state = {
            cards: [],
            new_post: false,
            data : {}
        }
    }
    componentDidMount() {
        this.callCards();
    }
    callCards = () => {

        const option = {
            method: "get"
        };
        fetch(apis.cards, option)
            .then(response => {
                if (!response.ok) {
                    return response.text().then(text => {
                        throw JSON.parse(text)
                    })
                }
                else {
                    return response.json()
                }
            })
            .then(data => {
                console.log(data.results);
                this.setState({
                    cards: data.results
                })
            })
            .catch(err => {
                // do somthing if err
            })

    }

    handleChnage = (e) => {
        if(e.target.files == null){
            this.setState({
                [e.target.name]: e.target.value
            })
        }else{
            this.setState({
                [e.target.name]: e.target.files[0]
            })
        }
        
    }
    createNewPost = (e) => {
        var data = new FormData()
        console.log(this.state);
        let reqData = ['category','subtitle','title','description','file']
        reqData.map(node =>{
            data.append(node,this.state[node])
        })
        const headers = {
            // 'content-type': 'multipart/form-data'
        }

        MainFetch.post("http://127.0.0.1:4000/api", data, headers,
            (data) => {
                console.log(data);
            },
            (err) => {
                console.log(err);
            })



    }



    render() {
        return (
            <div className='home_container'>
                <Specifections />
                <span className='spacer' />

                <Cards cards={this.state.cards} />

                <div className='new_post_container'>
                    <div className='new_post_btn' onClick={() => this.setState({ new_post: true })}>
                        add new post
                    </div>
                </div>


                <div className={this.state.new_post ? 'modale_container modale_container--show' : 'modale_container'} onClick={() => this.setState({ new_post: false })}>
                    <div className='content animated fadeIn' onClick={(e) => e.stopPropagation()}>

                        <div class="form-group">
                            <label for="title">title</label>
                            <input type="text" onChange={(e) => this.handleChnage(e)} class="form-control" name='title' id="title" placeholder="main title" />
                        </div>
                        <div class="form-group">
                            <label for="subtitle">sub-title</label>
                            <input type="text" onChange={(e) => this.handleChnage(e)} class="form-control" name='subtitle' id="subtitle" placeholder="sub-title" />
                        </div>
                        <div class="form-group">
                            <label for="category">category</label>
                            <input type="text" onChange={(e) => this.handleChnage(e)} class="form-control" name='category' id="category" placeholder="category" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlFile1">import image</label>
                            <input type="file" name='file' onChange={e => this.handleChnage(e)} accept=".jpge,.jpg,.png,.gif" class="form-control-file" id="exampleFormControlFile1" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Example textarea</label>
                            <textarea class="form-control " onChange={(e) => this.handleChnage(e)} name='description' id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button onClick={() => this.createNewPost()} class="btn btn-primary btn-block">Submit</button>

                    </div>
                </div>
            </div>
        )
    }
}