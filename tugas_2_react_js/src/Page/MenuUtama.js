import React, {Component} from 'react';
import ListMenuUtama from './../ListData/ListMenuUtama.js';

class MenuUtama extends Component{
  render(){
    return(
      <div>
        <ListMenuUtama linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg" />
      </div>
    );
  }
}

export default MenuUtama;
