#!/usr/bin/env bash

echo "Provisioning ... "
echo "Please hold the line, your call is important to us and we will answer as soon as possible"

echo "Provisioning started: $(date)"

echo "--- Environment" 1>&2
export 1>&2
echo "--- End of environment" 1>&2

echo -n "--- Updating package index "
apt-get update 1>&2
echo "done"


# Install Sass
echo "--- Install Sass ---"
wget https://github.com/sass/dart-sass/releases/download/1.32.8/dart-sass-1.32.8-linux-x64.tar.gz -O /tmp/sass.tar.gz
pushd /tmp
tar zxvf sass.tar.gz
mv dart-sass/sass /usr/local/bin
popd


echo "--- Install core packages ---"
pushd ${VCFG_SHARED_DIRS_PUB_GUEST}
apt-get -y install python3 python3-pip
pip3 install -r requirements.txt

sass app/static/sass/:app/static/css/

flask db upgrade

nohup flask run --host=0.0.0.0 &
popd


echo "Have a look at http://localhost:${VCFG_PORTS_WWW_HOST}/ and see what awaits!"

echo "Provisioning finished: $(date)"
