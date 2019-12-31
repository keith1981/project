import React, {Component} from 'react';
import Button from '@material-ui/core/Button';







class Castles extends Component {
    constructor() {
        super();
        this.state = { pic: '', name: '', clicked: false }

        
    }
    getImage = (e) => {
       
        const picture = e.target.src
        const nameOfCastle = e.target.name
        
        this.setState({ pic: picture, name: nameOfCastle })
        
    }

   
    showPictures = () => {
        return (
            this.props.pics.map(castle => (
                <img className="castle-imgs" onClick={this.getImage} key={castle.id} src={castle.largeImageURL} name={castle.tags} alt="castle" />
            ))
                
        )
    }

    render() {
        return(
            <div className="background">
                <div className="img-show">
                    {this.showPictures()}
                </div>
                <h1>{this.state.name.toUpperCase()}</h1>
                <div className="single-img-castle">
                    <img className="single-image" src={this.state.pic} onClick={this.showBigPicture} alt="castle"  />
                </div>
                <Button className="location-btn" variant="outlined" color="primary" size="large" >See Location</Button>   
            </div>
        )
    }
}

export default Castles;