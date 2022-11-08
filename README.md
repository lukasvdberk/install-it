
Live version available at:

[https://install.lukas.sh](https://install.lukas.sh)

# Install it

Tired of googling how to install a certain software package on your server? This is the place to find the answer.

Install it is a project to make it easier to install software on Linux. 
You simply select a Linux distribution and the software you want to install and Install it will generate a script that you can run to install the software.
It will not just simply apt install the-package but will also run the post installation commands (for example setting permissions or setting up a database).


# Development
The following stack is used:

 - Angular
 - Strapi REST API
 - Postgres database for the REST API

## Setup
To get started with development you need to install the following:
 - Docker
 - Docker Compose

You can simply run the docker-compose file (or setup the projects manually with npm)
```bash
docker-compose up
```
