import React, { Component } from 'react';
import Header from '../Header';
import ProductList from '../ProductList';
import Detail from '../Detail';
import Cart from '../Cart';
const productList = [{
    id: "sp_1", name: "iphoneX", price: 30000000, screen: "screen_1", backCamera: "backCamera_1", frontCamera: "frontCamera_1", img: "https://sudospaces.com/mobilecity-vn/images/2019/12/iphonex-black.jpg",
    desc: "iPhone X features a new all-screen design. Face ID, which makes your face your password",
},
{ id: "sp_2", name: "Note 7", price: 20000000, screen: "screen_2", backCamera: "backCamera_2", frontCamera: "frontCamera_2", img: "https://www.xtmobile.vn/vnt_upload/product/01_2018/thumbs/600_note_7_blue_600x600.png", desc: "The Galaxy Note7 comes with a perfectly symmetrical design for good reason", },
{ id: "sp_3", name: "Vivo", price: 10000000, screen: "screen_3", backCamera: "backCamera_3", frontCamera: "frontCamera_3", img: "https://www.gizmochina.com/wp-content/uploads/2019/11/Vivo-Y19.jpg", desc: "A young global smartphone brand focusing on introducing perfect sound quality", }
]
class Home extends Component {
    state = {
        prodItem: null,
        cartList: [],
    }
    getProduct = (prod) => {
        console.log(prod);
        this.setState({
            prodItem: prod
        });
    }
    pushToListCart = (prod) => {
        //
        let newList = [...this.state.cartList];
        const cartItem = {
            product: prod,
            quantity: 1,
        };
        const index = newList.findIndex((item) => item.product.id === prod.id);
        if (index === -1) {
            newList.push(cartItem);
        } else {
            newList[index].quantity++;
        }
        this.setState({ cartList: newList }, () => { console.log(this.state.cartList) });
    }
    deleteItemCart = (prod) => {
        //tìm vị trí
        let index = this.state.cartList.findIndex((item) => item.product.id === prod);
        // tạo bản sau của cartlist 
        const cloneList = [...this.state.cartList];
        // xóa phần tử đó tại bản sau
        cloneList.splice(index, 1);
        // gán bản sau đó lại cho listCart
        this.setState({
            cartList: cloneList
        }, () => {
            console.log(this.state.cartList);
        })
    }
    render() {
        return (
            <div>
                <Header />
                <ProductList item={productList} getProduct={this.getProduct} pushToListCart={this.pushToListCart} />
                {this.state.prodItem && <Detail prodItem={this.state.prodItem} />}
                {this.state.cartList && <Cart cartList={this.state.cartList} deleteItemCart={this.deleteItemCart} />}
            </div>
        );
    }
}
export default Home;