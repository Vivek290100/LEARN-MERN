[
  {
    _id: ObjectId("6014dc988c628fa57a508089"),
    Age: 'young',
    Married: 'Married',
    Location: 'Very Close',
    Salary: 85100,
    Children: 2,
    History: 'Medium',
    Catalogs: 4,
    AmountSpent: 2500,
    HomeStatus: 'Own',
    Tags: [ 'VIP', 'VIP1' ],
    Gender: 'young'
  },
  {
    _id: ObjectId("6014dc988c628fa57a508090"),
    Age: 'old',
    Married: 'Single',
    Location: 'Close',
    Salary: 79300,
    Children: 1,
    History: 'Low',
    Catalogs: 2,
    AmountSpent: 780,
    HomeStatus: 'Own',
    Tags: [ 'VIP', 'VIP1' ],
    Gender: 'old'
  },
  {
    _id: ObjectId("6014dc988c628fa57a508091"),
    Age: 'young',
    Married: 'Married',
    Location: 'Far',
    Salary: 59100,
    Children: 3,
    History: 'High',
    Catalogs: 6,
    AmountSpent: 1600,
    HomeStatus: 'Rent',
    Tags: [ 'VIP', 'VIP1' ],
    Gender: 'young'
  },
]



// 1. Comparison Operators
// Operator	    Description	                                                      Example
// $eq	        Matches values that are equal to a specified value.	                  db.customers.find({ Salary: { $eq: 50000 } })
// $ne	        Matches values that are not equal to a specified value. 	          db.customers.find({ Salary: { $ne: 50000 } })
// $gt        	Matches values that are greater than a specified value.  	          db.customers.find({ Salary: { $gt: 50000 } })
// $gte	        Matches values that are greater than or equal to a specified value.   db.customers.find({ Salary: { $gte: 50000 } })
// $lt	        Matches values that are less than a specified value.	              db.customers.find({ Salary: { $lt: 50000 } })
// $lte     	Matches values that are less than or equal to a specified value.	  db.customers.find({ Salary: { $lte: 50000 } })
// $in	        Matches values that are in a specified array.                         db.customers.find({ Age: { $in: ["young", "old"] } })
// $nin     	Matches values that are not in a specified array.                     db.customers.find({ Age: { $nin: ["young", "old"] } })



// 2. Logical Operators
// Operator	    Description	                                                      Example
// $and	        Joins query clauses with a logical AND.	                              db.customers.find({ $and: [{ Age: "young" }, { Salary: { $gte: 50000 } }] })
// $or	        Joins query clauses with a logical OR.	                              db.customers.find({ $or: [{ Age: "young" }, { Salary: { $gte: 50000 } }] })
// $not         Inverts the effect of a query expression.                             db.customers.find({ Salary: { $not: { $gte: 50000 } } })
// $nor	        Joins query clauses with a logical NOR.	                              db.customers.find({ $nor: [{ Age: "young" }, { Salary: { $gte: 50000 } }] })



// 3. Element Operators
// Operator	    Description	                                                      Example
// $exists	    Matches documents that have a specified field.	                      db.customers.find({ Age: { $exists: true } })
// $type	    Matches documents that have a field of a specified BSON type.	      db.customers.find({ Age: { $type: "string" } })



// 4. Evaluation Operators
// Operator	    Description	                                                       Example
// $regex	    Matches strings using regular expressions.	                          db.customers.find({ Age: { $regex: /^y/ } })
// $text	    Performs a text search on a text index.	                              db.customers.find({ $text: { $search: "young" } })
// $where	    Matches documents that satisfy a specified JavaScript expression.	  db.customers.find({ $where: "this.Salary > 50000" })



// 5. Array Operators
// Operator	    Description	                                                       Example
// $all	        Matches arrays that contain all specified elements.	                  db.customers.find({ Tags: { $all: ["VIP", "VIP1"] } })
// $elemMatch	Matches documents that contain an array field 
//              with at least one element that matches all specified criteria.	      db.customers.find({ Tags: { $elemMatch: { $eq: "VIP", $ne: "VIP1" } } })
// $size	    Matches arrays with a specified number of elements.	                  db.customers.find({ Tags: { $size: 2 } })



