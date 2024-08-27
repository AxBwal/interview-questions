### What is projection in MongoDb

In MongoDB, **projection** refers to the process of selecting specific fields from a document while querying a collection. Instead of returning the entire document, you can choose to return only the fields you need.

### Key Points:
- **Projection** is used to improve query performance by reducing the amount of data returned.
- It is done by specifying the fields you want to include (or exclude) in the query result.
- In a MongoDB query, projection is defined using the second argument in the `find()` method.

### Example:
If you have a collection of documents like this:

```json
{
  "_id": 1,
  "name": "John",
  "age": 30,
  "address": "123 Main St"
}
```

You can use projection to return only the `name` and `age` fields:

```javascript
db.collection.find({}, { name: 1, age: 1, _id: 0 })
```

This query will return:

```json
{
  "name": "John",
  "age": 30
}
```

In this example, `1` indicates that the field should be included, and `0` indicates exclusion. The `_id` field is excluded by setting it to `0`.

**Simple Definition:** Projection in MongoDB is the process of selecting only the fields you need from a document in a query, making your data retrieval more efficient.

