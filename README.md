# short-url

Backend built using **Node** and **Mongo**, with functionality similar to bit-ly, as it is a url shortener.

# Endpoints

## **post:** /api/url/shorten

It shortens a url, the **original url** must be indicated in the body and returns the inserted object including the **code** associated with the url
**body example**

```
body: {"urlOriginal": "https://www.av.com"}
```

**response example**

```
{
    "\_id": "123456789",
    "urlOriginal": "https://www.av.com",
    "urlShort": "http://localhost:5000/c2coYR9Xg",
    "urlCode": "c2coYR9Xg",
    "\_\_v": 0
}
```

## **get:** /api/list

Return a list of domains

**response example**

```
[
  {
    "_id": "609ee9da1f4e932e9900ef05",
    "urlOriginal": "https://www.av.com",
    "urlShort": "http:localhost:5050/c2coYR9Xg",
    "urlCode": "c2coYR9Xg",
    "__v": 0
  },
  {
    "_id": "60a079302d02040ddc684c01",
    "urlOriginal": "https://www.youtube.com",
    "urlShort": "localhost:5050/JbYJKz72T",
    "urlCode": "JbYJKz72T",
    "__v": 0
  },
  {
    "_id": "60a079362d02040ddc684c02",
    "urlOriginal": "https://www.twitter.com",
    "urlShort": "localhost:5050/Svt2mCAOF",
    "urlCode": "Svt2mCAOF",
    "__v": 0
  }
]
```

# How to use?

Through the browser, if we enter the shortened url with the code, for example **domain/code**, will redirect us to the original url :)
