#!/bin/bash

currdir=$(pwd)
tempdir=$(mktemp -d)

cd $tempdir

wget https://dl.pstmn.io/download/latest/linux64 -O postman.tar.gz

if [[ $? -eq 0 ]]; then
    tar zxvf postman.tar.gz

    cp -R $currdir/postman/usr/share/postman/bin .

    rm -rf $currdir/postman/usr/share/postman/*

    cp -R Postman/* $currdir/postman/usr/share/postman/
    cp -R bin/ $currdir/postman/usr/share/postman/
fi

cleanup() {
    test -d $tempdir && rm -r $tempdir
}

trap cleanup EXIT
