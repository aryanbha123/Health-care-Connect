import express from 'express'
import { configDotenv } from 'dotenv';
import mongoose from 'mongoose';
import { createTransport } from 'nodemailer'
configDotenv();
const app = express();
const PORT = process.env.PORT || 3000;
const URI = process.env.URI;
const adminemail = process.env.email;
const password = process.env.pass;
app.use(express.json())
const transporter = createTransport(
    {
        service: "gmail",
        auth: {
            user: adminemail,
            pass: password,
        }
    }
);

(function () {
    mongoose.connect(URI)
        .then(() => console.log(
            "connected"
        ))
        .catch(e => {
            console.log(e)
        })
})()


app.post("/connect", async (req, res) => {
    const { gender, fname, sname, email, phone } = req.body;

    if (!fname || !sname || !email || !phone) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        // 📌 **Send Thank You Email to User**
        const userMailOptions = {
            from: adminemail,
            to: email,
            subject: "Health Care Connect - Thank You for Reaching Out!",
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Thank You - Health Care Connect</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f4;
                            margin: 0;
                            padding: 0;
                        }
                        .container {
                            max-width: 600px;
                            margin: 20px auto;
                            background: #ffffff;
                            padding: 20px;
                            border-radius: 8px;
                            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
                        }
                        .header {
                            text-align: center;
                            padding-bottom: 15px;
                            border-bottom: 2px solid #00a2ff;
                        }
                        .header h2 {
                            color: #00a2ff;
                        }
                        .content {
                            padding: 20px 0;
                            font-size: 16px;
                            color: #333333;
                            line-height: 1.6;
                        }
                        .footer {
                            text-align: center;
                            padding-top: 15px;
                            border-top: 2px solid #00a2ff;
                            font-size: 14px;
                            color: #777777;
                        }
                        .footer a {
                            color: #00a2ff;
                            text-decoration: none;
                        }
                        .btn {
                            display: inline-block;
                            background: #00a2ff;
                            color: white;
                            padding: 10px 20px;
                            text-decoration: none;
                            border-radius: 5px;
                            margin-top: 10px;
                        }
                        .btn:hover {
                            background: #007acc;
                        }
                    </style>
                </head>
                <body>
        
                    <div class="container">
                        <div class="header">
                            <h2>Health Care Connect</h2>
                        </div>
                        <div class="content">
                            <p>Dear <strong>${fname}</strong>,</p>
                            <p>Thank you for reaching out to <strong>Health Care Connect!</strong> We appreciate your interest and will get back to you as soon as possible.</p>
                            <p>If your inquiry is urgent, feel free to contact us directly at:</p>
                            <p><strong>Phone:</strong>9119071612</p>
                            <p><strong>Email:</strong> <a href="mailto:${adminemail}">${adminemail}</a></p>
                            <p>Looking forward to assisting you!</p>
                        </div>
                        <div class="footer">
                            <p>Best regards,</p>
                            <p><strong>Health Care Connect</strong></p>
                        </div>
                    </div>
        
                </body>
                </html>
            `,
        };
        

        await transporter.sendMail(userMailOptions);

        // 📌 **Send New Registration Alert to Admin**
        const adminMailOptions = {
            from: adminemail,
            to: adminemail, // Admin email
            subject: "New User Registration",
            html: `<h2>New User Registered</h2>
                   <p><strong>Name:</strong> ${fname} ${sname}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Phone:</strong> ${phone}</p>
                   <p><strong>Gender:</strong> ${gender}</p>`,
        };

        await transporter.sendMail(adminMailOptions);

        res.status(200).json({ message: "Emails sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Failed to send emails", error });
    }
});
app.get('/', (req, res) => {
    res.json({ msg: "Hello World" })
})

app.listen(PORT);

// plfYw6rFnkrGeQMF