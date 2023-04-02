import './Floating.Whatsapp.scss';
import FloatingWhatsApp from 'react-floating-whatsapp'

const WhatsappFloat =()=> {

  return (
      <FloatingWhatsApp  
      phoneNumber='+2349162270129'
      accountName='Nwaste'
      allowClickAway
      notification
      notificationDelay={30000}
      darkMode
      defaultMessage={`Welcome to Nwaste customer service`}
      chatMessage = 'Hello there! 🤝 How can we help you?'
      />
  )
}

export default WhatsappFloat;