git reset --hard
git clean -fd
git pull
rm -rf node_modules
npm i
npm run build
version=`date '+%Y_%m_%d__%H_%M_%S'`;
cp -R ./build ./release-$version
rm -rf ./build
ln -nsf release-$version current
cp ./server_config/nginx/default /etc/nginx/sites-enabled/default
/etc/init.d/nginx restart