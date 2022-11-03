
INSERT INTO department (name)
VALUES  ("Macrodata Data Refinement"),
        ("Optics & Design"),
        ("Research & Development"),
        ("Human Resources"),
        ("Security");

INSERT INTO role (title, salary, department_id)
VALUES  ("refiner", 500000, 1),
        ("designer", 100000, 2),
        ("scientist", 45000, 3),
        ("HR specialist", 60000, 4),
        ("Manager",90000,1),
        ("guard", 100000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Harmony","Cobel",5,null),
        ("Mark", "S", 1, 1),
        ("Helly", "R", 1, 2),
        ("Burt", "G", 2, null),
        ("Irving", "B", 1, 2),
        ("Dylan", "G", 1, 2),
        ("Seth","Milchick",5,1),
        ("Gemma","Casey",4,null),
        ("Doug","Graner",6,null);