# Docker + K8s

Simple repository to showcase containerization with docker and docker compose and k8s. Also has scripts to convert docker-compose.yml into k8s descriptors.


## Scripts 

- Push image to registry: `sh push_to_registry.sh`
- Run with docker: `sh run.sh`
- Convert docker-compose to k8s: `sh k8s_convert.sh`
- Apply k8s descriptors on cluster: `sh k8s_install.sh`

The application is a mock signup/signin that simulates the storage of the password in a secure way. 

## Endpoints

### /register

Post request with body:
```
{
    "username": "John Doe",
    "password": "your-password"
}
```
This endpoints saves the user in a mongodb with a simple hash algorithm. 

### /login
Post request with body:
```
{
    "username": "John Doe",
    "password": "your-password"
}
```
This endpoints validates the user login comparing the generated hash from the provided password with the hash stored during registration. 
