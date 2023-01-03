echo "Bash version ${BASH_VERSION}... Script running..."
for i in {4..10..1}
do
  truffle migrate --reset
done