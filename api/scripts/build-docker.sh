#/bin/sh
file="./build.properties"

function prop {
    grep "${1}" ${file} | cut -d'=' -f2
}

docker buildx build --platform linux/amd64 --tag wc-dreamix-api .
docker tag wc-dreamix-api:latest sstefanov/wc-dreamix-api:$(prop 'project.version')
