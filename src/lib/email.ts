import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER!,
    pass: process.env.SMTP_PASS!,
  },
});

export async function sendWelcomeEmail(email: string, unsubscribeId: string, origin: string) {
  await new Promise((resolve, reject) => {
    transporter.verify((error, success) => {
      if (error) reject(error);
      else resolve(success);
    });
  });

  const unsubscribeUrl = `${origin}/api/unsubscription/${unsubscribeId}`;

  const mailData = {
    from: `"${process.env.SENDER_NAME}" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Welcome to Digital Marketing!',
    html: `
      <h1>Thank you for subscribing!</h1>
      <h2>Tip №1</h2>
      <p>
        To improve email marketing, 
        focus on personalization, 
        list segmentation, responsive design, 
        and regular A/B testing of subject lines and content.
      </p>
      <a href="${unsubscribeUrl}" 
        style="background: #F5333F; 
        display: inline-block; 
        padding: 10px 20px; 
        border-radius: 5px; 
        color: white; 
        text-decoration: none;"
      >
        Unsubscribe from the newsletter
      </a>
    `,
  };

  return Promise.race([
    new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error('Email timeout')), 30000);

      transporter.sendMail(mailData, (err, info) => {
        clearTimeout(timeout);
        if (err) reject(err);
        else resolve(info);
      });
    }),

    new Promise((resolve) => setTimeout(resolve, 1000)).then(
      () =>
        new Promise((resolve, reject) => {
          transporter.sendMail(mailData, (err, info) => {
            if (err) reject(err);
            else resolve(info);
          });
        }),
    ),
  ]);
}
