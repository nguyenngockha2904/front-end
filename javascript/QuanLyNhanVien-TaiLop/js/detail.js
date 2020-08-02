// function get Employee`s information 
// https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/employees/:id GET
const renderEmplsDetail= function(){
    
}

const fetchEmplsDetail = function () {
    // get id from location
    //split hàm chuyển từ chuỗi sang mảng
    // console.log(window.location.search.split('?id=')[1]);
    let id =+window.location.search.split('?id=')[1];
        axios({
            method: 'GET',
            url: `https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/employees/${id}`
        }).then(function (res) {
            console.log(res);
            document.getElementById('name').innerHTML=res.data.firstName;
        }).catch(function (err) {
            console.log(err);
        })
}
fetchEmplsDetail();