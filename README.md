# angular2-webpack2-aot
webpack2 config settings JIT / AOT compile with lazy Load

### Quick start
```bash
# clone  repo
git clone https://github.com/tk5641/angular2-webpack2-aot

# change directory to repo
cd angular2-webpack2-aot

# install the repo with npm
npm install

# run server for dev mode with webpack-dev-server
# localhost:7777
npm start

# build angular App with JIT compile
npm run build

# build angular App with AOT compile
npm run build:aot

# If you do not have webpack module globally run this first
npm install -g webpack@^2.2.1

# If you do not have rimrak module globally run this first
npm install -g rimraf