# Node.js Application Deployment on AWS EC2

Using Node.js, NPM, and PM2

---

## Project Overview

This project walks through the deployment of a Node.js web application on an Amazon EC2 instance running Amazon Linux 2023. The application is cloned from GitHub, dependencies are installed using NPM, and the process is managed with PM2 to keep the app running continuously in the background.

This project was completed as part of a Cloud and DevOps learning journey to build practical, hands-on experience with:

- AWS EC2 instance setup and configuration
- Linux server administration
- Node.js application hosting
- Git and GitHub integration
- Process management using PM2
- End-to-end cloud deployment of a production-style Node.js application

---

## Technologies Used

| Technology             | Purpose                  |
|------------------------|--------------------------|
| AWS EC2 (Amazon Linux) | Cloud Virtual Server     |
| Node.js                | JavaScript Runtime       |
| NPM                    | Package Manager          |
| Git and GitHub         | Source Code Management   |
| PM2                    | Process Manager          |
| Linux                  | Server Operating System  |

---

## Project Architecture

```
User
  ↓
Internet
  ↓
AWS EC2 (Amazon Linux 2023)
  ↓
Node.js Application
  ↓
PM2 Process Manager
```
> <img src="/Screenshots/Architecture Diagram.png" alt="📸 *Screenshot: EC2 instance running and SSH connection established" width="1000">
---

## Deployment Steps

### Step 1 — Launch an EC2 Instance

- Create an Amazon Linux 2023 EC2 instance from the AWS Console.
- Configure the Security Group with the following inbound rules:

| Type | Port |
|------|------|
| SSH  | 22   |
| HTTP | 80   |
| TCP  | 3000 |

- Connect to the instance via SSH:

```bash
ssh -i "your-key.pem" ec2-user@your-ec2-public-ip
```

---

### Step 2 — Update System Packages

```bash
sudo yum update -y
```

---

### Step 3 — Install Node.js

```bash
sudo yum install nodejs -y
node --version
npm -v
```

---

### Step 4 — Install Git

```bash
sudo yum install git -y
git --version
```

---

### Step 5 — Clone the GitHub Repository

```bash
git clone https://github.com/iamtruptimane/node-js-app-CICD.git
ls
```

---

### Step 6 — Rename the Project Directory

```bash
sudo mv node-js-app-CICD/ node
cd node/
```

---

### Step 7 — Remove Unnecessary Files

```bash
sudo rm -rf jenkinsfile README.md
ls
```

---

### Step 8 — Review Application Files

```bash
cat app.js
cat package.json
```

---

### Step 9 — Install Project Dependencies

```bash
sudo npm install
ls
```

---

### Step 10 — Run the Application Directly

```bash
sudo node app.js
```

> This runs the app in the foreground. Use PM2 (Step 12) for background execution.

---

### Step 11 — Install PM2 Process Manager

```bash
sudo npm install -g pm2
```

---

### Step 12 — Start the Application with PM2

```bash
sudo pm2 start app.js
pm2 list
```

---

### Step 13 — Restart the Application

```bash
sudo pm2 restart app.js
```

---

### Step 14 — Edit the Application File

```bash
sudo vim app.js
sudo cat app.js
sudo pm2 restart app.js
```

---

### Step 15 — View Command History

```bash
history
```

---

## Accessing the Application

Once the application is running, open a browser and navigate to:

```
http://your-ec2-public-ip:3000
```

Replace `your-ec2-public-ip` with the actual public IP address of your EC2 instance.

---

## Project Outcomes

- Node.js application deployed and running on AWS EC2
- Application accessible via EC2 public IP on port 3000
- GitHub repository successfully cloned to the server
- Dependencies installed using NPM
- PM2 managing the application process in the background
- Linux server configured and administered via SSH
- End-to-end cloud deployment completed successfully

---

## Key Learnings

- How to launch and configure an AWS EC2 instance
- How to connect to a remote Linux server using SSH
- How to install Node.js and NPM on Amazon Linux
- How to clone projects from GitHub on a server
- How Node.js applications run on a Linux environment
- How to manage and monitor Node.js processes using PM2
- How cloud servers, application runtimes, and process managers work together

---

## Full Command Reference

```bash
sudo yum update -y
sudo yum install nodejs -y
node --version
node -v
npm -v
sudo yum install git -y
git --version
git clone https://github.com/iamtruptimane/node-js-app-CICD.git
ls
sudo mv node-js-app-CICD/ node
cd node/
sudo rm -rf jenkinsfile README.md
cat app.js
cat package.json
sudo npm install
sudo node app.js
sudo npm install -g pm2
sudo pm2 start app.js
pm2 list
sudo pm2 restart app.js
sudo vim app.js
history
```
