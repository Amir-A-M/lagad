import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// Email data
const mailOptions = {
  from: 'Lagad <no-reply@lagad.ir>',
};

/**
 * 
 * @param {string} from  `Lagad <no-reply@lagad.ir>`
 * @param {string} to 
 * @param {string} subject 
 * @param {string} text 
 * @param {} html 
 * @returns 
 */
export const sendMail = (props) =>
  transporter.sendMail({ ...mailOptions, ...props });
