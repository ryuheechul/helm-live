.PHONY: storybook
storybook:
	yarn storybook

storybook-upgrade:
	npx sb upgrade

build:
	yarn build

test:
	yarn test
