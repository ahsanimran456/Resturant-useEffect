import 'bootstrap/dist/css/bootstrap.min.css';
import "../../App.css"
import HEaderlogo from '../images/headerlogo.png'
import pizzaimg from '../images/pizza-banner-2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';


function Header() {
    const [data, setdata] = useState("")
    const [inputcal, setinputval] = useState(data)

    const searchdata =  async() => {
        if (data !='') {
            setinputval(data)
            console.log(inputcal)
                const ApiKey = 'b4edc44ba6a3ce70ce3996b111465ee4'
                const id = '60a6dbab'
                let url = await fetch(`https://api.edamam.com/search?q=${inputcal}&app_id=${id}&app_key=${ApiKey}`)
                let res = await url.json()
                console.log(res)
        }
        else { alert('bhag') }
    }
    useEffect(() => {
        searchdata()
    }, [inputcal]);

    // console.log(data)
    return (
        <div className="container-fluid banner">
            <div className="container">
                <div className="header">
                    <div className="logo">
                        <img src={HEaderlogo} alt="" />
                    </div>
                    <div className="navitems">
                        <div className="links">
                            <ul>
                                <li>
                                    Home
                                </li>
                                <li>

                                    0plmvts5q12e3
                                    *+        About Us
                                </li>
                                <li>
                                    Contact
                                </li>
                                <li>
                                    Menu
                                </li>
                                <li>
                                    Blog
                                </li>
                            </ul>
                        </div>
                        <div className="orderNow">
                            <ul>
                                <li>
                                    <FontAwesomeIcon className='icons' icon={faPhone} /> <span>+91 123 456 789</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon className='icons' icon={faBagShopping} /> <span>0 items - $0.00</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mainsection">
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <input type="text" value={data} placeholder='Your Favourite Meal' onChange={(e) => { setdata(e.target.value) }} />
                            </div>
                            <div>
                                <button onClick={searchdata}>search</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="imgdiv">
                                <img src={pizzaimg} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;