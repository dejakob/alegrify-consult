sudo apt-get update
sudo apt-get install nginx
sudo apt-get install git
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
export NVM_DIR="${XDG_CONFIG_HOME/:-$HOME/.}nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
/root/.bashrc
nvm install 10
# Make sure ~/.ssh/*.pub is added to github
git config --global user.email happy@alegrify.
git config --global user.name Alegrify
git clone git@github.com:dejakob/alegrify-consult.git
./alegrify-consult/deploy.sh