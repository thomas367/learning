# Client Side Data Storage

> A workspace containing client-side data storage implementations. 🚌 🚌

- client-side data storage - saving data inside the browser itself.
- Check if your browser support the storage implementation using [caniuse](https://caniuse.com/).

## Table of Contents

- [client-side-data-storage](#client-side-data-storage)
  - [Table of Contents](#table-of-contents)
  - [Technologies](#technologies)
  - [Cookies](#cookies)
  - [HTML5 Web Storage](#html5-web-storage)
  - [WebSQL](#websql)
  - [IndexedDB](#indexeddb)
    - [Transaction Modes](#transaction-modes)
  - [IndexedDB Advance](#indexeddb-advance)
    - [Creating Indexes](#creating-indexes)
    - [Iterating using Cursor](#iterating-using-cursor)
  - [License](#license)

## Technologies

Different storage technologies are available and each of the below listed technologies solves an individual problem,

- `Cookies`
- HTML5 WebStorage - `localStorage` and `sessionStorage`
- WebSQL - SQL based storage.
- IndexedDB - NoSQL based transactional storage.
- Offline Storage

The pros are:

- It improves performance
- reduces the load on the server
- Sandboxed - only a single origin can access the storage its assigned for.

## Cookies

> Stores as `string` upto `4KB`.

- Small data upto the size of 4KB, key-value pairs stored by the browser.
- Cookies are stored as strings and sent to the server on every subsequent request.
- Cookies are build as an extension of http protocol and because the http protocol is stateless.
- Updating a cookie and only way to update a cookie is create a new cookie with the same name.
- Deleting a cookie we need to update the cookie expiration time to a later or older time.

```txt
// cookie_name=cookie_value; expires=Sun, 16 Jul 3567 06:23:41 GMT; path=/; secure

Cookie = "
  key = value;
  expires = date;
  path = path; // to save on a specific place
  domain = domain;
  secure; // uses only https
"
```

## HTML5 Web Storage

> Stores as `key-value` pairs.

- Before HTML5 Web Storage there was cookies but with a limited storage of 4KB. Moreover, they sent the cookies on every request hence slowing down.
- Web storage attempts to provide client-side only storage with no interaction with server-side.
- Web storage provides two different types of storage,
  - `localStorage` - data isn't delete until the user manually deletes it  (persistent storage).
  - `sessionStorage` - data stored in the SessionStorage is temporary and cleared if the browser is closed. It only saved for a browser session.
- The main difference between these two types is the lifetime of the data not the functionality.
- If we open two browser with the same domain, session storage will not be in persisted in the same storage but the local storage will be available.

## WebSQL

> If you've enormous amount such that its not manageable by session storage or cookie. So we can only use the database.

- WebSQL is a database located in the browser.
- Before this we were only storing data as key-value pair but WebSQL uses table structure to store data. We can store more complex data and as many tables as we want.
- WebSQL uses SQLite for storing data in the background as database engine.

## IndexedDB

> Powerful, large-scale, transactional NoSQL database. ⚠️ Don't forget if you don't have large amounts of data, you shouldn't use database. If you do this the complexity of your application will be increased use local/session storage in this use-cases.  

- If we wanted to manage large amount of data in client-side we could use the WebSQL but it was the first attempt to add a database to client-side.
- The specification of WebSQL reached an impasse, because developer stopped using it due to it being tabular data and limited to SQL queries.
- IndexedDB is a NoSQL database where every operation is `asynchronous`.
- Asynchronous meaning that everything in Indexeddb is based on events. Since the database is event-driven, we need to catch the status of the events using the event-handler function.
- Moreover, the data structure in Indexeddb is more flexible.
- Its also a transactional database meaning we can rollback an operation if a query fails.
- Indexing is available in the IndexedDB.
- We use the `indexedDB` global object to create and maintain the database.
- There are four things to be aware of when working with IndexedDB,
  - `Objects` - stored as properties
  - `Object Store` - just like table, we need create an object store to store the objects.
  - `Indexes` - used to easily identify a given object.
  - `Transactions` - ensures the database integrity
  - `Cursor` - its a mechanism for iterating over multiple records in our database.
- If we've to update something in the database then we need to increase the database version and then use `onupgradeneeded` event handler to update the database or any other structural changes to the database. The handler name itself is descriptive.
- When we change the version then `onupgradeneeded` will be automatically triggered.
- Decimal numbers are converted to integer in version hence we cant use decimal numbers as version numbers. So we need to clearly use integer numbers for versions.
- We write our queries `onsuccess` handler.

### Transaction Modes

- `readonly` - can only read data from object store, (default) without any param is this mode for transaction.
- `readwrite` - transaction is allowed to read, write, delete and modify data
- `versionchange` - same functionality as read write but in addition can change indexes, delete object stores and more.

## IndexedDB Advance

> Look into [Mozilla IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/openCursor)

### Creating Indexes

- Its main purpose is to increase the query execution time. Index is the same as indexes in books which makes search easier.

### Iterating using Cursor

- The cursor is used to iterate the database one by one.
- `openKeyCursor` will only iterate over the keys
- `openCursor` to get key and value.
- See [limiting-queries](./29.limiting-queries/script.js) for pagination and limiting using cursor.
- Key-range allows us to limit the cursor iterating range.
  - `lowerBound`
  - `upperBound`
  - `open` - if we need to exclude the upperbound or lowerbound we will assign as `true`.
