docker-compose config > docker-compose-resolved.yml
mkdir k8s
kompose convert -f docker-compose-resolved.yml -o ./k8s
rm docker-compose-resolved.yml
