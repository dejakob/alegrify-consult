sudo apt-get update
sudo apt-get install nginx
sudo apt-get install git
# Make sure ~/.ssh/*.pub is added to github
git clone git@github.com:dejakob/alegrify-consult.git
./alegrify-consult/deploy.sh