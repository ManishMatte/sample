namespace manish;
using { cuid, managed } from '@sap/cds/common';


entity employees : cuid, managed {

    name : String(50);
    empid : String (30);
    dob : Date;
    isdel : Boolean default false;

}