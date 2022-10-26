import { useState } from "react";
import "./Allcss.css";
function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Tab 1
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Tab 2
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Tab 3
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h3>Lorem Ipsum is simply dummy testingOne</h3>
          <div className="image-content">
            <img src="https://cdn.pixabay.com/photo/2016/11/29/08/47/bonding-1868513__340.jpg" alt="" />
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. When an unkwn printer Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkown printer. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkown printer.
          </p>
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h3>Amet pariatur consequat louptateff in ex consequat</h3>
          <div className="image-content">
          <img src="https://media.istockphoto.com/photos/glowing-light-bulb-and-book-or-text-book-with-futuristic-icon-self-picture-id1320882544?b=1&k=20&m=1320882544&s=170667a&w=0&h=ihwn0m_Ify_x1yHWH78pNWZhDkyA4ZPZaHV7DrU2eL0=" alt="" />
          <p>
          Dolore qui aliqua ex qui est quis anim culpa. Commodo eu cupidatat aute ad. Consequat velit magna qui proident eiusmod exercitation sunt elit nostrud amet tempor excepteur. Minim ex Lorem incididunt occaecat ea ad nostrud non. Occaecat non id esse pariatur anim fugiat. Reprehenderit est amet aute qui occaecat nostrud ea quis ad aute aute esse.
          </p>
          </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h3>Cupidatat quis amet aliquip amet</h3>
          <div className="image-content">
          <img src="https://cdn.pixabay.com/photo/2020/05/20/00/45/time-5193038__340.jpg" alt="" />
          <p>
          Eex qui est quis anim culpa. Commodo eu cupidatat aute ad. Consequat velit magna qui proident eiusmod exercitation sunt elit nostrud amet tempor excepteur. Minim ex Lorem incididunt occaecat ea ad nostrud non. Occaecat non id esse pariatur anim fugiat. Reprehenderit est amet aute qui occaecat nostrud ea quis ad aute aute esse.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;