import "./Allcss.css";
import "antd/dist/antd.css";
import { Button } from 'antd';
import {useNavigate} from 'react-router-dom'
function Home(){
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/Modules")
    }
    return (
        <div className="landingpage">
            <img src="https://thumbs.dreamstime.com/b/smiling-female-doctor-holding-medical-records-lab-coat-her-office-clipboard-looking-camera-56673035.jpg" alt="" />
        <div>
        <h1>Lorem ipsum dolor</h1>
        <p>Lorem ipsum dolorsit amet consectetur, adipisicing elit. Excepturi sit eaque, exercitationem praesentium ad nulla quasi ratione distinctio repellat, omnis debitis veritatis neque dolorem officia ut aliquip ex ea commodo consequat.</p>
        <Button type="primary" shape="round" onClick={handleClick}  >Enter</Button>
        </div>
        </div>
    )
}
export default Home;