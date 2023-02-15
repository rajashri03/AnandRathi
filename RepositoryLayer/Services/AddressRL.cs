using CommonLayer.Models;
using Microsoft.Extensions.Configuration;
using Npgsql;
using RepositoryLayer.Interfaces;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Reflection;
using System.Text;

namespace RepositoryLayer.Services
{
    public class AddressRL:IAddressRL
    {
        private IConfiguration config;
        NpgsqlConnection sqlConnection;
        string ConnString = "Server=localhost;Port=5432;Database=Addresses;Username=postgres; Password=rajashri@315;Integrated Security=True;";
        public AddressRL(IConfiguration config)
        {
            this.config = config;
        }
        public AddressModel AddAddress(AddressModel address)
        {
            sqlConnection = new NpgsqlConnection(ConnString);
            using (sqlConnection)
            {
                try
                {
                    NpgsqlCommand sqlCommand = new NpgsqlCommand("Call SP_AddAddrss(:AddressLine1,:AddressLine2,:AddressLine3,:Pincode,:City,:District,:State,:Country)", sqlConnection);
                    sqlCommand.CommandType = System.Data.CommandType.Text;

                    sqlConnection.Open();
                    sqlCommand.Parameters.AddWithValue("AddressLine1", DbType.String).Value=address.AddressLine1;
                    sqlCommand.Parameters.AddWithValue("AddressLine2", DbType.String).Value= address.AddressLine2;
                    sqlCommand.Parameters.AddWithValue("AddressLine3", DbType.String).Value= address.AddressLine3;
                    sqlCommand.Parameters.AddWithValue("Pincode", DbType.Int64).Value=address.Pincode;
                    sqlCommand.Parameters.AddWithValue("City", DbType.String).Value= address.City;
                    sqlCommand.Parameters.AddWithValue("District", DbType.String).Value=address.District;
                    sqlCommand.Parameters.AddWithValue("State", DbType.String).Value = address.State;
                    sqlCommand.Parameters.AddWithValue("Country", DbType.String).Value=address.Country;

                    int result = sqlCommand.ExecuteNonQuery();
                    if (result != null)
                        return address;
                    else
                        return null;
                }
                catch (Exception ex)
                {
                    throw new Exception(ex.Message);
                }
                finally
                {
                    sqlConnection.Close();
                }
            }
        }
    }
}
