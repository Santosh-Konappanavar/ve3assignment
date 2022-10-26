import "./Allcss.css";
import {useNavigate} from "react-router-dom";
import "antd/dist/antd.css";
import { Button } from 'antd';
function Modalpage(){
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/Modaltabs")
    }
    return (
        <div className="modalpage">
        <div>
        <img src="https://image.shutterstock.com/image-photo/cropped-image-female-professional-checking-260nw-1667821327.jpg" alt="" />
        </div>
        <div className="module">
            <h2 onClick={handleClick}>Module One</h2>
            <hr />
            <h2  onClick={handleClick}>Module Two</h2>
            <hr />
            <h2 onClick={handleClick}>Module Three</h2>
            <hr/>
            <h2  onClick={handleClick}>Module Four</h2>
            <hr/>
            <h2 onClick={handleClick}>Module Five</h2>
            <Button type="primary" shape="round" onClick={handleClick}>Select Module</Button>
        </div>
        </div>
    )
}
export default Modalpage;