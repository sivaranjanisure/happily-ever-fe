import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createClientMessage } from 'react-chatbot-kit';
import { useDispatch } from "react-redux";
import { setAge } from "../../appSlice";

const ActionProvider = ({ createChatBotMessage , setState, children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
    
      const handleGotIt = () => {
        const userMessage = createClientMessage ('Got it!'); 
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, userMessage],
        }));
        handlePickSlot();
      };

      const handlePickSlot = () => {
        const botMessage = createChatBotMessage('Pick a Slot !', {
          widget: 'slotPicker',
        });
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      };
    
      const handleSlotSelection = ( value) => {
        const userMessage = createClientMessage (value); 
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, userMessage],
        }));
        handleName()
      };

      const handleName = () => {
        const botMessage = createChatBotMessage('Enter your Name');
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      }
      const handleAge = () => {
          const botMessage = createChatBotMessage('Enter your Age', {
          widget: 'agePicker',
        });
    
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      }

      const handleAgePicker = (value) => {
        const userMessage = createClientMessage(value);
        dispatch(setAge(value));

          setState((prev) => ({
            ...prev,
            messages: [...prev.messages, userMessage],
          }));
       
      
       
        const countdownMessages = [
          "Thank you. In 5 seconds, bot will exit",
          "5...",
          "4...",
          "3...",
          "2...",
          "1...",
        ];
      
        countdownMessages.forEach((message, index) => {
          setTimeout(() => {
            const botMessage = createChatBotMessage(message, { withAvatar: false });
            setState((prev) => ({
              ...prev,
              messages: [...prev.messages, botMessage],
            }));
      
            if (index === countdownMessages.length - 1) {
              setTimeout(() => {
                navigate('/succeed')
              }, 500);
            }
          }, index * 500);
        });
      
       
      };
      
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {  handleGotIt, handlePickSlot, handleSlotSelection, handleName, handleAge, handleAgePicker },
        });
      })}
    </div>
  );
};

export default ActionProvider;