import React, {Component} from 'react';
import ListMakanan from './../ListData/ListMakanan.js';

class MenuMakanan extends Component {
  render(){
    return(
      <div>
        <h3>Daftar Makanan Yang Disediakan : </h3>
        <table>
          <td>
            <ListMakanan linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
          </td>
          <td>
            <ListMakanan linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
          </td>
          <td>
            <ListMakanan linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" />
          </td>
          <td>
            <ListMakanan linkGambar="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png" />
          </td>
          <td>
            <ListMakanan linkGambar="https://www.resepistimewa.com/wp-content/uploads/nasi-kuning.jpg" />
          </td>
        </table>

      </div>
    );
  }
}

export default MenuMakanan;
