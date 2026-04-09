
# <p align="center">digital-marketing-landing</p>
Landing page on the theme of the Digital marketing of email newsletter. Built using React, Next.js, TypeScript, Material UI, Storybook, nodemailer, react-hook-form, Zod, prisma, MySQL, jsonwebtoken.

## Contents 
0. [View](#view)
1. [Target](#target)
2. [Features](#features)
3. [Responsive Design](#responsive-design)
    1. [Mobile](#mobile)
    2. [Tablet](#tablet)
    3. [Desktop](#desktop)
    4. [Unsubscribe page (mobile)](#unsubscribe-page-mobile)
    5. [Unsubscribe page (desktop)](#unsubscribe-page-desktop)
4. [Email newsletter](#email-newsletter)
5. [Deploy on Vercel](#deploy-on-vercel)  
6. [Setup](#setup)
7. [Getting Started](#getting-started)
8. [Link to the layout](#link-to-the-layout)
9. [Development Issues](#development-issues)


## View

<p align="center">
  <img alt="Digital Marketing responsive landing page homepage with hero section" width="1279" height="672" src="https://github.com/user-attachments/assets/facf7128-dcfd-441a-815e-370985222e3f" />
</p>    

[:arrow_up:Contents](#contents) 

## Target
The project was created as a training project to develop layout skills using React, Next.js, TypeScript, Material UI, Storybook, nodemailer, react-hook-form, Zod, prisma, MySql, jsonwebtoken, Git.    

[:arrow_up:Contents](#contents) 

## Features
:heavy_check_mark: Interactive Storybook component testing and visualization    
:heavy_check_mark: Email newsletters via Nodemailer    
:heavy_check_mark: JWT unsubscribe page (secure token verification)    
:heavy_check_mark: Form validation using Zod    
:heavy_check_mark: Mobile-first responsive design    
:heavy_check_mark: TypeScript typing    

[:arrow_up:Contents](#contents) 

## Responsive Design

### Mobile
<p align="center">
  <img alt="Digital Marketing responsive landing page homepage with hero section on mobile" width="318" height="508" src="https://github.com/user-attachments/assets/4c565b41-8108-4ccb-abec-a0cd62bc5b10" />
</p>    

[:arrow_up:Contents](#contents) 

### Tablet
<p align="center">
  <img alt="Digital Marketing responsive landing page homepage with hero section on tablet" width="758" height="505" src="https://github.com/user-attachments/assets/7fdb2449-9b07-4aee-bc1e-d720aee102ca" />
</p>    

[:arrow_up:Contents](#contents) 

### Desktop
<p align="center">
  <img alt="Digital Marketing responsive landing page homepage with hero section on desktop" width="954" height="505" src="https://github.com/user-attachments/assets/eda35e58-88d7-4275-8fd8-4677b6ac0084" />
</p>    

[:arrow_up:Contents](#contents) 

### Unsubscribe page (mobile)
<p align="center">
  <img alt="Digital Marketing unsubscribe landing page on mobile with home button" width="315" height="508" src="https://github.com/user-attachments/assets/7e0bc772-2a70-44eb-84b5-a7ddac46acfa" />
</p>    

[:arrow_up:Contents](#contents) 

### Unsubscribe page (desktop)
<p align="center">
  <img alt="Digital Marketing unsubscribe landing page on desktop with home button" width="1279" height="711" src="https://github.com/user-attachments/assets/a0208a38-fa48-4613-b2a0-721b78781b76" />
</p>
The field with a unique JWT token, important for authentication and security, is highlighted in red. You can return to the main page by clicking the "Go home" button, automatic redirection is not provided. If the JWT token is verified incorrectly, you will be redirected to an error page.            

[:arrow_up:Contents](#contents) 

### Email newsletter 
<p align="center">
  <img alt="Email newsletter from the Digital Marketing landing page on desktop" width="943" height="436" src="https://github.com/user-attachments/assets/5bfa7af9-071f-4b1f-bae2-a19f574496ae" />
</p>
With nodemailer you can easy customize HTML tags and email styles.        

[:arrow_up:Contents](#contents) 

## Deploy on Vercel
https://digital-marketing-landing-cyan.vercel.app

[:arrow_up:Contents](#contents) 

## Setup

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

[:arrow_up:Contents](#contents) 

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

[:arrow_up:Contents](#contents) 

## Link to the layout

```
https://www.figma.com/design/4CcDJGIWSqQZT21849B0Tk/%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%B8%D0%BD%D0%B3?node-id=0-1&p=f&t=whoj0PDIK6sbP1W6-0
```
If you want practice your skills.

[:arrow_up:Contents](#contents) 

## Development Issues
:heavy_multiplication_x: Using too atomic commits for a simple project. For convenience, it's better to maintain branches and use `git squash` to merge similar commits.    
:heavy_multiplication_x: Nodemailer doesn't work in Vercel. Ready-made solutions didn't work, so the site's API currently only works locally, and a migration to a paid email service is planned for stable operation.    
:heavy_multiplication_x: Incorrect use of Mui components. Development took longer than necessary due to a lack of Mui optimizations and subsequent support for the perf branch.    
:heavy_multiplication_x: Storybook components. Storybook is good for visualization and testing, but it's more suitable for larger websites than landing pages. I used it only for practice.

I gradually resolved the issues with practice. This was my first project with such a large set of tools after HTML and CSS.

[:arrow_up:Contents](#contents) 

## Author
<a href="https://github.com/Tanya57790">Tanya57790</a>

## License
MIT License
