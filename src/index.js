
    import React from 'react';
    import ReactDOM from 'react-dom'
    import './style.css'
    const { useState } = React;
    const country = [{
        id: 1,
        img: 'https://cdn.pixabay.com/photo/2012/10/26/03/11/children-63175__340.jpg',
        title: 'I love my country',
        author: 'Saboor',
        date: '2020-11-25',
    },
        , {
        id: 2,
        img: 'https://images.unsplash.com/photo-1606163529131-faf5c0e2720a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGFmZ2hhbmlzdGFufGVufDB8fDB8&auto=format&fit=crop&w=500&q=60',
        title: 'I love my country',
        author: 'Mahmmod',
        date: '2020-11-20'
    },
        , {
        id: 3,
        img: 'https://images.unsplash.com/photo-1518469164615-97026679ea59?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fHNwbGFzaHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60',
        title: 'The love story',
        author: 'Make tyson',
        date: '1990-01-01'
    },
        , {
        id: 4,
        img: 'https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60',
        title: 'Learn how to code ',
        author: 'James goslen',
        date: '1995-09-12'
    }
    ];
    function Country() {
        return (
            <section className="book-section">
                {country.map((con) => {
                    return <MyCountry key={con.id} {...con}></MyCountry>
                })}
                <MyCounter />
                <MyRandom />
            </section>
        )
    }
    const ActionListener = (e) => {
        console.log(e);
    }
    const MyCountry = (props) => {
        const { img, title, author, date } = props;
        return (
            <div className="box-1">
                <img src={img} alt="" />
                <h1>{title}</h1>
                <h5>{author}</h5>
                <small>{date}</small>
                <nav className="prapgraph">
                    <button type="button" className="btn btn-primary" onClick={() => ActionListener(title)}>Click me</button>
                </nav>
            </div>
        )
    }
    ReactDOM.render(
        <Country />, document.querySelector('#root')
    )
    function MyCounter() {
        const [counter, setCounter] = useState(0); 
        return (
        
            <div className="box-1 text-center">
                <h1>{counter }</h1>
                <button className="btn btn-primary" onClick={()=>setCounter(counter+1)}>
                    Click me
                </button>
        </div>
        );
    }
    function MyRandom() { 
        const [random, setRandom] = useState(11111)
        if (random <= 0) { 
            setRandom(11111)
        }
        return (
            <div className="box-1 text-center">
                <h1>{random}</h1>           
                <button className="btn btn-primary" onClick={() =>setRandom(Math.floor(Math.random() * random))} >
                    Click me
                </button>
        </div>
        )
    }