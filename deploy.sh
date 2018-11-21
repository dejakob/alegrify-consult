git reset --hard
git clean -fd
git pull
rm -rf node_modules
npm i
npm i dejakob/alegrify-ui
npm i dejakob/react-alegrify-ui
npm run build
version=`date '+%Y_%m_%d__%H_%M_%S'`;
cp -R ./build ./release-$version
cp -R ./build/* /var/www/html && chown -R www-data:www-data /var/www/html
rm -rf ./build
nginx -s reload