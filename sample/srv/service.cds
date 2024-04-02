using {manish as my} from '../db/schema';

service CatalogService{
@requires: 'authenticated-user'
entity Employees as projection on my.employees where isdel = false order by ID;

}