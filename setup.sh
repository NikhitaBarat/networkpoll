
# installing client dependencies
echo "Installing client dependencies...."
cd client; npm install; cd ..

# installing server dependencies
echo "Installing server dependencies...."
cd server; npm install; cd ..

# installing IPFS dependencies
echo "Installing IPFS dependencies...."
cd ipfs; npm install; cd ..

# install truffle node packages
npm install 

