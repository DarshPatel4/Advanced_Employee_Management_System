CREATE DATABASE employee_management;

USE employee_management;

CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(20),
    position VARCHAR(255)
);

INSERT INTO employees (name, email, phone, position) 
VALUES 
('Rahul Gupta', 'rahul.gupta@example.com', '9876543210', 'Senior Software Developer'),
('Priya Sharma', 'priya.sharma@example.com', '8765432109', 'Marketing Manager'),
('Aman Verma', 'aman.verma@example.com', '7654321098', 'HR Coordinator'),
('Nisha Patel', 'nisha.patel@example.com', '6543210987', 'Financial Analyst'),
('Siddharth Singh', 'siddharth.singh@example.com', '5432109876', 'Operations Manager'),
('Pooja Das', 'pooja.das@example.com', '4321098765', 'Graphic Designer'),
('Vivek Kumar', 'vivek.kumar@example.com', '3210987654', 'Sales Executive'),
('Swati Mehta', 'swati.mehta@example.com', '2109876543', 'Customer Support Representative'),
('Rajesh Singhania', 'rajesh.singhania@example.com', '1098765432', 'Project Manager'),
('Anjali Desai', 'anjali.desai@example.com', '1987654321', 'Content Writer');
