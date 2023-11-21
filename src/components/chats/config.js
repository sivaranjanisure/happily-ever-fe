import { createChatBotMessage } from "react-chatbot-kit";
import Overview from "./widgets/Overview";
import AgePicker from "./widgets/AgePicker";
import SlotPicker from "./widgets/SlotPicker";

const config = {
  botName: "Student Info Bot",
  initialMessages: [
    createChatBotMessage("Hello, Welcome to student info system!", {
      delay: 500,
      widget: "overview",
    }),
  ],

  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
    },
    {
      widgetName: "slotPicker",
      widgetFunc: (props) => <SlotPicker {...props} />,
      mapStateToProps: [],
    },
    {
      widgetName: "agePicker",
      widgetFunc: (props) => <AgePicker {...props} />,
      mapStateToProps: [],
    },
  ],
};

export default config;
