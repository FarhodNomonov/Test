import React from "react";
import { Logo, Logout, Card, Settings, Star } from "./../../export/Svg";
import Media from "../../assets/img/media.png";
import "./messagebox.scss";
import { postRequest } from "../../utils/request";

function MessageBox(props) {
  const [messageData, setMessageData] = React.useState([]);
  React.useEffect(() => {
    postRequest({ actionName: "MessagesLoad" });
  }, []);

  return (
    <div className="messagebox_container">
      <div className="messagebox">
        <div className="flex">
          <div className="user_info">
            <div className="user_img">
              <Logo />
            </div>
            <div className="user_date">
              <p>15:57</p>
            </div>
          </div>
          <div className="main_container">
            <div className="messagebox_header">
              <div className="messagebox_header-space">
                <div className="user_name">
                  <h1>Nina Malofeeva</h1>
                  <p>Текст поста в соц. сетях если это комментарий</p>
                </div>
              </div>
              <div className="messagebox_header_between">
                <div className="btn_group">
                  <button className="inline_btn primary_btn">Левый</button>
                  <button className="inline_btn primary_btn">Центр</button>
                  <button className="inline_btn primary_btn">Правый</button>
                </div>
                <div className="message_header_icons">
                  <div className="btn_group">
                    <Logout />
                    <Card />
                    <Settings />
                    <Star saved={true} />
                  </div>
                </div>
              </div>
            </div>
            <div className="messagebox_content">
              <div className="content_title">
                <p>
                  "Россия 1" не боится снимать сериалы о сложных и неоднозначных
                  периодах в истории нашей страны. Это и "В круге первом", и
                  "Жизнь и судьба", и "Зулейха". Идёт работа над "Одним днём
                  Ивана Денисовича". Вопрос Антону Златопольскому -почему вы
                  считаете
                </p>
                <button>Далее</button>
              </div>
              <div className="content_media">
                <img src={Media} alt="..." />
              </div>
            </div>
          </div>
        </div>
        <div className="messagebox_footer">
          <p>#Новое</p>
          <p>#Эксперт</p>
        </div>
      </div>
    </div>
  );
}

export default MessageBox;
