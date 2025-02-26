# Mobile Financial Service (MFS) Application

## Overview

This project is a simple Mobile Financial Service (MFS) application similar to popular platforms like bKash or Nagad. The application provides essential features such as user authentication, money transfer, cash-out, cash-in, and balance inquiries, designed to be user-friendly and secure.

## Live Demo

[Click here to view the live application](https://revegerclient.vercel.app/)

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Account Types](#account-types)
- [User Stories](#user-stories)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Technologies Used

- Node.js
- React
- Express.js
- MongoDB
- Mongoose (for database management)

## Features

- **User Authentication**: Secure login and registration for users and agents with JWT.
- **Send Money**: Users can send money to other users, with fees applicable for transactions above a certain amount.
- **Cash-Out**: Users can withdraw funds through agents with a specified fee.
- **Cash-In**: Users can deposit money through agents without any fees.
- **Balance Inquiry**: Users, agents, and admins can check balances with role-specific views.
- **User Management**: Admin can manage users and approve agents.
- **Transaction Management**: Users and agents can view their last 100 transactions.
- **Admin Controls**: Admin has the authority to manage users and agents, view all transactions, and monitor system finances.

## Account Types

### User Account
- Register with personal information.
- Receive a bonus of 40 Taka upon registration.
- Send money with fees applicable for certain transactions.
- Cash-in through agents with zero fees.
- Cash-out through agents with a fee of 1.5%.

### Agent Account
- Register and undergo verification from the admin.
- Receive an initial balance of 100,000 Taka.
- Request balance recharges.
- Earn 1% from user cash-outs.

### Admin Account
- Manage users and agents.
- Verify and approve agent registrations.
- Monitor the total amount of money in the system.

## User Stories

### Login & Registration System
- Users and agents can register with unique mobile numbers, emails, and NIDs.
- Secure login using mobile number/email and PIN.

### Money Transactions
- Users can send money with a minimum transaction amount.
- Users can cash out through agents, specifying the amount and PIN.
- Agents facilitate cash-in transactions for users.

### Admin Functions
- Admin can manage users and transactions, and approve or reject agent requests.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git
