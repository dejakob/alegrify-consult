sudo apt-get update
sudo apt-get install nginx
sudo apt-get install git
# Make sure ~/.ssh/*.pub is added to github
git config --global user.email happy@alegrify.
git config --global user.name Alegrify
git clone git@github.com:dejakob/alegrify-consult.git
./alegrify-consult/deploy.sh