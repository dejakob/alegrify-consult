git reset --hard
git clean -fd
git pull
rm -rf node_modules
npm i
npm i dejakob/alegrify-ui
npm i dejakob/react-alegrify-ui
npm run build
version=`date '+%Y_%m_%d__%H_%M_%S'`;
sudo cp -R ./build ./release-$version
sudo cp -R ./build/* /var/www/html && sudo chown -R www-data:www-data /var/www/html
rm -rf ./build
/etc/init.d/nginx restart