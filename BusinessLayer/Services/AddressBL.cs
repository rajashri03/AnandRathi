using BusinessLayer.Interfaces;
using CommonLayer.Models;
using RepositoryLayer.Interfaces;
using RepositoryLayer.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLayer.Services
{
    public class AddressBL:IAddressBL
    {
        IAddressRL addressrl;
        public AddressBL(IAddressRL addressrl)
        {
            this.addressrl = addressrl;
        }
        public AddressModel AddAddress(AddressModel address)
        {
            try
            {
                return addressrl.AddAddress(address);
            }
            catch (Exception)
            {

                throw;
            }
        }
        public IEnumerable<GetAddressModel> GetAllAddress()
        {
            try
            {
                return addressrl.GetAllAddress();
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
