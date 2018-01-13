Drop database burgers_db;
Create database burgers_db;

Use burgers_db;

Create table  burgers(
  id int auto_increment,
  burger_name varchar(255),
  devoured boolean default false,
  primary key (id)
);
