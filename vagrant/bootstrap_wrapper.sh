#!/usr/bin/env bash

PROVISIONING_LOG=/var/log/vagrant-provisioning.log
PROVISIONING_DEBUG=/var/log/vagrant-provisioning.debug.log

echo "Prepping logs"

apt-get install debianutils

savelog -n -c 10 ${PROVISIONING_LOG}
savelog -n -c 10 ${PROVISIONING_DEBUG}


echo "Starting bootstrap"

export > /vagrant/environment.sh
exec /vagrant/bootstrap.sh  2>${PROVISIONING_DEBUG} | tee ${PROVISIONING_LOG}

echo "Finished bootstrap"