// 6. Field Update Operators
// Operator	    Description	                                                      Example
// $set	        Sets the value of a field in a document.	                         db.customers.updateOne({ _id: ObjectId("6014dc988c628fa57a508089") }, { $set: { Salary: 90000 } })
// $unset	        Removes the specified field from a document.	                 db.customers.updateOne({ _id: ObjectId("6014dc988c628fa57a508089") }, { $unset: { Salary: "" } })
// $inc	        Increments the value of a field by a specified amount.               db.customers.updateOne({ _id: ObjectId("6014dc988c628fa57a508089") }, { $inc: { Salary: 5000 } })
// $mul	        Multiplies the value of a field by a specified amount.	             db.customers.updateOne({ _id: ObjectId("6014dc988c628fa57a508089") }, { $mul: { Salary: 1.1 } })
// $rename	        Renames a field in a document.	                                 db.customers.updateOne({ _id: ObjectId("6014dc988c628fa57a508089") }, { $rename: { Gender: "Sex" } })


// 7. Array Update Operators
// Operator	    Description	                                                                 Example
// $push	    Adds an element to an array.	                                            db.customers.updateOne({ _id: ObjectId("6014dc988c628fa57a508089") }, { $push: { Tags: "VIP2" } })
// $pop	        Removes the first or last element from an array (1 for last, -1 for first).	    db.customers.updateOne({ _id: ObjectId("6014dc988c628fa57a508089") }, { $pop: { Tags: 1 } })
// $pull	    Removes all array elements that match a specified condition.    	        db.customers.updateOne({ _id: ObjectId("6014dc988c628fa57a508089") }, { $pull: { Tags: "VIP1" } })
// $addToSet	Adds an element to an array only if it does not already exist.	            db.customers.updateOne({ _id: ObjectId("6014dc988c628fa57a508089") }, { $addToSet: { Tags: "VIP2" } })


// 8. Aggregation Stages
// Stage	    Description	                                                                                   Example
// $match	    Filters documents to pass only those that match the specified condition(s).	                      db.customers.aggregate([{ $match: { Location: "Very Close" } }])
// $group	    Groups documents by a specified field(s) and performs aggregate calculations on grouped data.	  db.customers.aggregate([{ $group: { _id: "$Age", totalSpent: { $sum: "$AmountSpent" } } }])
// $sort	    Sorts the documents based on a field (1 for ascending, -1 for descending).	                      db.customers.aggregate([{ $sort: { Salary: -1 } }])
// $project	    Reshapes documents by including, excluding, or computing new fields.	                          db.customers.aggregate([{ $project: { Age: 1, Salary: 1, TotalExpenditure: { $sum: "$AmountSpent" } } }])
// $limit	    Limits the number of documents in the result set.	                                              db.customers.aggregate([{ $limit: 3 }])
// $skip	    Skips a specified number of documents in the result set.	                                      db.customers.aggregate([{ $skip: 2 }])

// 9. Aggregation Operators
// Operator	    Description	                                                          Example
// $sum	        Sums the values for each group.	                                           db.customers.aggregate([{ $group: { _id: "$Age", totalSpent: { $sum: "$AmountSpent" } } }])
// $avg	        Computes the average value of the numeric field for each group.	           db.customers.aggregate([{ $group: { _id: "$Age", avgSalary: { $avg: "$Salary" } } }])
// $max	        Finds the maximum value from the group.	                                   db.customers.aggregate([{ $group: { _id: "$Age", maxSalary: { $max: "$Salary" } } }])
// $min	        Finds the minimum value from the group.	                                   db.customers.aggregate([{ $group: { _id: "$Age", minAmountSpent: { $min: "$AmountSpent" } } }])
// $first	    Returns the first document in each group (as determined by $sort).	       db.customers.aggregate([{ $group: { _id: "$Age", firstEntry: { $first: "$_id" } } }])
// $last	    Returns the last document in each group (as determined by $sort).	       db.customers.aggregate([{ $group: { _id: "$Age", lastEntry: { $last: "$_id" } } }])


