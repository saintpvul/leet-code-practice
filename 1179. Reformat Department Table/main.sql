/*

Table: Department

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| revenue     | int     |
| month       | varchar |
+-------------+---------+
In SQL,(id, month) is the primary key of this table.
The table has information about the revenue of each department per month.
The month has values in ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].
 

Reformat the table such that there is a department id column and a revenue column for each month.

Return the result table in any order.

*/

-- solution

select id,
 MAX(case when month = 'Jan' then revenue end) as Jan_Revenue,
 MAX(case when month = 'Feb' then revenue end) as Feb_Revenue, 
 MAX(case when month = 'Mar' then revenue end) as Mar_Revenue,  
 MAX(case when month = 'Apr' then revenue end) as Apr_Revenue,  
 MAX(case when month = 'May' then revenue end) as May_Revenue,  
 MAX(case when month = 'Jun' then revenue end) as Jun_Revenue,  
 MAX(case when month = 'Jul' then revenue end) as Jul_Revenue,  
 MAX(case when month = 'Aug' then revenue end) as Aug_Revenue,  
 MAX(case when month = 'Sep' then revenue end) as Sep_Revenue, 
 MAX(case when month = 'Oct' then revenue end) as Oct_Revenue,
 MAX(case when month = 'Nov' then revenue end) as Nov_Revenue,  
 MAX(case when month = 'Dec' then revenue end) as Dec_Revenue 
 FROM Department 
group by id;