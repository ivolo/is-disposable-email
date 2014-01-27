
build: node_modules components index.js
	@component build --dev

clean:
	@rm -fr build components node_modules

components: component.json
	@component install --dev

node_modules: package.json
	@npm install

test: build
	@./node_modules/.bin/mocha --reporter spec test/tests.js
	@open test/index.html

.PHONY: clean test