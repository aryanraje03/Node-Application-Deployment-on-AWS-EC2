# Node.js Application Deployment on AWS EC2  
Using **Node.js, NPM & PM2**

---

## 📖 Project Overview

This project demonstrates the deployment of a **Node.js Web Application** on an **Amazon EC2 instance** using **Amazon Linux 2023**.  

The application was cloned from GitHub, dependencies installed via **NPM**, and managed using **PM2 Process Manager** for continuous background execution.

This project was completed as part of my **Cloud & DevOps Learning Journey** to gain practical, hands-on experience in:

- AWS EC2 deployment  
- Linux server administration  
- Node.js application hosting  
- Git and GitHub integration  
- Process management using PM2  
- Running production-style Node.js applications on cloud servers  

---

## ⚙️ Technologies Used

| Technology              | Purpose                     |
|-------------------------|-----------------------------|
| AWS EC2 (Amazon Linux)  | Cloud Virtual Server        |
| Node.js                 | JavaScript Runtime          |
| NPM                     | Package Manager             |
| Git & GitHub            | Source Code Management      |
| PM2                     | Process Manager             |
| Linux                   | Server Operating System     |

---

## 🏗️ Project Architecture

User Browser
↓
AWS EC2 Instance
↓
Node.js Application
↓
PM2 Process Manager


---

## 🚀 Implementation Steps

### Step 1 — Launch EC2 Instance
- Created an **Amazon Linux 2023** EC2 instance.  
- Configured Security Group:

| Type | Port |
|------|------|
| SSH  | 22   |
| HTTP | 80   |
| TCP  | 3000 |

Connect via SSH:
```bash
ssh -i "your-key.pem" ec2-user@your-ec2-public-ip

Step 2 — Update Linux Packages
sudo yum update -y

