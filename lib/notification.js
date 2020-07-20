import { notification} from "antd";

class Notification {
    // error title
    //{msg} error msg

static notify(title, msg){
    notification.open({
        message: title,
        description: msg,
    });
}

}

export default Notification;