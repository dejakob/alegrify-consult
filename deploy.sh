git reset --hard
git clean -fd
git pull
rm -rf node_modules
npm i
npm run build
version=`date '+%Y_%m_%d__%H_%M_%S'`;
cp -R ./build ./release-$version
cp -R ./build ./html
rm -rf ./build
ln -nsf html /var/www
nginx -s reload