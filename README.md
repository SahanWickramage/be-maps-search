Scenario:
=========

A developer on our team was working on integrating the TomTom API. They did a great job laying the groundwork, but they've recently been promoted to a new project that requires their full attention.

We are pretty confident the developer managed to complete the majority of the initial part of the integration, however there might be a bug or two to be discovered.

Your task is to finish off this implementation, ensuring the requirements are met with passing tests.


Task:
=====
To take a partial address input and return full address suggestions along with the address broken into its individual components using the TomTom API.


Resources:
==========

* Place Search Documentation: https://developer.tomtom.com/search-api/documentation/search-service/search-service
* API Key: *****

Install:
========
1. yarn install

Test:
=====
1. yarn install
2. add api key .env file 
3. yarn test


Requirements:
=============

1. All tests should pass and ensure good coverage for new work
2. We only allow Australian addresses to be returned
3. Code should be maintainable and consistent
4. The result elements should contain important information about the place (country, municipality, etc)
5. The returned result should be typed and easily consumable via users of the library
6. No front-end requirements are necessary, this is purely a backend NodeJS library

# Tomtom API request

```
curl --location --request GET 'https://api.tomtom.com/search/2/search/{partial-address-input}.json?typeahead=true&limit=10&countrySet=AU&key={api-key}' \
--header 'accept: */*'
```

Note: space character should be replaced with "%20" in "partial-address-input"

# Dependencies added afterwards

1. ts-node and nodemon
```
yarn add --dev ts-node
yarn add --dev nodemon
```