"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendAllPelapakCredentialAccount = void 0;
const config_1 = require("../config");
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: 'd7bf4ef5a916be',
        pass: 'eb63c12d815678',
    },
});
const sendCredentialPelapak = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const subject = `[${config_1.APP_NAME}] Akun Pelapak`;
        const info = yield transporter.sendMail({
            from: '"enTECHNOpreneurship FAIR 2022" <r3ndydinar@gmail.com>',
            to: data.email,
            subject: subject,
            text: `Dear Pelapak ${data.pelapakName},\r\n
      \r\n
      Berikut Informasi Akun Pelapak Kamu yang disini melalu melalui websit https://unwinapreneur.com/login-pelapak\r\n
      \r\n
      Email: ${data.email}\r\n
      Password: ${data.password}\r\n
      \r\n
      Silakan untuk menghubungi kontak 082217971133 r3ndydinar@gmail.com jika kamu memiliki masalah.\r\n
      \r\n
      Terima Kasih
    `,
        });
        console.log('Pelapak akun info sent', data.pelapakName, info.messageId);
        return true;
    }
    catch (e) {
        console.log(e);
        return false;
    }
});
const sendAllPelapakCredentialAccount = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = [
        {
            pelapakName: 'Rendy dinar',
            email: 'genjitapaleuk@gmail.com',
            password: 'KWsBo4',
        },
        // {
        //   pelapakName: 'Aner Rada Ndima',
        //   email: 'anerndima19@gmail.com',
        //   password: 'KWsBo4',
        // },
        // {
        //   pelapakName: 'Faldi Eduard Tetelepta',
        //   email: 'falditetelepta22@gmail.com',
        //   password: 'zkMotq',
        // },
        // {
        //   pelapakName: 'antoniuslidjang12@gmail.com',
        //   email: 'antoniuslidjang12@gmail.com',
        //   password: 'atyUXK',
        // },
        // {
        //   pelapakName: 'Rinto Tunggu Djama',
        //   email: 'ryntodjawa11@gmail.com',
        //   password: 'ctdNzM',
        // },
        // {
        //   pelapakName: 'Kasimirus Richard Latunussa',
        //   email: 'richardlatunussa@gmail.com',
        //   password: 'yoB5gR',
        // },
        // {
        //   pelapakName: 'VICTOR IAMNUEL MESA MILLA',
        //   email: 'victorimanuelmesamilla@gmail.com',
        //   password: 'vaPWCe',
        // },
        // {
        //   pelapakName: 'Leonard Rihi',
        //   email: 'leonard.rihi03@gmail.com',
        //   password: 'kMQImV',
        // },
        // {
        //   pelapakName: 'Nuryanti kareri hara',
        //   email: 'nuryantikarerihara@gmail.com',
        //   password: '4wRKXS',
        // },
        // {
        //   pelapakName: 'Joshua Roberts Tamu Umbu',
        //   email: 'joshtamuumbu@gmail.com',
        //   password: 'WFnjEZ',
        // },
        // {
        //   pelapakName: 'Ady Mutu',
        //   email: 'umbuadymutu@gmail.com',
        //   password: '0m89rd',
        // },
    ];
    for (const pelapak of data) {
        yield sendCredentialPelapak(pelapak);
    }
    console.log('success sent all pelapak credential');
});
exports.sendAllPelapakCredentialAccount = sendAllPelapakCredentialAccount;
//# sourceMappingURL=mailSender.js.map