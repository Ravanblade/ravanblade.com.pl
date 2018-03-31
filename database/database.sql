CREATE TABLE Projects (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  CategoryId INT,
  Title varchar(60) not null,
  Technologies varchar(100) not null,
  Text varchar(255) ,
  Url varchar(100),
  UrlText varchar(100),
  CodeUrl varchar(100),
  CodeText varchar(60),
  ImgUrl varchar(100)
);

CREATE TABLE Categories (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    CategoryName varchar(60)
);

CREATE TABLE Users (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Name varchar(100),
    SurnName varchar(100),
    Login varchar(100),
    Password varchar(255)
);
