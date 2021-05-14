# short-url

Backend built using **Node** and **Mongo**, with functionality similar to bit-ly, as it is a url shortener.

### Endpoints

#### **post:** /api/url/shorten

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

### How to use?

Through the browser, if we enter the shortened url with the code, for example **domain/code**, will redirect us to the original url :)
