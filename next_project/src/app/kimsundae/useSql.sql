create database practice_next;
use practice_next;
create table board(
                      bno int auto_increment,
                      btitle varchar(100),
                      bcontent longtext,
                      bpassword varchar(20),
                      bdeleteYn char(1) default 'N',
                      b_date datetime default now(),
                      primary key(bno)
);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234';
