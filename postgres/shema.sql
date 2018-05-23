create table klient_profile (
id serial primary key,
passport_seria text,
passport_number bigint,
PIB text,
adress text,
phone_number text,
age_id int references age_info,
ms_id int references ms_info,
education_id int references education_info,
incomes_id int references incomes_info
);

create table age_info (
id serial primary key,
age int,
mark decimal
);

create table ms_info (
id serial primary key,
label text,
mark decimal
);

create table education_info (
id serial primary key,
label text,
mark decimal
);

create table incomes_info (
id serial primary key,
count int,
mark decimal
);
