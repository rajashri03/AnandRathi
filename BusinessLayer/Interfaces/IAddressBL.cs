using CommonLayer.Models;
using RepositoryLayer.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLayer.Interfaces
{
    public interface IAddressBL
    {
        public AddressModel AddAddress(AddressModel address);
        public IEnumerable<GetAddressModel> GetAllAddress();
    }
}
