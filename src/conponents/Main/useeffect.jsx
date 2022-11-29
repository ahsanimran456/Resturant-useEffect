// import' ../App.css'
import { useEffect, useState } from 'react';
function ApiRender() {
    const [data, Setdata] = useState()
    useEffect(() => {
        async function Api() {
            const ApiKey = 'b4edc44ba6a3ce70ce3996b111465ee4'
            const id = '60a6dbab'
            let url = await fetch(`https://api.edamam.com/search?q=pizza&app_id=${id}&app_key=${ApiKey}`)
            let res = await url.json()
            console.log(res)}
        Api()
    },[]);
    return (
        <div>
            <h1>hello</h1>
        </div>
    )

}

export default ApiRender;

// https://api.spoonacular.com/food/menuItems/search?query=burger&number=2