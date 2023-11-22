APP_NAME="docker-k8s"
APP_VERSION="0.0.1"
APP_TAG=${APP_NAME}:${APP_VERSION}
NAMESPACE="luisfelipe998"

# docker pull ${NAMESPACE}/${APP_TAG} 
docker build -t docker-k8s .
docker run --rm -p 8080:8080 --env USE_IN_MEMORY_DB=true --name ${APP_NAME} ${NAMESPACE}/${APP_TAG}