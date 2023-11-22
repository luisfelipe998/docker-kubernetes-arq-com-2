APP_NAME="docker-k8s"
APP_VERSION="0.0.1"
APP_TAG=${APP_NAME}:${APP_VERSION}
NAMESPACE="luisfelipe998"

docker build -t ${NAMESPACE}/${APP_TAG} .
docker push ${NAMESPACE}/${APP_TAG}

if [ $? -eq 0 ]; then
    echo "Application image uploaded on: https://hub.docker.com/r/luisfelipe998/docker-k8s"
else
    echo "Failed to upload application image. Check logs above."
fi