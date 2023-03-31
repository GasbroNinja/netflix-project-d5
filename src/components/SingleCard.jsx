import { Component } from "react";



class SingleCard extends Component {
  render() {
    

    return (
      <>
        <div className="col-2" style={{maxHeight:"180px", maxWidth:"300px"}}>
          <div className="card border-dark d-flex" style={{width:"100%" , objectFit:"contain", backgroundPosition:"center", height:"100%"  }}>
            <img src={this.props.src} className="card-img" alt={this.props.alt} />
          </div>
        </div>
      </>
    );
  }
};

export default SingleCard;