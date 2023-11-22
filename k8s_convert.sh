docker-compose config > docker-compose-resolved.yml
rm -r k8s
mkdir k8s
kompose convert -f docker-compose-resolved.yml -o ./k8s
rm docker-compose-resolved.yml
