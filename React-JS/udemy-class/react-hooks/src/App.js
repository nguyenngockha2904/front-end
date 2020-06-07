import React, { Component, useState, useEffect } from 'react';
// class App extends Component {
//   state = {
//     news: [],
//     searchQuery: 'react',
//     url: 'http://hn.algolia.com/api/v1/search?query=react'
//   }
//   fetchNews = () => {
//     fetch(this.state.url)
//       .then(result => result.json())
//       // .then(data => console.log(data))
//       // .then(data => setNews(data.hits))
//       .then(data => this.setState({news:data.hits}))
//       .catch(error => console.log(error))
//     // fetch(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
//     // .then(result => result.json())
//     // // .then(data => console.log(data))
//     // .then(data => setNews(data.hits))
//     // .catch(error => console.log(error))
//   };
//   componentDidMount(){
//     this.fetchNews();
//   }
//   componentDidUpdate() {
//     this.fetchNews();
//   }
//   handleChange = (e) => {
//     // setSearchQuery(e.target.value)
//   this.setState({searchQuery:e.target.value});
//   }
//   handleSubmit = (e) => {
//     e.preventDefault();
//     // setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
//     this.setState({url:`http://hn.algolia.com/api/v1/search?query=${this.state.searchQuery}`});
//   }
//   render() {
//     return (
//       <div>
//         <h2>News</h2>
//         <form onSubmit={this.handleSubmit}>
//           <input type="text" value={this.state.searchQuery} onChange={this.handleChange} />
//           <button>Search</button>
//         </form>
//         {this.state.news.map((n, i) => (<p key={i}>{n.title}</p>))}
//       </div>
//     )
//   }
// }



const App = () => {
  //state 
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('react');
  const [url, setUrl] = useState('http://hn.algolia.com/api/v1/search?query=react')
  const [loading, setLoading] = useState(false);
  //fetch news
  const fetchNews = () => {
    //set loading true
    setLoading(true);
    fetch(url)
      .then(result => result.json())
      // .then(data => console.log(data))
      .then(data => (setNews(data.hits), setLoading(false)))
      .catch(error => console.log(error))
    // fetch(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
    // .then(result => result.json())
    // // .then(data => console.log(data))
    // .then(data => setNews(data.hits))
    // .catch(error => console.log(error))
  };
  useEffect(() => {
    fetchNews();
    document.title = searchQuery;
  }, [url]);
  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
  };
  const showLoading = () => (loading ? <h2>Loading.....</h2> : '');

  const searchForm = () => (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchQuery} onChange={handleChange} />
      <button>Search</button>
    </form>
    );
  const showNews = () => {
    return news.map((n, i) => (<p key={i}>{n.title}</p>))
  };
  return (
    <div>
      <h2>News</h2>
      {showLoading()}
      {searchForm()}
      {showNews()}
    </div>
  )
}




// class App extends Component {
//   state = {
//     count: 0
//   };
//   increment = () => {
//     this.setState({
//       count: this.state.count + 1
//     });
//   }
//   componentDidMount(){
//     document.title=`Clicked ${this.state.count} times`;
//   }
//   componentDidUpdate(){
//     document.title=`Clicked ${this.state.count} times`;
//   }
//   render() {
//     return (
//       <div>
//         <h2>Counter app</h2>
//         <button onClick={this.increment}>click {this.state.count} times</button>
//       </div>
//     );
//   }

// }





// function App() {
//   const [count, setCount] = useState(0);
//   useEffect(()=>{
//     document.title=`Clicked ${count} times`;
//   });
//   const increment = () => {
//     setCount(count + 1);
//   }
//   return (
//     <div>
//       <h2>Counter app</h2>
//       <button onClick={increment}>click {count} times</button>
//     </div>
//   )
// }

export default App;
