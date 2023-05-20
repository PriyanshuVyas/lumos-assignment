#       LUMOS LABS BACKEND ASSIGNMENT


### Submitted By: 
### Priyanshu Vyas
### (vyas.priyanshu23@gmail.com)



## Getting Started

To get started with this project, follow these steps:

Clone the repository to your local machine:

  git clone https://github.com/PriyanshuVyas/lumos-assignment.git

## Install the dependencies:

npm install mongoose express

## Database:

This project runs on MongoDB and is directly stored in MongoDB Atlas cloud.

## Start the server:

The default port is 3000.
The server will start running on http://localhost:3000.

## Configuration

The following environment variables can be used to configure the API:

    CONNECT_URL: The mongoDB Atlas connection url.
    PORT: The port where server will run.

You can set these environment variables using a .env file in the root directory of the project. For example:

    CONNECT_URL= "mongodb+srv://your_id:your_password@your_cluster_name.cluster_id.mongodb.net/?retryWrites=true&w=majority"
    PORT= 3000

## Endpoints

The app contains the following endpoints:

    ○	`/api/nfts`: View all NFTs.
    ○	`/api/nfts/[id]`: View a single NFT by ID.
    ○	`/api/nfts`: Create a new NFT.
    ○	`/api/nfts/[id]`: Update an existing NFT.
    ○	`/api/nfts/[id]`: Delete an existing NFT.