// 10. Array Operators
// Operator	    Description	                                                                                   Example
// $unwind	    Deconstructs an array field from the input documents to output a document for each element.	     db.customers.aggregate([{ $unwind: "$Tags" }])
// $push	    Adds elements to an array within a group.	                                                     db.customers.aggregate([{ $group: { _id: "$Age", allTags: { $push: "$Tags" } } }])




// 1. **$lookup** query
db.customers.aggregate([{$lookup: {from: 'orders',localField: '_id',foreignField: 'customerId',as: 'customerOrders'}}]);

// 1. **$facet** query
db.customers.aggregate([{$facet: {totalCustomers: [{ $count: 'total' }],byHomeStatus: [{ $group: { _id: '$HomeStatus', count: { $sum: 1 } } }]}}]);

// 1. **$out** query
db.customers.aggregate([{$group: {_id: '$HomeStatus',avgSalary: { $avg: '$Salary' }}},{$out: 'homeStatusStats'}]);

// 1. $cond
db.customers.aggregate([{$addFields:{newField:{$cond:{if:{$eq:["$HomeStatus","Own"]},then:"true",else:"false"}}}}])

db.createCollection("events", { capped: true, size: 50000, max: 100 });//capped collection
db.customers.updateOne({ _id: ObjectId("6014dc988c628fa57a508099") },{ $set: { AmountSpent: 4000, Age: 'old' } },{ upsert: true });//upsert
db.customers.aggregate([{ $skip: (3 - 1) * 5 },{ $limit: 5 }]);//pagination 10-15

// 1. Make the Location's 1st Letter Capitalized
db.customers.updateMany({},[{$set: {Location: {$concat: [{ $toUpper: { $substr: ["$Location", 0, 1] } },{ $substr: ["$Location", 1, -1] }]}}}]);

// 2. Make the Location's Full Uppercase
db.customers.updateMany({},[{$set: {Location: { $toUpper: "$Location" }}}]);

// 3. Make the Location's Full Lowercase
db.customers.updateMany({},[{$set: {Location: { $toLower: "$Location" }}}]);

db.customers.find();
db.customers.find({ Married: 'Married' });
db.customers.find({ Salary: { $gt: 50000 } });
db.customers.find({ Children: { $gt: 2 } });
db.customers.find({ Age: 'young', Tags: 'VIP' });
db.customers.find({}, { Tags: 0 });

db.customers.find().sort({ Salary: 1 });

db.customers.aggregate([{ $group: { _id: null, avgSalary: { $avg: "$Salary" } } }]);
db.customers.aggregate([{ $match: { Married: 'Married' } }, { $group: { _id: null, totalSpent: { $sum: "$AmountSpent" } } }]);
db.customers.find({ Location: { $regex: /^F/ } });//find Location starts with 'F'


db.customers.find({ Salary: { $in: [85100, 79300] } });
db.customers.find({ Tags: { $all: ['VIP', 'VIP1'] } });


db.customers.createIndex({ Salary: 1 });
db.customers.createIndex({ Age: 1, AmountSpent: -1 });
db.customers.getIndex();
db.customers.dropIndex();


db.customers.aggregate([{ $unwind: "$Tags" }]);
db.customers.aggregate([{ $lookup: { from: "orders", localField: "_id", foreignField: "customerId", as: "orderDetails" } }]);
db.customers.aggregate([{ $group: { _id: "$Age", totalSpent: { $sum: "$AmountSpent" } } }]);
db.customers.aggregate([{$addFields:{newField:{$cond:{if:{$eq:["$HomeStatus","Own"]},then:"true",else:"false"}}}}])