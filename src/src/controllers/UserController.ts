import { Request, Response } from "express";

import MailService from "../services/MailService";

const users = [
  {
    id: 1,
    name: "Alissin",
    email: "alissin@gmail.com",
    relationship: 2,
  },
  {
    id: 2,
    name: "Lehzinha",
    email: "lehzinha@gmail.com",
    relationship: 1,
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    MailService.sendMail({
      to: {
        name: users[0].name,
        email: users[0].email,
      },
      message: {
        subject: "Você agora é namorada do Alissinho",
        body: "Agora você deve falar bastante com ele no wats",
      },
    });
  },
};
