create table AddressInformation(AddressLine1 varchar(200),AddressLine2 varchar(200),AddressLine3 varchar(200),
							   Pincode bigint,City varchar(200),District varchar(200),State varchar(150),
								Country varchar(200),Id serial);
							
							select * from AddressInformation;
Create or replace procedure SP_AddAddrss
(
	AddressLine1 varchar(200),AddressLine2 varchar(200),AddressLine3 varchar(200),
							   Pincode bigint,City varchar(200),District varchar(200),State varchar(150),Country varchar(200)
	
)
Language sql
as
$$
		Insert into AddressInformation(addressline1,addressline2,addressline3,pincode,city,district,state,country)    
		Values (AddressLine1,AddressLine2,AddressLine3,Pincode,City,District,State,Country) 
 
$$
