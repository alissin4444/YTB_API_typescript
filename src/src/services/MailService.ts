interface IEmailTo {
  name: string;
  email: string;
}

interface IMessage {
  subject: string;
  body: string;
  attachment?: string[];
}

interface IMailServiceDTO {
  to: IEmailTo;
  message: IMessage;
}

// DTO - Data Transfer Object

class MailService {
  sendMail({ to, message }: IMailServiceDTO) {
    console.log(`Email enviado para ${to.name}: ${message.subject}`);
  }
}

export default new MailService();
