using BusinessLayer.Interfaces;
using CommonLayer.Models;
using RepositoryLayer.Interfaces;
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
    }
}
