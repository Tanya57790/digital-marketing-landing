
# <p align="center">digital-marketing-landing</p>
<div align="center">   
  
  ![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)
  ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=grey) 
  ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) 
  ![Material UI](https://img.shields.io/badge/Material_UI-007FFF?logo=mui&logoColor=white)
  ![Prisma](https://img.shields.io/badge/Prisma-3987BA?logo=prisma&logoColor=white)
  ![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white)
  ![JSON Web Tokens](https://img.shields.io/badge/JSON_Web_Tokens-4479A1?logo=jsonwebtokens&logoColor=white)
  ![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?logo=reacthookform&logoColor=white)
  ![Zod](https://img.shields.io/badge/Zod-408AFF?logo=zod&logoColor=white)
  ![Storybook](https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=white)
  ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white)
  ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=white)  
  
</div>

## View

<p align="center">
  <img alt="Digital Marketing responsive landing page homepage with hero section" width="1279" height="672" src="https://github.com/user-attachments/assets/c1c39534-b876-44e1-8740-b7107d569a04" />
</p>    

## Features
:heavy_check_mark: Interactive Storybook component testing and visualization    
:heavy_check_mark: Email newsletters via Nodemailer    
:heavy_check_mark: JWT unsubscribe page (secure token verification)    
:heavy_check_mark: Form validation using Zod    
:heavy_check_mark: Mobile-first responsive design    
:heavy_check_mark: TypeScript typing    

## Responsive Design

### Mobile
<p align="center">
  <img alt="Digital Marketing responsive landing page homepage with hero section on mobile" width="318" height="508" src="https://github.com/user-attachments/assets/14117b5d-7cf3-44ac-824e-2a2df566f333" />
</p>    

### Tablet
<p align="center">
  <img alt="Digital Marketing responsive landing page homepage with hero section on tablet" width="758" height="505" src="https://github.com/user-attachments/assets/842fefa2-294c-4cb8-a909-6053410ec0e6" />
</p>    

### Desktop
<p align="center">
  <img alt="Digital Marketing responsive landing page homepage with hero section on desktop" width="954" height="505" src="https://github.com/user-attachments/assets/34d1d70d-3c2e-4ffa-90fb-46a3aa9f56d5" />
</p>    

### Unsubscribe page (mobile)
<p align="center">
  <img alt="Digital Marketing unsubscribe landing page on mobile with home button" width="315" height="508" src="https://github.com/user-attachments/assets/2dc69f73-7354-485f-ac09-ffd856342467" />
</p>    

### Unsubscribe page (desktop)
<p align="center">
  <img alt="Digital Marketing unsubscribe landing page on desktop with home button" width="1279" height="711" src="https://github.com/user-attachments/assets/07bc56bf-eeb4-4010-ac9e-5296477eb59c" />
</p>
The field with a unique JWT token, important for authentication and security, is highlighted in red. You can return to the main page by clicking the "Go home" button, automatic redirection is not provided. If the JWT token is verified incorrectly, you will be redirected to an error page.            

### Email newsletter 
<p align="center">
  <img alt="Email newsletter from the Digital Marketing landing page on desktop" width="943" height="436" src="https://github.com/user-attachments/assets/2e60cdc1-80b9-4c18-b496-337b4d51d688" />
</p>
With nodemailer you can easy customize HTML tags and email styles.        

## Deploy on Vercel
https://digital-marketing-landing-cyan.vercel.app

## Setup and Install

1. Go to the folder where you want to store the project.

2. Clone the repository:
```bash
git clone https://github.com/Tanya57790/digital-marketing-landing.git
```

3. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

## Getting Started

First, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Run the build and start production server:
```bash
npm run build:start
# or
yarn build:start
# or
pnpm build:start
# or
bun build:start
```

## Link to the layout

```
https://www.figma.com/design/4CcDJGIWSqQZT21849B0Tk/%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%B8%D0%BD%D0%B3?node-id=0-1&p=f&t=whoj0PDIK6sbP1W6-0
```
If you want practice your skills. 

## Development Issues
:heavy_multiplication_x: Using too atomic commits for a simple project. For convenience, it's better to maintain branches and use `git squash` to merge similar commits.    
:heavy_multiplication_x: Nodemailer doesn't work in Vercel. Ready-made solutions didn't work, so the site's API currently only works locally, and a migration to a paid email service is planned for stable operation.    
:heavy_multiplication_x: Incorrect use of Mui components. Development took longer than necessary due to a lack of Mui optimizations and subsequent support for the perf branch.    
:heavy_multiplication_x: Storybook components. Storybook is good for visualization and testing, but it's more suitable for larger websites than landing pages. I used it only for practice.

I gradually resolved the issues with practice. This was my first project with such a large set of tools after HTML and CSS.

## Author
<a href="https://github.com/Tanya57790">Tanya57790</a>

## License
MIT License
