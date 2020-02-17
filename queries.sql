SELECT * FROM [Customers] WHERE postalcode = '1010'

SELECT * FROM [Suppliers] WHERE supplierId = '11'

SELECT * FROM [Customers] WHERE city = 'London';
SELECT * FROM [Customers] WHERE city = 'Madrid';
SELECT * FROM [Customers] WHERE country = 'Brazil';

Insert Into Customers (CustomerName) values('Bilbo Baggins');

Update Customers SET Country='The Shire' WHERE CustomerID = '92';
Update Customers SET City='Bag End' WHERE CustomerID = '92';
Update Customers SET Address='1 Hobbit-Hole' WHERE CustomerID ='92';

Update Customers SET PostalCode = '11122' WHERE CustomerID = '92'

