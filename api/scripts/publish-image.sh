#/bin/sh
file="./build.properties"

function prop {
    grep "${1}" ${file} | cut -d'=' -f2
}

docker push sstefanov/wc-dreamix-api:$(prop 'project.version')
