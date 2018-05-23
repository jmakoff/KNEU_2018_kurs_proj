DO
$do$
BEGIN
   FOR i IN 1..20 LOOP
      insert into incomes_info (count, mark) values (5* i, 0.05 * i);
   END LOOP;
END
$do$;

DO
$do$
BEGIN
   FOR i IN 1..20 LOOP
      insert into age_info (age, mark) values (20 + (i+3), 1 - 0.05 * i);
   END LOOP;
END
$do$;

insert into ms_info (label, mark) values ('1 car, 1 room apartments', 0.5);
insert into ms_info (label, mark) values ('2 car, 1 room apartments', 0.6);
insert into ms_info (label, mark) values ('1 car, 2 room apartments', 0.7);
insert into ms_info (label, mark) values ('1 car, 4 room apartments', 0.8);
insert into ms_info (label, mark) values ('1 car, house', 0.8);
insert into ms_info (label, mark) values ('1 room apartmens', 0.3);
insert into ms_info (label, mark) values ('-', 0.01);

insert into education_info (label, mark) values ('KNEU', 0.2);
insert into education_info (label, mark) values ('KNTEU', 0.1);
insert into education_info (label, mark) values ('KPI', 0.5);
insert into education_info (label, mark) values ('KNU', 0.5);


DO
$do$
BEGIN
   FOR i IN 1..20 LOOP
     insert into klient_profile (passport_seria, passport_number, PIB, adress, phone_number, age_id, ms_id, education_id, incomes_id)
      values  ('TT', 1212+i, 'Иванов Иван Иванович', 'spasskaya str.2', 1111111+i, i, i, 1, i);
   END LOOP;
END
$do$;

