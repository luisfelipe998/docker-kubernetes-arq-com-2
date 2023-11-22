sh ./k8s_uninstall.sh

kubectl apply -f ./k8s/mongodb-deployment.yaml
kubectl apply -f ./k8s/mongodb-service.yaml
kubectl apply -f ./k8s/db-persistentvolumeclaim.yaml
kubectl apply -f ./k8s/app-deployment.yaml
kubectl apply -f ./k8s/app-tcp-service.yaml
