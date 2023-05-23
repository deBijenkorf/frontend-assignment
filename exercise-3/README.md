## Exercise 3 - Render data

For this exercise a dummy backend API has been prepared for you returning JSON using the Next.js API route. If you application is running then you can query the search endpoint. For example a user searching for search term `trui`:
```
curl -s http://localhost:3000/api/search?search=ca
```

If your application is not running, use the following command to start it:

```
npm run start
```

Create a service that retrieves the data from the above mentioned API. This data should be used to render the search suggestions. Search suggestions should be rendered according to the designs in excercise3.png. Pay attention to the following:

- Search suggestions are shown `onChange`;
- Data is retrieved from the API when the search query is longer than 2 characters;
- Data is retrieved asynchronously;
- Visibility of results list;
- Unit test for above scenario's (including a mock so that we don't go to the network in the test).