git reset --hard origin/master
git clean -fd
git pull origin master
rm -rf node_modules
yarn
yarn build
sudo chown -R www-data:www-data ./build/*
sudo cp -R ./build/* /var/www/html
sudo rm -rf ./build
cp ./config/nginx_default /etc/nginx/sites-available/default
cp ./config/nginx_default /etc/nginx/sites-enabled/default