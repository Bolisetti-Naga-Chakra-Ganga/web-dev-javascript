file: index2.js
ARRAYS:
1. insertion : 3 types
11. at end ==> arr.push(elem)
12. at beginning ==> arr.unshift(elem)
13. middle==> arr.splice(index, no of elems we want to delete, elements to be inserted in those indexes)

2. searching
21. primitive type: 
    1. array.indexOf(elem to be searched) ==> returns index if elem presents, returns -1 if elem not present
    2. 2nd way to search for an elem ==> includes function ==> returns true of false

22. Objects/ References
Callback Functions
when we want to find any obj in array of objs we can use find method
ex: let resultObje= Objarray_name.find(predicate Function)

3. REMOVING AN ELEM FROM ARRAY
end: pop()
beginning: shift();
middle: splice ==> syntax: array.splice(index of the elem to be  deleted, no of elemes to be deleted)